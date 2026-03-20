<script>
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Ticker from '$lib/components/Ticker.svelte';
  import Disciplines from '$lib/components/Disciplines.svelte';
  import Work from '$lib/components/Work.svelte';
  import About from '$lib/components/About.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>wemake.video — Filming. 3D. Motion.</title>
  <meta name="description" content="A creative production studio specialising in Filming, 3D Work and Motion Graphics.">
</svelte:head>

<Nav />
<Hero />
<Ticker />
<Disciplines />
<Work />
<About />
<Contact />
<Footer />
