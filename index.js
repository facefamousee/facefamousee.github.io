const a = document.getElementById("div-images")

const b = ["06122025_celebration_concert.jpg", "06122025_hike.jpg", "06122025_jtt_fishfry.jpg", "06122025_sansan.jpg", "06192025_united_we_stand.jpg", "06292025_steve.jpg", "07012025_mrsnapper_chef_sanjay.png", "07162025_ladybug.jpg", "07292025_naughtytwin_fishfry.JPEG"]

b.forEach(element => {a.innerHTML += `<img class="images" src="assets/images/${element}"/>`});