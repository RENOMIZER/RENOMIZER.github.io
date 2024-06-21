let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

window.onload = () => {
  if (isMobile) {
    document.querySelector('svg').style.transform = 'scale(2)'
    document.querySelectorAll('.text').forEach(e => { e.style.fontSize = "300%" }) 
  }
}