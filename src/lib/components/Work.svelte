<script>
  import { onMount } from 'svelte';

  let section;

  const projects = [
    { title: 'Project Aurora', cat: 'Brand Film · Filming', span: 7, gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)', glow: 'rgba(245,168,0,0.15)' },
    { title: 'Vertex Series', cat: '3D Work · Visualisation', span: 5, gradient: 'linear-gradient(135deg,#2d1b00,#1a0d00)', glow: 'rgba(245,168,0,0.2)' },
    { title: 'Title: Sequence', cat: 'Motion Graphics', span: 4, gradient: 'linear-gradient(135deg,#0d1117,#1c2526)', glow: 'rgba(100,200,255,0.1)' },
    { title: 'Midnight Campaign', cat: 'Filming · Commercial', span: 5, gradient: 'linear-gradient(135deg,#1a0020,#0d0015)', glow: 'rgba(200,100,255,0.12)' },
    { title: 'Form Study', cat: '3D · Animation', span: 3, gradient: 'linear-gradient(135deg,#001a0d,#000f08)', glow: 'rgba(0,255,150,0.08)' },
  ];

  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(section.querySelector('.work-header'), {
      opacity: 0, y: 40, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: section, start: 'top 80%' }
    });

    const cards = section.querySelectorAll('.work-card');
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0, y: 50, duration: 1, ease: 'expo.out',
        delay: i * 0.08,
        scrollTrigger: { trigger: section, start: 'top 70%' }
      });
    });
  });
</script>

<section id="work" bind:this={section}>
  <div class="work-header">
    <div>
      <p class="section-label">Selected projects</p>
      <h2 class="work-title">The <em>work</em><br>speaks.</h2>
    </div>
    <a href="/projects" class="view-all">View all projects →</a>
  </div>

  <div class="work-grid">
    {#each projects as p, i}
      <div class="work-card" style="grid-column: span {p.span}">
        <div class="card-inner" style="background:{p.gradient}">
          <div class="card-glow" style="background:radial-gradient(circle at 60% 50%, {p.glow} 0%, transparent 65%)"></div>
          <div class="card-info">
            <p class="card-cat">{p.cat}</p>
            <h3 class="card-title">{p.title}</h3>
          </div>
          <div class="card-hover-line"></div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    background: var(--black);
    padding: 120px 48px 140px;
  }

  @media (max-width: 768px) {
    section { padding: 64px 20px 80px; }
    .work-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 32px;
    }
    .work-grid { grid-template-columns: 1fr; gap: 10px; }
    /* Override inline grid-column spans so all cards go full width */
    :global(.work-card) { grid-column: span 1 !important; }
    .card-inner { aspect-ratio: 16/9 !important; }
    /* Keep card info always visible on mobile (no hover) */
    .card-info { transform: translateY(0); }
    .card-cat { opacity: 1; transform: translateY(0); }
  }

  .section-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-bottom: 16px;
  }

  .work-header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 48px;
  }

  .work-title {
    font-family: var(--font-display);
    font-weight: 900;
    font-style: normal;
    font-size: clamp(44px, 6vw, 88px);
    color: var(--white);
    line-height: 0.92;
  }
  .work-title em {
    font-style: italic;
    color: var(--yellow);
  }

  .view-all {
    font-size: 12px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.4);
    text-decoration: none;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.15);
    padding-bottom: 4px;
    transition: color 0.3s, border-color 0.3s;
    white-space: nowrap;
  }
  .view-all:hover { color: var(--yellow); border-color: var(--yellow); }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 14px;
  }

  .work-card { overflow: hidden; }

  .card-inner {
    position: relative;
    aspect-ratio: 16/10;
    overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .work-card:nth-child(1) .card-inner,
  .work-card:nth-child(2) .card-inner { aspect-ratio: 16/9; }
  .work-card:hover .card-inner { transform: scale(1.02); }

  .card-glow {
    position: absolute;
    inset: 0;
    transition: opacity 0.5s;
    opacity: 0.6;
  }
  .work-card:hover .card-glow { opacity: 1; }

  .card-info {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 28px 24px 24px;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
    transform: translateY(6px);
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
  }
  .work-card:hover .card-info { transform: translateY(0); }

  .card-cat {
    font-size: 10px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--yellow);
    margin-bottom: 6px;
    font-weight: 500;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.35s 0.05s, transform 0.35s 0.05s;
  }
  .work-card:hover .card-cat { opacity: 1; transform: translateY(0); }

  .card-title {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(16px, 1.8vw, 24px);
    color: var(--white);
  }

  .card-hover-line {
    position: absolute;
    bottom: 0; left: 0;
    height: 2px;
    width: 0;
    background: var(--yellow);
    transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
  }
  .work-card:hover .card-hover-line { width: 100%; }
</style>
