<script>
  export let data
</script>

<h1 class="text">{ data.date } - { data.title }</h1>

<p class="text">
  {@html data.post }
</p>

<a href="/blog" class="text">{ '<<' } My previous posts</a>