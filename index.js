const a = document.getElementById("div-images")

const b = ["06192025_united_we_stand.jpg", "06252025_pennyconcert.png", "06292025_steve.jpg", "07012025_mrsnapper_chef_sanjay.png", "07102025_thirdanniversary.jpg", "07162025_ladybug.jpg", "07292025_naughtytwin_fishfry.JPEG"]

b.forEach(element => {a.innerHTML += `<img class="images" src="assets/images/${element}"/>`});