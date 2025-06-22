const a = document.getElementById("div-images")

const b = ["05272025_convention.jpg", "06042025_drip3.JPG", "06042025_rowan_t_bday.jpg", "06122025_celebration_concert.jpg", "06122025_jtt_fishfry.jpg", "06192025_united_we_stand.jpg", "07162025_ladybug.jpg"]

b.forEach(element => {a.innerHTML += `<img class="images" src="assets/images/${element}"/>`});