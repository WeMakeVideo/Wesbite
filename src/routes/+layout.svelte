<script>
  import { onMount } from 'svelte';
  import '../app.css';

  let cursorX = 0, cursorY = 0;
  let cursorScale = 1;
  let cursorBlend = 'multiply';
  let cursorColor = '#0A0A0A';
  let cursorVisible = false;
  let cursorText = '';

  // Only enable custom cursor on pointer/mouse devices
  const isPointerDevice = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  onMount(() => {
    if (!isPointerDevice()) return;

    const move = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      cursorVisible = true;
    };
    window.addEventListener('mousemove', move);

    // Magnetic + grow on interactive elements
    const interactives = document.querySelectorAll('a, button, .magnetic');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorScale = 3.5;
        cursorBlend = 'normal';
        cursorColor = '#F5A800';
        cursorText = el.dataset.cursor || '';
      });
      el.addEventListener('mouseleave', () => {
        cursorScale = 1;
        cursorBlend = 'multiply';
        cursorColor = '#0A0A0A';
        cursorText = '';
      });
    });

    return () => window.removeEventListener('mousemove', move);
  });
</script>

<div
  class="cursor"
  style="
    left:{cursorX}px;
    top:{cursorY}px;
    transform:translate(-50%,-50%) scale({cursorScale});
    mix-blend-mode:{cursorBlend};
    background:{cursorColor};
    opacity:{cursorVisible ? 1 : 0};
  "
>
  {#if cursorText}<span class="cursor-label">{cursorText}</span>{/if}
</div>

<slot />

<style>
  @media (hover: hover) and (pointer: fine) {
    :global(*) { cursor: none !important; }
  }

  .cursor {
    position: fixed;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
                background 0.3s ease,
                mix-blend-mode 0.3s ease,
                opacity 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cursor-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #0A0A0A;
    white-space: nowrap;
    opacity: 0;
    animation: labelIn 0.2s forwards 0.15s;
  }

  @keyframes labelIn {
    to { opacity: 1; }
  }
</style>
