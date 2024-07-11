<script>
  import { openModal } from "../store";
  import { MoonStar, Sun } from "lucide-svelte"
  import DarkToggle from "./ui/DarkToggle.svelte";
  import Language from "./ui/Language.svelte";
  import {theme, language} from "../store"
  
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
 
 <header class="relative z-20 flex flex-col">
    <div class="max-v-[1400] mx-auto w-full flex items-center  justify-between p-4 py-6">
       <a href="/">
        <h1 class="font-semibold">Roger Wells <span class="{($theme === 'dark')?'text-black':'text-red-600'} italic">_Developer</span></h1>
       </a>
       <button class="grid md:hidden place-items-center" on:click={() => ($openModal = true)}>
         <i class="fa-solid fa-bars"></i>
       </button>
       <nav class="items-center hidden gap-4 md:flex lg:gap-6">
         <a class="duration-200 cursor-pointer hover:text-red-500" href="#skills">
          {#if $language==='en'}{links[0].skills.en}{:else}{links[0].skills.jp}{/if}</a>
         <a class="duration-200 cursor-pointer hover:text-red-500" href="#projects">
          {($language==='en')?links[1].projects.en:links[1].projects.jp}</a>
         <a class="duration-200 cursor-pointer hover:text-red-500" href="#about">
          {($language==='en')?links[2].about.en:links[2].about.jp}</a>
         <DarkToggle/>
         <Language/>

       </nav>
    </div> 

 </header> 