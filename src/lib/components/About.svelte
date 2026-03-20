<script>
  import { onMount } from 'svelte';

  let section;
  let stat1 = 0, stat2 = 0, stat3 = 0;

  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(section.querySelectorAll('.reveal'), {
      opacity: 0, y: 48, duration: 1, ease: 'expo.out',
      stagger: 0.12,
      scrollTrigger: { trigger: section, start: 'top 75%' }
    });

    // Animated counters
    ScrollTrigger.create({
      trigger: section.querySelector('.stats'),
      start: 'top 80%',
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: 8, duration: 1.5, ease: 'power2.out',
          onUpdate: function() { stat1 = Math.round(this.targets()[0].val); }
        });
        gsap.to({ val: 0 }, {
          val: 200, duration: 2, ease: 'power2.out',
          onUpdate: function() { stat2 = Math.round(this.targets()[0].val); }
        });
        gsap.to({ val: 0 }, {
          val: 40, duration: 1.8, ease: 'power2.out',
          onUpdate: function() { stat3 = Math.round(this.targets()[0].val); }
        });
      }
    });
  });
</script>

<section id="about" bind:this={section}>
  <div class="left">
    <p class="section-label reveal">The studio</p>
    <h2 class="about-title reveal">
      We <span class="on-black">make</span><br>
      things<br>
      <em>move.</em>
    </h2>
  </div>
  <div class="right">
    <p class="body-text reveal">We're a creative production studio built around a simple belief — that great video should feel like something. We combine on-location filming, photorealistic 3D, and kinetic motion design to tell stories that actually land.</p>
    <p class="body-text reveal" style="margin-top: -16px">Clients come to us when they need work that goes beyond the brief. We don't do average. We don't do template. We do <em>wemake.video.</em></p>
    <div class="stats reveal">
      <div class="stat">
        <p class="stat-num">{stat1}<span>+</span></p>
        <p class="stat-label">Years active</p>
      </div>
      <div class="stat">
        <p class="stat-num">{stat2}<span>+</span></p>
        <p class="stat-label">Projects delivered</p>
      </div>
      <div class="stat">
        <p class="stat-num">{stat3}<span>+</span></p>
        <p class="stat-label">Clients worldwide</p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background: var(--yellow);
    padding: 140px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  @media (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
      gap: 48px;
      padding: 64px 20px 80px;
    }
    .stats { grid-template-columns: repeat(3, 1fr); gap: 12px; }
    .stat-num { font-size: 36px; }
  }

  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.4);
    margin-bottom: 32px;
  }

  .about-title {
    font-family: var(--font-display);
    font-style: normal;
    font-weight: 900;
    font-size: clamp(48px, 5.5vw, 84px);
    line-height: 0.95;
    text-shadow: 3px 3px 0 rgba(10,10,10,0.08);
  }
  .about-title em { font-style: italic; }
  .on-black {
    background: var(--black);
    color: var(--white);
    padding: 2px 8px 4px;
    display: inline;
  }

  .body-text {
    font-size: 17px;
    line-height: 1.8;
    font-weight: 300;
    color: rgba(10,10,10,0.7);
    margin-bottom: 28px;
  }
  .body-text em { font-style: italic; color: var(--black); font-weight: 400; }

  .stats {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 24px;
    border-top: 1px solid rgba(10,10,10,0.12);
    padding-top: 40px;
    margin-top: 16px;
  }

  .stat-num {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: 44px;
    line-height: 1;
    margin-bottom: 6px;
    text-shadow: 2px 2px 0 rgba(10,10,10,0.08);
  }
  .stat-num span { font-size: 28px; }

  .stat-label {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.4);
    font-weight: 500;
  }
</style>
