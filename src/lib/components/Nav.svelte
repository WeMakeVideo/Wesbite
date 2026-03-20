<script>
  import Logo from './Logo.svelte';
  import { onMount } from 'svelte';

  let dark = true;

  onMount(() => {
    const onScroll = () => {
      const disciplines = document.getElementById('disciplines');
      const work = document.getElementById('work');
      const about = document.getElementById('about');
      const contact = document.getElementById('contact');
      if (!disciplines) return;

      const y = window.scrollY;
      const dTop = disciplines.offsetTop;
      const wTop = work?.offsetTop ?? 9999;
      const aTop = about?.offsetTop ?? 9999;
      const cTop = contact?.offsetTop ?? 9999;

      dark = y < dTop - 80 ||
             (y >= wTop - 80 && y < aTop - 80) ||
             y >= cTop - 80;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav class:dark>
  <a href="/" class="logo-link" aria-label="wemake.video home">
    <Logo height={36} />
  </a>
  <ul>
    <li><a href="#disciplines">Work</a></li>
    <li><a href="#work">Projects</a></li>
    <li><a href="#about">Studio</a></li>
    <li><a href="#contact" class="nav-cta">Start a project</a></li>
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 48px;
  }

  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
  }

  ul {
    display: flex;
    gap: 40px;
    list-style: none;
    align-items: center;
  }

  ul a {
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--black);
    transition: opacity 0.2s, color 0.4s;
  }
  ul a:hover { opacity: 0.5; }

  nav.dark ul a { color: var(--white); }

  .nav-cta {
    padding: 10px 22px;
    background: var(--yellow);
    color: var(--black) !important;
    opacity: 1 !important;
    box-shadow: 3px 3px 0 rgba(0,0,0,0.2);
    transition: transform 0.2s, box-shadow 0.2s !important;
  }
  .nav-cta:hover {
    transform: translate(-2px,-2px) !important;
    box-shadow: 5px 5px 0 rgba(0,0,0,0.3) !important;
    opacity: 1 !important;
  }
</style>
