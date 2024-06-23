let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

window.addEventListener("DOMContentLoaded", () => {
  if (isMobile) {
    $("svg").css("transform", "scale(2)")
    $(".text").css("font-size", "300%")
  }
})