window.onresize = () => {
  if (window.innerWidth < 1220) {
    document.getElementById("aboutSection").style.display = 'block'
    document.getElementById("about").style.marginRight = '5%'
  }
  else {
    document.getElementById("about").style.marginRight = '0%'
    document.getElementById("aboutSection").style.display = 'flex'
  }
}
