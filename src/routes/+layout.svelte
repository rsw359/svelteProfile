<script>
  import "../app.css";
  import { openModal } from "../store";
  import { theme } from "../store";
  import DarkToggle from "../components/ui/DarkToggle.svelte";

  let y

  $: outerHeight = 0 

  function reroute(href) {
    $openModal = false;
    location.href = href;
  } 
</script>

{#if $openModal}
  <div class="fixed top-0 left-0 z-50 flex flex-col w-screen h-screen gap-8 p-5 px-8 {($theme === 'dark') ? 'text-white' : 'text-base'} {($theme === 'dark') ? 'bg-slate-600': 'bg-white'} border-b md:hidden">
 
     <div class="flex items-center justify-between gap-4 pb-2 border-b ">
      <h1 class="font-semibold">Roger Wells<span class="{($theme === 'dark')?'text-black':'text-red-600'} italic">_Developer</span></h1>
      <DarkToggle/>
      <button class="border-none outline-none" on:click={()=> $openModal = false}>
        <i class="text-2xl fa-solid fa-xmark "></i>
      </button>
     </div>
     <div class="flex flex-col flex-1 gap-4">
      <button on:click={()=>reroute("#skills")} class="p-2 text-left duration-200 border-none outline-none cursor-pointer group">
        <p class="duration-200 group-hover:pl-2">skills</p>
      </button>
    
     
      <button on:click={()=>reroute("#projects")} class="p-2 text-left duration-200 border-none outline-none cursor-pointer group">
        <p class="duration-200 group-hover:pl-2">projects</p >
      </button>
    
     
      <button on:click={()=>reroute("#about")} class="p-2 text-left duration-200 border-none outline-none cursor-pointer group">
        <p class="duration-200 group-hover:pl-2">about</p>
      </button>
    </div>
    
    
  </div>
{/if}

<slot />

<!-- 
header 
footer
hero
skills
projects
about (separate page) -->
