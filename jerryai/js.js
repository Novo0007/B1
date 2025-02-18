 document.addEventListener("DOMContentLoaded", function () {
      const generateButton = document.getElementById("generate");
      const promptInput = document.getElementById("prompt");
      const heightInput = document.getElementById("hInput");
      const widthInput = document.getElementById("wInput");
      const imageGrid = document.getElementById("image-grid");
      const loadingSpinner = document.getElementById("loading-spinner");
      const darkModeToggle = document.getElementById("dark-mode-toggle");
      const premiumButton = document.getElementById("premium-button");

      // Dark Mode Toggle
      darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
      });

      // Check Premium Status on Page Load
      function checkPremiumStatus() {
        const paymentData = JSON.parse(localStorage.getItem("premiumPayment"));
        const now = new Date();

        if (paymentData) {
          const lastPaymentDate = new Date(paymentData.timestamp);
          const nextPaymentDate = new Date(lastPaymentDate);
          nextPaymentDate.setMonth(nextPaymentDate.getMonth() + 1);
          nextPaymentDate.setHours(10, 0, 0, 0); // Set to next month's 10 AM

          if (now >= nextPaymentDate) {
            // Time for a new payment
            premiumButton.style.display = "block";
          } else {
            // Hide the button until next month's 10 AM
            premiumButton.style.display = "none";
          }
        } else {
          // No payment made yet, show the button
          premiumButton.style.display = "block";
        }
      }

      // Call the function to check premium status on page load
      checkPremiumStatus();

      // Premium Subscription with Razorpay
      premiumButton.addEventListener("click", function () {
        const options = {
          key: "rzp_live_X4DZnSdUxCtfV8", // Replace with your Razorpay key
          amount: 10000, // Amount in paise (e.g., 50000 = ₹500)
          currency: "INR",
          name: "JerryAi Premium",
          description: "Premium Subscription",
          image: "https://example.com/logo.png", // Replace with your logo
          handler: function (response) {
            alert("Payment successful! You are now a premium user.");
            // Store payment status and timestamp in localStorage
            localStorage.setItem("premiumPayment", JSON.stringify({
              status: "paid",
              timestamp: new Date().toISOString(),
            }));
            premiumButton.style.display = "none";
          },
          prefill: {
            name: "JerryAi Business ",
            email: "helpzappy@gamil.com",
            contact: "8016487441",
          },
          theme: {
            color: "#ff4b5c",
          },
        };

        const rzp = new Razorpay(options);
        rzp.open();
      });

      // Image Generation
      generateButton.addEventListener("click", function () {
        const description = promptInput.value ? encodeURIComponent(promptInput.value) : "abstract art";
        const height = heightInput.value || 360;
        const width = widthInput.value || 480;

        loadingSpinner.style.display = "block";
        imageGrid.innerHTML = ""; // Clear previous images

        const paymentData = JSON.parse(localStorage.getItem("premiumPayment"));
        const isPremium = paymentData && paymentData.status === "paid";

        const imageCount = isPremium ? 4 : 1; // Generate 4 images for premium, 1 for free
        const imagePromises = [];

        for (let i = 0; i < imageCount; i++) {
          const randomSeed = Math.floor(Math.random() * 1000000000);
          const imageUrl = `https://image.pollinations.ai/prompt/${description}?nologo=1&seed=${randomSeed}&height=${height}&width=${width}`;

          const promise = new Promise((resolve, reject) => {
            const previewImage = new Image();
            previewImage.crossOrigin = "anonymous";
            previewImage.onload = function () {
              resolve(previewImage);
            };
            previewImage.onerror = reject;
            previewImage.src = imageUrl;
          });

          imagePromises.push(promise);
        }

        // Wait for all images to load
        Promise.all(imagePromises)
          .then((images) => {
            images.forEach((image, index) => {
              // Create a container for each image and its download button
              const imageContainer = document.createElement("div");
              imageContainer.classList.add("image-container");

              // Append the image
              imageContainer.appendChild(image);

              // Create a download button for the image
              const downloadButton = document.createElement("a");
              downloadButton.classList.add("download-button");
              downloadButton.textContent = `Download Image ${index + 1}`;
              downloadButton.href = image.src;
              downloadButton.download = `generated-image-${index + 1}.png`;

              // Append the download button
              imageContainer.appendChild(downloadButton);

              // Append the container to the grid
              imageGrid.appendChild(imageContainer);
            });

            loadingSpinner.style.display = "none";
          })
          .catch((error) => {
            console.error("Error loading images:", error);
            alert("Failed to generate images. Please try again.");
            loadingSpinner.style.display = "none";
          });
      });
    });