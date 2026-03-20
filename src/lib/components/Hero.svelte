<script>
  import { onMount } from 'svelte';

  let heroEl, canvasEl, videoEl, videoWrap;
  let titleLines = ['We don\'t', 'just film.'];

  onMount(async () => {
    const { gsap } = await import('gsap');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    // — WebGL particle canvas —
    initParticles(canvasEl);

    // — Character split animation —
    const chars = heroEl.querySelectorAll('.char');
    gsap.set(chars, { y: 80, opacity: 0, rotateX: -40 });
    gsap.to(chars, {
      y: 0, opacity: 1, rotateX: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.04,
      delay: 0.3
    });

    // Label + bottom content
    gsap.from('.hero-label', { opacity: 0, y: 20, duration: 0.8, delay: 0.2 });
    gsap.from('.hero-bottom', { opacity: 0, y: 24, duration: 0.8, delay: 1.2 });
    gsap.from('.scroll-hint', { opacity: 0, duration: 1, delay: 2 });

    // — Scroll-pinned video shrink —
    gsap.to(videoWrap, {
      scale: 0.38,
      borderRadius: '12px',
      x: () => window.innerWidth / 2 - (window.innerWidth * 0.38) / 2 - 48,
      y: () => -window.innerHeight * 0.25,
      opacity: 0.7,
      ease: 'none',
      scrollTrigger: {
        trigger: heroEl,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: false
      }
    });

    // Ticker reveal
    gsap.from('.ticker', { opacity: 0, duration: 0.6, delay: 1.6 });
  });

  function initParticles(canvas) {
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    window.addEventListener('resize', () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    const count = 80;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1
    }));

    let mouse = { x: w / 2, y: h / 2 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245,168,0,${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        // Gentle mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.vx += (dx / dist) * 0.08;
          p.vy += (dy / dist) * 0.08;
        }

        // Dampen
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,168,0,${p.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }
    draw();
  }

  function splitChars(text) {
    return text.split('').map((c, i) =>
      c === ' ' ? `<span class="char space"> </span>` : `<span class="char">${c}</span>`
    ).join('');
  }
</script>

<section id="hero" bind:this={heroEl}>
  <canvas bind:this={canvasEl} class="particle-canvas"></canvas>

  <div class="video-wrap" bind:this={videoWrap}>
    <video bind:this={videoEl} autoplay muted loop playsinline>
      <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4">
    </video>
    <div class="video-overlay"></div>
  </div>

  <div class="hero-content">
    <p class="hero-label">Production Company — UK</p>
    <h1 class="hero-title" style="perspective: 800px">
      {#each titleLines as line, i}
        <span class="title-line" class:yellow={i === 1}>
          {@html splitChars(line)}
        </span>
      {/each}
    </h1>
    <div class="hero-bottom">
      <p class="hero-tagline">A creative production studio specialising in<br>Filming, 3D Work &amp; Motion Graphics.</p>
      <a href="#work" class="hero-cta magnetic" data-cursor="VIEW">See our work</a>
    </div>
  </div>

  <div class="scroll-hint">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>
</section>

<style>
  #hero {
    position: relative;
    height: 100vh;
    background: var(--black);
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 0 48px 64px;
  }

  @media (max-width: 768px) {
    #hero { padding: 0 20px 48px; }
  }

  .particle-canvas {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  .video-wrap {
    position: absolute;
    inset: 0;
    z-index: 0;
    transform-origin: center center;
    will-change: transform;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
  }

  .video-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.1) 70%);
  }

  .hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  .hero-label {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--yellow);
    margin-bottom: 20px;
  }

  .hero-title {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(68px, 10.5vw, 160px);
    line-height: 0.88;
    color: var(--white);
    text-shadow: 5px 5px 0 rgba(0,0,0,0.4);
    overflow: hidden;
  }

  :global(.title-line) {
    display: block;
    overflow: hidden;
  }
  :global(.title-line.yellow) { color: var(--yellow); }
  :global(.char) {
    display: inline-block;
    will-change: transform, opacity;
  }
  :global(.char.space) { display: inline-block; width: 0.3em; }

  .hero-bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 44px;
  }

  @media (max-width: 768px) {
    .hero-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 28px;
      margin-top: 28px;
    }
    .scroll-hint { display: none; }
  }

  .hero-tagline {
    color: rgba(255,255,255,0.55);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
  }

  .hero-cta {
    display: inline-block;
    background: var(--yellow);
    color: var(--black);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 20px 40px;
    box-shadow: 4px 4px 0 rgba(245,168,0,0.25);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .hero-cta:hover {
    transform: translate(-2px,-2px);
    box-shadow: 6px 6px 0 rgba(245,168,0,0.4);
  }

  .scroll-hint {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    z-index: 3;
  }
  .scroll-hint span {
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
  }
  .scroll-line {
    width: 1px;
    height: 52px;
    background: linear-gradient(to bottom, rgba(245,168,0,0.6), transparent);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%,100% { opacity:0.4; transform:scaleY(1); }
    50% { opacity:1; transform:scaleY(1.08); }
  }
</style>
