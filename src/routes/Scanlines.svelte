<style>
  .scanlines {
    animation: scan var(--repeat) linear infinite;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
    background: linear-gradient( to bottom, #0000000a, #0000000a var(--area), #cccccc0a var(--area), #cccccc0a );
    background-color: rgba(0, 0, 0, 0.075);
    background-size: 100% var(--height);
    background-position-y: 0px;
    pointer-events: none;
  }

  @keyframes scan {
    0% { background-position-y: 0px; }
    100% { background-position-y: var(--height); }
  }
</style>

<div class="scanlines"/>