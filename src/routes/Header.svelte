<style>
  .header {
    height: 50px;
    width: auto;
    min-width: 442.8px;
    margin-bottom: 10px;
    padding: 10px 5%;
    border-color: var(--green);
    border-style: solid;
    border-width: 3px;
    border-radius: 2px;
    box-shadow: 0 0 5px var(--green);
    display: flex;
  }

  .header>* {
    align-self: center;
    margin: auto;
  } 
</style>

<script>
  import { base } from '$app/paths';
</script>

<div class="header">
  <a href="{ base }/" class="text">[Home]</a>
  <a href="{ base }/underconstruction" class="text">[About]</a>
  <a href="{ base }/blog" class="text">[Blog]</a>
  <a href="{ base }/underconstruction" class="text">[Links]</a>   
</div>