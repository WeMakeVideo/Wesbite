<script>
  import Logo from './Logo.svelte';
  const year = new Date().getFullYear();
</script>

<footer>
  <a href="/" class="logo-link" aria-label="wemake.video home">
    <Logo height={28} />
  </a>
  <p class="copy">© {year} wemake.video — All rights reserved</p>
  <div class="socials">
    <a href="https://instagram.com">Instagram</a>
    <a href="https://vimeo.com">Vimeo</a>
    <a href="https://linkedin.com">LinkedIn</a>
  </div>
</footer>

<style>
  footer {
    background: var(--black);
    border-top: 1px solid rgba(255,255,255,0.05);
    padding: 32px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      gap: 20px;
      padding: 32px 20px;
      text-align: center;
    }
  }

  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
  }

  .copy {
    font-family: var(--font-sans);
    font-size: 12px;
    color: rgba(255,255,255,0.2);
  }

  .socials { display: flex; gap: 24px; }
  .socials a {
    font-family: var(--font-sans);
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    text-decoration: none;
    transition: color 0.2s;
  }
  .socials a:hover { color: var(--yellow); }
</style>
