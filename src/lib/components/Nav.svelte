<script>
  import Logo from './Logo.svelte';
  import { onMount } from 'svelte';

  let dark = true;
  let menuOpen = false;

  function closeMenu() { menuOpen = false; }

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

  <!-- Desktop nav links -->
  <ul class="desktop-nav">
    <li><a href="#disciplines">Work</a></li>
    <li><a href="#work">Projects</a></li>
    <li><a href="#about">Studio</a></li>
    <li><a href="#contact" class="nav-cta">Start a project</a></li>
  </ul>

  <!-- Hamburger button (mobile only) -->
  <button
    class="hamburger"
    class:open={menuOpen}
    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    on:click={() => menuOpen = !menuOpen}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</nav>

<!-- Mobile menu overlay -->
{#if menuOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
  <div class="mobile-menu" on:click={closeMenu} role="presentation">
    <nav class="mobile-nav-inner" on:click|stopPropagation>
      <ul>
        <li><a href="#disciplines" on:click={closeMenu}>Work</a></li>
        <li><a href="#work" on:click={closeMenu}>Projects</a></li>
        <li><a href="#about" on:click={closeMenu}>Studio</a></li>
        <li><a href="#contact" class="mobile-cta" on:click={closeMenu}>Start a project</a></li>
      </ul>
    </nav>
  </div>
{/if}

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

  /* ── Desktop nav ── */
  .desktop-nav {
    display: flex;
    gap: 40px;
    list-style: none;
    align-items: center;
  }

  .desktop-nav a {
    font-family: var(--font-sans);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--black);
    transition: opacity 0.2s, color 0.4s;
  }
  .desktop-nav a:hover { opacity: 0.5; }

  nav.dark .desktop-nav a { color: var(--white); }

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

  /* ── Hamburger button ── */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    z-index: 101;
    flex-shrink: 0;
  }
  .hamburger span {
    display: block;
    height: 1.5px;
    background: var(--white);
    transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
    transform-origin: center;
  }
  nav:not(.dark) .hamburger span { background: var(--black); }

  /* X state */
  .hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
  .hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* ── Mobile menu overlay ── */
  .mobile-menu {
    position: fixed;
    inset: 0;
    z-index: 99;
    background: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mobile-nav-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .mobile-menu ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .mobile-menu a {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(32px, 10vw, 52px);
    color: var(--white);
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: color 0.2s;
  }
  .mobile-menu a:hover { color: var(--yellow); }

  .mobile-cta {
    font-size: clamp(20px, 6vw, 32px) !important;
    color: var(--yellow) !important;
    border-bottom: 2px solid var(--yellow);
    padding-bottom: 4px;
  }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    nav {
      padding: 18px 20px;
    }
    .desktop-nav {
      display: none;
    }
    .hamburger {
      display: flex;
    }
  }
</style>
