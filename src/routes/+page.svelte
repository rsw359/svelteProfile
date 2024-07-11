<script>
  import Hero from "../components/Hero.svelte";
  import Skills from "../components/Skills.svelte";
  import { theme } from "../store";
</script>

<main class="flex flex-col {($theme === 'dark') ? 'bg-slate-600' : 'bg-white'} 
{($theme === 'dark') ? 'text-white' : 'text-base'}">
  <Hero/>
  <Skills/>
  
</main>