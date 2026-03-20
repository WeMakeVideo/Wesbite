<script>
  const items = ['Filming', '3D Work', 'Motion Graphics', 'Brand Films', 'Visual Effects', 'Animation', 'Direction', 'Post Production'];
</script>

<div class="ticker">
  <div class="ticker-track">
    {#each [...items, ...items] as item}
      <span class="ticker-item">{item}</span>
      <span class="ticker-dot">✦</span>
    {/each}
  </div>
</div>

<style>
  .ticker {
    background: var(--black);
    padding: 16px 0;
    overflow: hidden;
    white-space: nowrap;
  }

  .ticker-track {
    display: inline-flex;
    align-items: center;
    gap: 0;
    animation: scroll 24s linear infinite;
    will-change: transform;
  }

  .ticker-item {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 17px;
    color: var(--yellow);
    padding: 0 24px;
  }

  .ticker-dot {
    color: rgba(255,255,255,0.2);
    font-size: 10px;
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
</style>
