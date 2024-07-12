<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  import skillsPic from "../assets/smile.jpeg"
  import { theme, language } from "../store";
  import Icon from '@iconify/svelte'

  let skills = {
    "en":"I enjoy working with a variety of technologies. I thrive on finding and applying the right tools for each unique challenge. Being adaptable allows me to work efficiently across various technologies and frameworks.",
    "jp": "私はさまざまな技術を使って仕事をするのが好きです。各ユニークな課題に対して適切なツールを見つけて適用することに喜びを感じます。柔軟性を持つことで、さまざまな技術やフレームワークを効率的に活用することができます。"
  }
  let title ={
    "en":"Skills",
    "jp": "私のスキル"
  }

  let stack ={
    "en": "My current tech stack:",
    "jp": "私の現在の技術スタック"
  }
</script>

<SectionWrapper id="skills">

  <div class="p-4">
    <div class="flex flex-col items-center justify-center text-center">
      <img src={skillsPic} alt="" class="w-32 h-32 rounded-full border-2 z-50 {($theme==='dark')?'border-white': 'border-gray-600'}" />
      <h1 class="text-3xl font-bold z-50 text-gray-800 mt-4">{$language==='en'?title.en : title.jp}</h1>
      <p class="sm:w-3/4 mt-4">
        {$language ==='en' ? skills.en : skills.jp}
      </p>
    </div>
  </div>
  
  
  <div class="flex flex-col w-full sm:p-4 items-center">
    <p class="mt-4 text-base leading-relaxed sm:text-lg sm:leading-loose mb-2">{$language==='en'?stack.en : stack.jp}</p>
    <div class="border-b justify-center border-gray-200 w-3/4"></div>
    <div class=" flex flex-row sm:justify-between gap-4 mt-4 sm:w-3/4">
      <!-- Frontend -->
      <div class="flex flex-col sm:flex gap-4 mt-4 ">
        <p class="mb-1 leading-relaxed sm:text-lg sm:leading-loose">Frontend</p>
        <div class="flex items-center gap-2">
          <Icon icon="logos:javascript" width="30" height="30"/>
          <p>JavaScript</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:svelte" width="30" height="30"/>
          <p>Svelte</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:react" width="30" height="30"/>
          <p>React</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:nextjs" width="30" height="30"/>
          <p>Nextjs</p>
        </div>
      </div>
      <!-- Backend -->
      <div class="flex flex-col sm:flex gap-4 mt-4">
        <p class="mb-1 leading-relaxed sm:text-lg sm:leading-loose">Backend</p>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:nodejs" width="30" height="30"/>
          <p>Nodejs</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:python" width="30" height="30"/>
          <p>Python</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon-plain:django" width="30" height="30"/>
          <p>django</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:fastapi" width="30" height="30"/>
          <p>Fastapi</p>
        </div>
      </div>
      <!-- Data stuff -->
      <div class="flex flex-col sm:flex gap-4 mt-4">
        <p class="mb-1 leading-relaxed sm:text-lg sm:leading-loose">Data</p>
        <div class="flex items-center gap-2">
          <Icon icon="logos:numpy" width="30" height="30"/>
          <p>Numpy</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:pandas" width="30" height="30"/>
          <p>Pandas</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:postgresql" width="30" height="30"/>
          <p>PostgreSQL</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="devicon:mongodb" width="30" height="30"/>
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  </div>


      

    


</SectionWrapper>