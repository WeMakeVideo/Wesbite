<script>
  import { onMount } from 'svelte';

  let section;

  const disciplines = [
    {
      num: '01',
      title: 'Filming',
      desc: 'From single-camera docs to full-crew commercial shoots. Every frame is intentional, crafted, and built to last beyond the trend cycle.',
    },
    {
      num: '02',
      title: '3D Work',
      desc: 'Product visualisation, architectural renders, character animation. We build worlds that don\'t exist yet — and make them look like they always did.',
    },
    {
      num: '03',
      title: 'Motion\nGraphics',
      desc: 'Title sequences, brand animations, explainer content. Motion that communicates at the speed of attention.',
    }
  ];

  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    const cards = section.querySelectorAll('.discipline');
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        delay: i * 0.12,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.from(section.querySelector('.section-label'), {
      opacity: 0, y: 20, duration: 0.8,
      scrollTrigger: { trigger: section, start: 'top 80%' }
    });

    // Magnetic effect
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.06;
        gsap.to(card, { x, y, duration: 0.4, ease: 'power2.out' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
      });
    });
  });
</script>

<section id="disciplines" bind:this={section}>
  <p class="section-label">What we do</p>
  <div class="grid">
    {#each disciplines as d, i}
      <div class="discipline">
        <p class="num">{d.num}</p>
        <h3 class="title">{d.title}</h3>
        <p class="desc">{d.desc}</p>
        <div class="arrow">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 8h10M8 3l5 5-5 5"/>
          </svg>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    background: var(--yellow);
    padding: 120px 48px 140px;
  }

  @media (max-width: 768px) {
    section { padding: 64px 20px 80px; }
    .section-label { margin-bottom: 40px; }
    .grid { grid-template-columns: 1fr; }
    .discipline {
      padding: 40px 0 !important;
      border-right: none !important;
    }
    .discipline:not(:last-child) { border-bottom: 1px solid rgba(10,10,10,0.12); }
    .arrow { right: 0 !important; bottom: 40px !important; }
  }

  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.4);
    margin-bottom: 72px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    border-top: 1px solid rgba(10,10,10,0.12);
  }

  .discipline {
    padding: 56px 44px 56px 0;
    border-right: 1px solid rgba(10,10,10,0.12);
    position: relative;
    will-change: transform;
    transition: background 0.4s;
  }
  .discipline:last-child { border-right: none; padding-right: 0; }
  .discipline:not(:first-child) { padding-left: 44px; }
  .discipline:hover { background: rgba(10,10,10,0.04); }

  .num {
    font-size: 11px;
    letter-spacing: 0.16em;
    color: rgba(10,10,10,0.3);
    font-weight: 500;
    margin-bottom: 36px;
  }

  .title {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(34px, 3.2vw, 52px);
    line-height: 1;
    margin-bottom: 22px;
    white-space: pre-line;
    text-shadow: 2px 2px 0 rgba(10,10,10,0.1);
  }

  .desc {
    font-size: 14px;
    line-height: 1.75;
    color: rgba(10,10,10,0.6);
    font-weight: 300;
    max-width: 260px;
  }

  .arrow {
    position: absolute;
    bottom: 56px;
    right: 44px;
    width: 38px;
    height: 38px;
    border: 1.5px solid rgba(10,10,10,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    color: var(--black);
  }
  .discipline:last-child .arrow { right: 0; }
  .discipline:hover .arrow {
    background: var(--black);
    border-color: var(--black);
    color: var(--yellow);
  }
  .arrow svg { width: 15px; height: 15px; }
</style>
