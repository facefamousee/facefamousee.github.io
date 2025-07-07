const a = document.getElementById("div-images")

const b = ["06122025_celebration_concert.jpg", "06122025_jtt_fishfry.jpg", "06122025_sansan.jpg", "06192025_united_we_stand.jpg", "06292025_steve.jpg", "07162025_ladybug.jpg"]

b.forEach(element => {a.innerHTML += `<img class="images" src="assets/images/${element}"/>`});