<header>
  <title>My thoughts - All</title>
</header>

<style>
  .latest-container {
    margin-top: 5%;
    padding: 5%;
  }
  
  .music {
    margin-bottom: 0% !important;
    width: 100%;
    padding: 5%;
  }

  .games {
    margin-bottom: 0% !important;
    width: 100%;
    margin-left: 5%;
    padding: 5%;
  }

  .rest {
    display: flex;
  }
</style>

<script>
  import { base } from '$app/paths';

  export let data
</script>

<h1 class="text">All of my thoughts:</h1>
<span class="text">This is my thoughts on things that really got me.</span>
<div class="container latest-container">
  <h1 class="text">My latest thoughts:</h1>
  <a href="{ base }/blog/mythoughts/game/latest" class="text"> - On game <b>{ data.gthoughts[0].title }</b> >></a><br>
  <a href="{ base }/blog/mythoughts/music/latest" class="text"> - On track <b>{ data.mthoughts[0].title }</b> >></a>
</div>
<section class="rest">
  <div class="container music">
    <h1 class="text">My previous thoughts on music:</h1>

    {#each data.mthoughts.slice(1,-1) as thought}
      <a href="{ base }/blog/mythoughts/music/{thought.slug}" class="text">{ thought.title } >></a> <br>
    {/each}

  </div>
  <div class="container games">
    <h1 class="text">My previous thoughts on games:</h1>

    {#each data.gthoughts.slice(1,-1) as thought}
      <a href="{ base }/blog/mythoughts/game/{thought.slug}" class="text">{ thought.title } >></a> <br>
    {/each}

  </div>
</section>