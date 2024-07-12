<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  import Header from "./Header.svelte"
  import profilepic from "../assets/redcap.jpeg"
  import {theme, language} from "../store"

  let greeting = {
    "en": " I'm a software engineer and designer based in Japan. I love building things for the web and I'm always looking for new challenges.",
    "jp": "私は日本に住んでいるソフトウェアエンジニア兼デザイナーです。ウェブのために物を作ることが大好きで、常に新しい挑戦を求めています。",
  }
  
	

</script>

<SectionWrapper id="hero">
  <Header/>
  <section class=" grid grid-col justify-center items-center sm:flex gap-6 mt-20">
    <div class="flex justify-center">
      <img src={profilepic} alt="Roger's Profile" class="rounded-full max-w-sm w-52 sm:w-72 md:w-96 border-2
      {($theme==='dark')?'border-white': 'border-gray-600'}"/>

    </div>
    
    <div class="w-full sm:max-w-sm space-y-3 flex flex-col items-center justify-between sm:items-start sm:justify-normal">
      <h1 class="text-3xl tracking-normal sm:text-4xl">
        Hi, I&apos;m <span class="italic text-red-600">Roger</span
        >
      </h1>
      <p class="text-center text-base sm:text-start">
       {#if $language === 'en'}{greeting.en}{:else}{greeting.jp}{/if}
      </p>
    </div>

  </section>
</SectionWrapper>