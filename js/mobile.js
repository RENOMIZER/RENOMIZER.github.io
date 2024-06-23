let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

window.addEventListener("DOMContentLoaded", () => {
  if (isMobile) {
    document.body.style.padding = "5%"
    $(".header").css({"height": "100px", "border-width": "6px", "box-shadow": "0 0 10px var(--green)"})
    $(".text").css({"font-size": "275%", "text-shadow": "0 0 10px var(--green)"})
    $(".container").css({"border-width": "6px", "box-shadow": "0 0 10px var(--green)"})
    $(".obs-section").css("flex-flow", "column")
    $(".game").css("margin", "0%")
    $(".music > img").css("width", "100%")
  }
})