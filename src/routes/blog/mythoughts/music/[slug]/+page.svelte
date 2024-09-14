<header>
  <title>My thoughts - Music</title>
</header>

<script>
  import { base } from '$app/paths';

  export let data
</script>

<h1 class="text">My thoughts on - { data.title }</h1>
<p class="text">
  {@html data.thought }
</p>

<a href="{ base }/blog/mythoughts" class="text">{ '<<' } My previous thoughts</a>