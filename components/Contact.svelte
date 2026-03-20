<script>
  import { onMount } from 'svelte';

  let section, btn;
  let btnX = 0, btnY = 0;

  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(section.querySelectorAll('.reveal'), {
      opacity: 0, y: 40, duration: 1, ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: section, start: 'top 75%' }
    });

    // Magnetic button
    if (btn) {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
      });
    }
  });
</script>

<section id="contact" bind:this={section}>
  <div class="bg-text" aria-hidden="true">wemake</div>
  <p class="contact-label reveal">Start something</p>
  <h2 class="contact-title reveal">Got a<br><em>project?</em></h2>
  <p class="contact-sub reveal">Let's make something worth watching.</p>
  <a href="mailto:hello@wemake.video" class="email reveal">hello@wemake.video</a>
  <div class="actions reveal">
    <a href="mailto:hello@wemake.video" class="btn-primary magnetic" bind:this={btn} data-cursor="LET'S GO">
      Start a project
    </a>
    <a href="#work" class="btn-ghost">See our work first</a>
  </div>
</section>

<style>
  section {
    background: var(--black);
    padding: 160px 48px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .bg-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(100px, 20vw, 300px);
    color: rgba(255,255,255,0.022);
    white-space: nowrap;
    pointer-events: none;
    line-height: 1;
    user-select: none;
  }

  .contact-label {
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-bottom: 36px;
  }

  .contact-title {
    font-family: var(--font-display);
    font-style: normal;
    font-weight: 900;
    font-size: clamp(56px, 8vw, 120px);
    color: var(--white);
    line-height: 0.9;
    margin-bottom: 24px;
    position: relative;
  }
  .contact-title em {
    font-style: italic;
    color: var(--yellow);
    text-shadow: 3px 3px 0 rgba(0,0,0,0.3);
  }

  .contact-sub {
    color: rgba(255,255,255,0.4);
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 52px;
    position: relative;
  }

  .email {
    display: block;
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(18px, 2.4vw, 30px);
    color: var(--yellow);
    text-decoration: none;
    border-bottom: 2px solid rgba(245,168,0,0.25);
    padding-bottom: 6px;
    display: inline-block;
    margin-bottom: 56px;
    position: relative;
    transition: border-color 0.3s;
  }
  .email:hover { border-color: var(--yellow); }

  .actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    position: relative;
  }

  .btn-primary {
    display: inline-block;
    background: var(--yellow);
    color: var(--black);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 22px 48px;
    box-shadow: 5px 5px 0 rgba(245,168,0,0.2);
    transition: box-shadow 0.2s;
    will-change: transform;
  }
  .btn-primary:hover { box-shadow: 8px 8px 0 rgba(245,168,0,0.35); }

  .btn-ghost {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    padding-bottom: 4px;
    transition: color 0.3s, border-color 0.3s;
  }
  .btn-ghost:hover { color: var(--white); border-color: rgba(255,255,255,0.5); }
</style>
