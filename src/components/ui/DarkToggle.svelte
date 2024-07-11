<script>
  import { MoonStar, Sun } from "lucide-svelte";
  import { theme } from "../../store";
  import { fade, scale } from 'svelte/transition';
  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  function toggleTheme() {
    theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }

  const duration = 500;
  const rotationTween = tweened(0, { duration, easing: cubicInOut });

  $: {rotationTween.set($theme === 'dark' ? 90 : 0);}
</script>

<button on:click={toggleTheme}>
  {#if $theme === "dark"}
    <div
      in:fade={{ duration }}
      out:scale={{ duration }}
      style="transform: rotate({$rotationTween}deg);"
    >
      <MoonStar size={22} class="text-orange-300" />
    </div>
  {:else}
    <div
      in:fade={{ duration }}
      out:scale={{ duration }}
      style="transform: rotate({$rotationTween}deg);"
    >
      <Sun size={22} class="text-yellow-500" />
    </div>
  {/if}
</button>

<style>
  button {
    position: relative;
    width: 22px;
    height: 22px;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
  }
</style>