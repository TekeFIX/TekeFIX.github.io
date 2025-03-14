        // Modalin elementit
        const modal = document.getElementById("imageModal");
        const openModalBtn = document.getElementById("openModalBtn");
        const closeModalBtn = document.getElementById("closeModalBtn");

        // Avaa modal, kun klikataan "REFERENSSIT"-linkkiä
        openModalBtn.addEventListener("click", function(event) {
            event.preventDefault();  // Estää linkin oletustoiminnon
            modal.style.display = "block";  // Näyttää modalin
        });

        // Sulje modal, kun klikataan sulkemispainiketta
        closeModalBtn.addEventListener("click", function() {
            modal.style.display = "none";  // Piilottaa modalin
        });

        // Sulje modal, kun käyttäjä klikkaa modalin ulkopuolelle
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";  // Piilottaa modalin
            }
        });

        // Kuvaslideri
        const prevButton = document.getElementById("prev-slide");
        const nextButton = document.getElementById("next-slide");
        const images = document.querySelectorAll(".image-item");

        let currentIndex = 0;

        function showImage(index) {
            if (index >= images.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = images.length - 1;
            }

            images.forEach((img, i) => {
                img.style.display = (i === currentIndex) ? "block" : "none";
            });
        }

        prevButton.addEventListener("click", function() {
            currentIndex--;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", function() {
            currentIndex++;
            showImage(currentIndex);
        });

        // Alusta ensimmäinen kuva näkyviin
        showImage(currentIndex);