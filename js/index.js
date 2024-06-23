let pfps = [
  "/resources/images/pfp1.jpg",
  "/resources/images/pfp2.jpg",
  "/resources/images/pfp3.jpg"
]
let currentPfp = 2
let obs

window.addEventListener("DOMContentLoaded", async () => {
  $("#nextPfp").on("click", () => changePfp('next'))
  $("#prevPfp").on("click", () => changePfp('prev'))

  await $.getJSON("/resources/data/current_obs.json", (data) => { obs = data })

  $("#musicObs").text(obs.music)
  $("#gameObs").text(obs.game)
  $("#musicObs").attr("href", obs.musicLink)
  $("#gameObs").attr("href", obs.gameLink)
  $(".music > img").attr("src", obs.musicArt)
  $(".game > img").attr("src", obs.gameArt)
})

function changePfp(dir) {
  switch (dir) {
    case 'next':
      currentPfp = currentPfp != 2 ? currentPfp+1 : 0

      break

    case 'prev':
      currentPfp = currentPfp != 0 ? currentPfp-1 : 2

      break
  }

  $("#pfp").attr('src', pfps[currentPfp])
}
