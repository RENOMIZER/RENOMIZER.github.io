<head>
  <title>Renomizer's Terminal</title>
</head>

<style>
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
    
  .pfp-container {
    width: min-content;
    height: min-content;
    margin-left: 5%;
    padding-bottom: 5%; 
    margin-bottom: 10px;
  }

  .pfp, .pfp>img {
    max-height: 200px;
    max-width: 200px;
    height: 200px;
    width: 200px;
  }

  .pfp-controler {
    display: flex;
    justify-content: center;
  }

  .pfp-controler>* {
    margin: 5%;
    user-select: none;
  }

  .music {
    height: auto;
    display: flex;
    flex-direction: column;
    margin-right: 5%;
    padding: 5%;
  }

  .game {
    height: auto !important;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    padding: 5%;
  }

  .music>img, .game>img{
    margin: auto 0%;
    width: 100%
  }

  .about-section {
    display: flex;
  }

  .about {
    padding: 5%;
  }

  .obs-section {
    display: grid;
    grid-auto-flow: column;
  }
</style>

<script lang='ts'>
  export let data;
  let pfp = 1

  function chPfp(event:Event) { 
    const elem = event.target! as HTMLElement
    elem.innerText === '<' ? pfp -= 1 : pfp += 1

    if (pfp > data.pfps.length) {
      pfp = 1
    }
    else if (pfp < 1) {
      pfp = data.pfps.length
    } 
  }
</script>

<section class="about-section">
  <div class="container about" id="about">
    <h1 class="text">About Me.</h1>
    <p class="text">
      My name is Konstantin but usually I go by the nickname Renomizer. <br>
      I'm 17 years old student from Russia and my field of study is Software Engineering. <br>
      My main languages are JavaScript and Python but right now I'm also studying C. <br>
    </p>
  </div>
  <div class="pfp-container">
    <div class="container pfp">
      <img src="pfps/{pfp}.jpg" alt="Some of the profile pictures I use" id="pfp">
    </div>
    <div class="pfp-controler">
      <button class="text" on:click={chPfp}> {'<'} </button>
      <span class="text"> | </span>
      <button class="text" on:click={chPfp}> {'>'} </button>
    </div>
    <span class="text">Some of the profile pictures I use.</span>
  </div>
</section>

<section class="obs-section">
  <div class="container music">
    <span class="text" style="margin-bottom: 5%;">My current music obssession is:</span>
    <img src={data.obs.musicArt} alt={data.obs.music}>
    <a href={data.obs.musicLink} class="text" style="font-weight: bold; margin: 5% 0%;">{data.obs.music}</a>
    <a href="/blog/mythoughts/music/latest" class="text">My thoughts >></a>
  </div>
  <div class="container game">
    <span class="text" style="margin-bottom: 5%;">My current video game obssession is:</span>
    <img src={data.obs.gameArt} alt={data.obs.game}>
    <a href={data.obs.gameLink} class="text" style="font-weight: bold; margin: 5% 0%;">{data.obs.game}</a>
    <a href="/blog/mythoughts/game/latest" class="text">My thoughts >></a>
  </div>
</section>
