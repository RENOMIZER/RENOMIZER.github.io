<head>
  <title>Blog Page</title>
</head>

<style>
  .thoughts {
    margin: 5% 0%;
    padding: 5%;  
  }

  .posts {
    padding: 5%;
    margin-bottom: 0% !important;
  }
</style>

<script>
  import { base } from '$app/paths';

  export let data
</script>

<h1 class="text">My blog:</h1>
<span class="text">Here I post stuff in more details than I usually do on Twitter/Bsky or in release notes on Github.</span>
<div class="container thoughts">
  <h1 class="text">My thoughts:</h1>
  <a href="{ base }/blog/mythoughts" class="text">My latest and previous thoughts on some music and games >></a>
</div>
<div class="container posts">
  <h1 class="text">My posts:</h1>

  {#each data.summaries as post}
    <a href="{ base }/blog/{ post.date }" class="text">{ post.date } - { post.title }</a> <br>
  {/each}
  
</div>  