let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
let pfps = [
  "/resources/images/pfp1.jpg",
  "/resources/images/pfp2.jpg",
  "/resources/images/pfp3.jpg"
]
let currentPfp = 2

window.onload = () => {
  document.getElementById('prevPfp').addEventListener('click', () => changePfp('prev'))
  document.getElementById('nextPfp').addEventListener('click', () => changePfp('next'))

  if (isMobile) {
    document.body.style.padding = "10px 5%"
    document.querySelector('.header').style.height = "100px"
    document.querySelectorAll('.text').forEach(e => { e.style.fontSize = "275%" }) 
  }
}

function changePfp(dir) {
  switch (dir) {
    case 'next':
      if (currentPfp != 2) {
        currentPfp++
        document.getElementById('pfp').setAttribute('src', pfps[currentPfp])
      }
      else {
        currentPfp = 0
        document.getElementById('pfp').setAttribute('src', pfps[currentPfp])
      }
      
      break
      
    case 'prev':
      if (currentPfp != 0) {
        currentPfp--
        document.getElementById('pfp').setAttribute('src', pfps[currentPfp])
      }
      else {
        currentPfp = 2
        document.getElementById('pfp').setAttribute('src', pfps[currentPfp])
      }

      break
  }
}
