const a = document.getElementById("div-images")

const b = ["05082025_round_robin.png", "05202025_juneteenth_gemini.jpeg", "05212025_prayer_brunch.JPG", "06042025_rowan_t_bday.jpg", "06122025_celebration_concert.jpg", "06122025_jtt_fishfry.jpg", "06192025_united_we_stand.jpg"]

b.forEach(element => {a.innerHTML += `<img class="images" src="assets/images/${element}"/>`});