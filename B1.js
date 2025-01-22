
    document.addEventListener("DOMContentLoaded", function () {
      const subscribeButton = document.getElementById("subscribeButton");
      const subscriptionPopup = document.getElementById("subscriptionPopup");
      const generateButton = document.getElementById("generate");

      const surpriseButton = document.getElementById("surpriseMe");

      const promptInput = document.getElementById("prompt");

      const heightInput = document.getElementById("hInput");

      const widthInput = document.getElementById("wInput");

      const imageContainer = document.getElementById("image-container");

      const loadingSpinner = document.getElementById("loading-spinner");

      const genText = document.getElementById("generatedText");

      const downloadButton = document.getElementById("downloadImage");

      const voiceInputButton = document.getElementById("voiceInput");

     const randomDescriptions = [

    "A serene mountain landscape at sunrise",

    "A futuristic city with neon lights",

    "A mystical forest with glowing plants",

    "An abstract pattern of vibrant colors",

    "A dreamy underwater world with coral reefs",

    "A peaceful beach with golden sands at sunset",

    "A flying dragon soaring over a medieval castle",

    "A mysterious cave filled with glowing crystals",

    "A bustling futuristic city with flying cars",

    "A tranquil lake surrounded by lush forests",

    "A steampunk city with towering airships",

    "A neon-lit alley in a cyberpunk metropolis",

    "A giant robot standing tall in the middle of a city",

    "A glowing jellyfish floating in deep ocean waters",

    "A dark forest with a foggy atmosphere and glowing eyes",

    "A futuristic space station orbiting a distant planet",

    "A giant octopus in the deep sea",

    "A knight in shining armor riding a majestic horse",

    "A robot exploring a desolate alien planet",

    "A giant eagle soaring high above snow-covered mountains",

    "A samurai standing in front of a burning village",

    "A mystical portal opening in the middle of a forest",

    "A glowing moon over a deserted desert landscape",

    "A cyberpunk hacker breaking into a high-tech system",

    "A futuristic underwater city surrounded by sea creatures",

    "A spaceship flying through a colorful nebula",

    "A large, glowing mushroom forest in the middle of a jungle",

    "A futuristic soldier standing on the edge of a cliff",

    "A dragon perched atop a mountain peak, breathing fire",

    "A flying car zooming through a neon-lit city",

    "A dark sorcerer casting spells in a misty cave",

    "A magical forest with bioluminescent plants",

    "A holographic animal walking through a futuristic city",

    "A mystical garden hidden deep in the jungle",

    "A giant sandstorm sweeping through a barren wasteland",

    "A wizard casting magic in an ancient library",

    "A mermaid swimming in an underwater city",

    "A spaceship landing on a distant planet with alien lifeforms",

    "A giant stone statue of a forgotten god in a jungle temple",

    "A futuristic train speeding through a tunnel",

    "A knight battling a fire-breathing dragon in a dark cavern",

    "A large, majestic tree standing in the middle of a field",

    "A time traveler exploring ancient Egypt",

    "A vampire standing on a balcony overlooking a city at night",

    "A phoenix rising from the ashes in a fiery sky",

    "A cyberpunk street filled with neon signs and advertisements",

    "A group of astronauts exploring an alien landscape",

    "A magical creature flying through a starry night sky",

    "A large waterfall cascading over a cliff into a crystal-clear pool",

    "A giant, ancient tree with glowing runes carved into its bark",

    "A futuristic military base on a distant moon",

    "A robot playing a piano in an empty futuristic hall",

    "A futuristic police car patrolling a glowing city street",

    "A massive spaceship traveling through a wormhole",

    "A giant robot battling an alien creature in a ruined city",

    "A mystical being with glowing eyes standing in a foggy field",

    "A cyborg riding a futuristic motorcycle in a neon city",

    "A haunted mansion surrounded by fog and overgrown plants",

    "A glowing city skyline at night with flying vehicles",

    "A mystical tree with glowing fruits in an enchanted forest",

    "A group of futuristic explorers walking through an alien desert",

    "A futuristic laboratory with glowing vials and high-tech equipment",

    "A giant, glowing jellyfish drifting in the ocean",

    "A beautiful sunrise over a vast, open plain",

    "A space explorer walking on the surface of Mars",

    "A medieval knight fighting off a horde of zombies",

    "A futuristic cityscape with floating skyscrapers",

    "A spaceship docked at a high-tech spaceport",

    "A giant, glowing crystal in the middle of a desert",

    "A robot designed to mimic human emotions and expressions",

    "A magical unicorn galloping through a mystical meadow",

    "A futuristic battlefield with flying drones and soldiers",

    "A group of ancient gods watching over a civilization",

    "A giant black hole pulling in a star system",

    "A surreal dreamscape with floating islands and waterfalls",

    "A powerful wizard standing on top of a mountain casting spells",

    "A futuristic, self-driving car zooming through a city",

    "A futuristic skyscraper with an outdoor garden",

    "A dark, abandoned factory filled with cobwebs and dust",

    "A glowing, bioluminescent sea in the middle of a forest",

    "A massive volcano erupting in a desolate wasteland",

    "A giant mechanical spider crawling through a futuristic city",

    "A neon-lit dragon flying through the sky",

    "A massive, ancient stone door covered in vines",

    "A futuristic amusement park on a distant planet",

    "A giant mech standing tall over a battlefield",

    "A time traveler standing in front of an ancient temple",

    "A giant, futuristic robot with glowing eyes",

    "A space station orbiting a distant planet with rings",

    "A magical castle hidden in a dense fog",

    "A mysterious alien artifact discovered in a jungle",

    "A cyberpunk ninja leaping across rooftops",

    "A giant alien creature walking through a city",

    "A futuristic military drone scanning the landscape",

    "A werewolf howling at a full moon in a dark forest",

    "A giant glowing moon hanging over a dark ocean",

    "A knight in shining armor standing before a dragon",

    "A futuristic flying motorcycle zooming through the sky",

    "A dark, abandoned hospital filled with strange creatures",

    "A dragon flying through a starry sky with a glowing trail",

    "A futuristic city built on floating islands",

    "A glowing, ethereal being floating through a dark cave",

    "A magical portal opening in the middle of a desert",

    "A giant spaceship traveling through a nebula",

    "A group of explorers walking through an alien jungle",

    "A giant crystal castle towering over a snowy landscape",

    "A glowing alien planet seen from a spaceship",

    "A sorceress casting a spell in an ancient forest",

    "A futuristic skyscraper with a holographic facade",

    "A massive, ancient tree with roots that reach into the sky",

    "A group of astronauts standing on a barren alien planet",

    "A futuristic soldier walking through a war-torn city",

    "A glowing portal opening up in the middle of a city street",

    "A giant sea monster attacking a futuristic city",

    "A time traveler standing in a medieval marketplace",

    "A futuristic spaceship flying through an asteroid field",

    "A glowing, transparent creature floating in space",

    "A magical forest with giant glowing mushrooms",

    "A futuristic robotic arm assembling a car in a factory",

    "A glowing city filled with futuristic skyscrapers",

    "A giant fire-breathing dragon perched on top of a tower",

    "A magical creature appearing from a cloud of mist",

    "A giant tree with glowing fruit in the middle of a city",

    "A mysterious alien race watching over an ancient city",

    "A massive creature swimming through a glowing ocean",

    "A group of astronauts discovering a hidden alien city",

    "A dark sorcerer summoning a creature from the abyss",

    "A futuristic weapon designed to harness the power of the sun",

    "A futuristic aircraft flying through a stormy sky",

    "A giant robot fighting off an army of alien invaders",

    "A glowing, bioluminescent jungle filled with strange creatures",

    "A futuristic, high-tech city built in the sky",

    "A cyberpunk hero battling enemies in a rainy alley",

    "A mysterious alien artifact hidden in a desert ruin",

    "A time traveler exploring a futuristic city",

    "A massive starship flying through an intergalactic wormhole",

    "A giant phoenix flying through a fiery sky",

    "A robot standing in a field of wildflowers",

    "A futuristic underwater laboratory hidden deep in the ocean",

    "A magical creature flying through a glowing forest",

    "A knight in armor walking through a moonlit forest",

    "A glowing holographic creature appearing from a portal",

    "A futuristic city skyline filled with flying cars",

    "A gigantic mech standing in the middle of a city",

    "A futuristic space station floating in the middle of a nebula",

    "A massive clocktower in the middle of a cyberpunk city",

    "A glowing alien artifact buried in a jungle",

    "A robot designed to protect a futuristic city",

    "A futuristic highway with vehicles traveling at high speed",

    "A mysterious alien planet with strange structures",

    "A medieval castle being attacked by a dragon",

    "A magical forest filled with glowing creatures",

    "A spaceship traveling through a colorful galaxy",

    "A giant sea turtle swimming through a glowing ocean",

    "A time traveler witnessing the fall of an ancient civilization",

    "A futuristic soldier in a high-tech exoskeleton",

    "A massive holographic display in the middle of a city",

    "A glowing, ethereal being walking through a dark forest",

    "A futuristic city with a giant holographic billboard",

    "A giant alien spaceship flying through an asteroid field",

    "A futuristic city with neon streets and flying cars",

    "A massive cyberpunk skyscraper with glowing lights",

    "A magical creature with glowing wings hovering above a lake",

    "A futuristic robot exploring a haunted house",

    "A time traveler observing a battle between ancient armies",

    "A dark, mystical forest with glowing creatures",

    "A futuristic soldier battling alien invaders in the city",

    "A giant alien structure discovered in the middle of a desert",

    "A futuristic city powered by renewable energy",

    "A magical stone circle hidden deep within the forest",

    "A glowing, alien planet with strange vegetation",

    "A time traveler standing in front of a massive pyramid",

    "A futuristic space station with glowing lights",

    "A giant, glowing jellyfish floating through space",

    "A massive stone statue of a forgotten god in a jungle",

    "A space station orbiting a distant planet",

    "A futuristic soldier wielding a glowing plasma rifle",

    "A glowing tree in the middle of a futuristic city",

    "A mystical creature with glowing horns in a foggy field",

    "A time traveler standing on the edge of a cliff at sunset",

    "A magical portal opening in a futuristic city",

    "A futuristic spaceship taking off from an alien planet",

    "A giant alien creature attacking a futuristic city",

    "A glowing, bioluminescent forest filled with strange creatures",

    "A futuristic city with towering skyscrapers and flying vehicles",

    "A robot assistant helping a human in a futuristic laboratory",

    "A massive ancient ruin hidden in a jungle",

    "A giant robotic guardian protecting an ancient temple",

    "A mystical moonlit lake with glowing creatures swimming",

    "A futuristic city skyline with holographic advertisements",

    "A giant phoenix flying through a fiery sky",

    "A futuristic soldier standing on a battlefield",

    "A glowing alien structure on a distant moon",

    "A magical forest with floating islands and glowing plants",

    "A time traveler witnessing the destruction of a city",

    "A futuristic space vehicle navigating through a dense asteroid field",

    "A giant sea serpent attacking a futuristic ship",

    "A glowing, transparent creature drifting through space",

    "A robotic explorer on a distant, frozen planet",

    "A dark sorcerer summoning a powerful creature in a cave",

    "A futuristic army preparing for battle on an alien planet",

    "A glowing starship traveling through a wormhole",

    "A futuristic zoo filled with robotic animals",

    "A giant, ancient clocktower in the middle of a cyberpunk city",

    "A glowing alien tree in the middle of a dark forest",

    "A time traveler standing in front of a futuristic city",

    "A futuristic spaceport filled with alien ships",

    "A giant mechanical dragon flying through a fiery sky",

    "A futuristic soldier standing on a battlefield under a glowing sky",

    "A cyberpunk hero fighting off an army of robotic enemies",

    "A futuristic laboratory filled with advanced technology",

    "A mystical island with glowing ruins and strange creatures",

    "A giant alien mothership descending upon a city",

    "A mysterious portal opening in the middle of a busy street",

    "A robot guarding an ancient treasure in a forgotten temple",

    "A futuristic car speeding through a neon-lit city street",

    "A glowing creature swimming in a bioluminescent ocean",

    "A time traveler witnessing the birth of a new galaxy",

    "A dark sorcerer performing a ritual in a haunted castle",

    "A glowing space portal opening in the middle of a field",

    "A futuristic battle between mechs and giant monsters",

    "A giant alien creature rising from the ocean",

    "A futuristic city with a giant holographic screen",

    "A group of explorers navigating through an alien jungle",

    "A massive robot defending a futuristic city from an alien invasion",

    "A mystical wizard summoning creatures from a magic book",

    "A futuristic ship sailing through the stars",

    "A group of time travelers witnessing the end of an era",

    "A giant phoenix spreading its wings across a glowing sky",

    "A futuristic city built on floating platforms",

    "A glowing alien structure surrounded by a dense forest",

    "A robot scientist experimenting with advanced technology",

    "A futuristic soldier battling a giant sea monster",

    "A magical forest with giant, glowing butterflies",

    "A time traveler standing on an ancient battlefield",

    "A futuristic city in the clouds with flying drones",

    "A giant sea creature attacking a futuristic submarine",

    "A glowing, transparent creature floating in the sky",

    "A mystical temple hidden deep within a jungle",

    "A futuristic laboratory with a massive, glowing reactor",

    "A glowing alien planet seen from the surface of the moon",

    "A group of astronauts exploring a mysterious alien structure",

    "A giant mech battling a monstrous alien creature",

    "A glowing city with flying cars zooming past",

    "A magical creature with ethereal wings flying through a moonlit forest",

    "A futuristic city with a massive glowing energy shield",

    "A time traveler exploring an ancient, forgotten city",

    "A massive ancient pyramid with a futuristic twist",

    "A giant mechanical creature stalking through a dark city",

    "A dark, abandoned city overtaken by nature",

    "A glowing, otherworldly landscape filled with strange structures",

    "A futuristic spaceship zooming through a dense asteroid field",

    "A massive futuristic battle with robots and drones",

    "A glowing, bioluminescent city built underground",

    "A robot sitting on a futuristic park bench in a city",

    "A futuristic drone soaring through a cyberpunk skyline",

    "A mysterious portal leading to an alternate reality",

    "A mystical moonlit forest with glowing creatures",

    "A futuristic city with a giant mechanical spider",

    "A group of astronauts exploring an ancient, ruined city",

    "A giant jellyfish floating above an oceanic city",

    "A magical knight standing in front of a castle at night",

    "A futuristic battlefield with flying drones and laser weapons",

    "A giant mythical creature appearing from the sea",

    "A glowing starship traveling through a nebula",

    "A robotic arm building a futuristic city",

    "A massive hologram projected in the middle of a city",

    "A time traveler watching an alien invasion unfold",

    "A glowing crystal cavern filled with strange lifeforms",

    "A futuristic city with glowing skyscrapers and flying vehicles"

   

];

 // Web Speech API: Speech Recognition

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {

      const recognition = new SpeechRecognition();

      recognition.continuous = false;

      recognition.lang = "en-US"; // Default language, change as needed

      recognition.interimResults = false;



      voiceInputButton.addEventListener("click", () => {

        recognition.start();

      });



      recognition.onresult = (event) => {

        const transcript = event.results[0][0].transcript;

        promptInput.value = transcript;

        alert("Speech recognized: " + transcript);

      };



      recognition.onerror = (event) => {

        console.error("Speech recognition error:", event.error);

        alert("Sorry, I couldn't recognize your speech. Please try again.");

      };

    } else {

      voiceInputButton.disabled = true;

      alert("Your browser does not support voice recognition.");

    }

      // Function to add watermark

      function addWatermarkToImage(image, width, height) {

        const canvas = document.createElement("canvas");

        const ctx = canvas.getContext("2d");

        canvas.width = width;

        canvas.height = height;



        // Draw the image

        ctx.drawImage(image, 0, 0, width, height);



        // Add watermark text

        ctx.font = "10px Poppins";

        ctx.fillStyle = "rgba(204, 255, 255)";

        ctx.textAlign = "right";

        ctx.fillText("NNC ✨", width - 10, height - 10);



        return canvas.toDataURL("image/png");

      }



      surpriseButton.addEventListener("click", function () {

        const randomIndex = Math.floor(Math.random() * randomDescriptions.length);

        promptInput.value = randomDescriptions[randomIndex];

      });



      generateButton.addEventListener("click", function () {

        const description = promptInput.value ? encodeURIComponent(promptInput.value) : "abstract art";

        const randomSeed = Math.floor(Math.random() * 1000000000);

        const height = heightInput.value || 360;

        const width = widthInput.value || 480;



        loadingSpinner.style.display = "block";

        genText.style.display = "none";

        generateButton.disabled = true;



        const imageUrl = `https://image.pollinations.ai/prompt/${description}?nologo=1&seed=${randomSeed}&height=${height}&width=${width}`;



        // Placeholder image (with watermark)

        const previewImage = new Image();

        previewImage.crossOrigin = "anonymous";

        previewImage.onload = function () {

          const previewImageDataUrl = addWatermarkToImage(previewImage, width, height);

          const watermarkImage = new Image();

          watermarkImage.src = previewImageDataUrl;

          imageContainer.innerHTML = "";

          imageContainer.appendChild(watermarkImage);



          genText.style.display = "block";

          downloadButton.style.display = "inline-block";

          downloadButton.href = previewImageDataUrl;

          downloadButton.download = "generated-image.png";



          loadingSpinner.style.display = "none";

          generateButton.disabled = false;

        };



        previewImage.src = imageUrl;

      });



    });

      // Check if the user is already subscribed
      if (!localStorage.getItem('subscribed')) {
        setTimeout(() => {
          subscriptionPopup.style.display = 'block';
        }, 1000); // Show popup after 1 second
      }

      // Handle subscription
      subscribeButton.addEventListener("click", function () {
        var options = {
          key: "rzp_live_X4DZnSdUxCtfV8", // Replace with your Razorpay Key ID
          amount: 2000, // 10 INR in paise
          currency: "INR",
          name: "Image Generator",
          description: "Weekly Subscription",
          image: "https://example.com/logo.png", // Optional: Add a logo
          handler: function (response) {
            if (response.razorpay_payment_id) {
              alert("Payment successful!");
              localStorage.setItem('subscribed', true);
              subscriptionPopup.style.display = 'none';
            }
          },
          prefill: {
            name: "User Name",
            email: "user@example.com",
            contact: "8016487441",
          },
          theme: {
            color: "#6a0dad"
          }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
      });

      // Set interval to show subscription at 10 AM every week
      setInterval(() => {
        const currentHour = new Date().getHours();
        if (currentHour === 10 && !localStorage.getItem('subscribed')) {
          subscriptionPopup.style.display = 'block';
        }
      }, 3600000); // Check every hour

  
