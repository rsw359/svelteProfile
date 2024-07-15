<script>
  import "../app.css";
  import { openModal } from "../store";
  import { theme, language } from "../store";
  import DarkToggle from "../components/ui/DarkToggle.svelte";
  import Language from "../components/ui/Language.svelte";
  import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

  let y

  $: outerHeight = 0

  function reroute(href) {
    $openModal = false;
    
    location.href = href;
  } 

  let links = [
  {
    "skills": {
      "en": "skills",
      "jp": "スキル"
    }
  },
  {
    "projects": {
      "en": "projects",
      "jp": "プロジェクト"
    }
  },
  {
    "about": {
      "en": "about",
      "jp": "自己紹介"
    }
  }
];
</script>

{#if $openModal}
  <div class="fixed top-0 left-0 z-50 flex flex-col w-screen h-screen gap-8 p-5 px-8 {($theme === 'dark') ? 'text-white' : 'text-black'} {($theme === 'dark') ? 'bg-slate-600': 'bg-white'} border-b md:hidden">
 
     <div class="flex items-center justify-between z-50 gap-4 pb-2 border-b ">
      <h1 class="font-semibold">Roger Wells<span class="{($theme === 'dark')?'text-black':'text-red-600'} italic">_Developer</span></h1>
      <DarkToggle/>
      <Language/>
      <button class="border-none outline-none" on:click={()=> $openModal = false}>
        <i class="text-2xl fa-solid fa-xmark "></i>
      </button>
     </div>
     <div class="flex flex-col flex-1 gap-4">
      <button on:click={()=>reroute("#skills")} class="p-2 text-left duration-200 border-none outline-none cursor-pointer group">
        <p class="duration-200 group-hover:pl-2">{#if $language==='en'}{links[0].skills.en}{:else}{links[0].skills.jp}{/if}</p>
      </button>
    
     
      <button on:click={()=>reroute("#projects")} class="p-2 text-left duration-200 border-none outline-none cursor-pointer group">
        <p class="duration-200 group-hover:pl-2">{($language==='en')?links[1].projects.en:links[1].projects.jp}</p >
      </button>
    
     
      <button on:click={()=>reroute("#about")} class="p-2 text-left duration-200 border-none outline-none cursor-pointer group">
        <p class="duration-200 group-hover:pl-2"> {($language==='en')?links[2].about.en:links[2].about.jp}</p>
      </button>
    </div>
    
    
  </div>
{/if}
{#if y > outerHeight }
  <div class="fixed top-0 left-0 z-20 flex flex-col w-full px-0 fade-in {($openModal==='true')? "hidden":""}{($theme === 'dark') ? 'text-white' : 'text-base'} {($theme === 'dark') ? 'bg-slate-600': 'bg-white'} ">
    <Header/>
  </div>
{/if}
<slot />
<Footer/>
<svelte:window bind:scrollY={y} bind:outerHeight/>

<!-- 
header 
footer
hero
skills
projects
about (separate page) -->
