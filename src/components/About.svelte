<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  import aboutPic from "../assets/block-print.jpg"
  import { theme, language, openModal } from "../store";
  import Icon from '@iconify/svelte'

  let about = {
    "en": "I've been living in Japan for 12 years. During this time, I've worked as an English teacher, a photographer, and most recently, a software developer. I used the COVID-19 pandemic as an opportunity to study software engineering at Code Fellows in Seattle, WA. Since then, I've been honing my skills and working on various projects. When I'm not coding, I enjoy road cycling and indulging in my coffee habit as a home roaster.",
    "jp": "私は日本に住んで12年になります。この期間中、英語教師、写真家、そして最近ではソフトウェア開発者として働いてきました。COVID-19パンデミックの期間中、シアトルのCode Fellowsでソフトウェアエンジニアリングを学びました。それ以来、スキルを磨きながら様々なプロジェクトに取り組んでいます。ソフトウェアの仕事をしていないときは、ロードバイクを楽しんだり、自家焙煎のコーヒーで趣味を満喫しています。"
  }
  let title = {
    "en": "About Me",
    "jp": "自己紹介"
  }

  let interests = {
    "en": "My interests include:",
    "jp": "私の興味分野："
  }
</script>

<SectionWrapper id="about">
  <div class="p-4 mt-9">
    <div class="flex flex-col items-center justify-center text-center">
      <img src={aboutPic} alt="" class="w-32 h-32 rounded-full border-2 z-20 {($theme === 'dark') ? 'border-white' : 'border-gray-600'}" />
      <h1 class="text-3xl font-bold z-20 text-gray-800 mt-4">{$language === 'en' ? title.en : title.jp}</h1>
      <p class="sm:w-3/4 mt-4">
        {$language === 'en' ? about.en : about.jp}
      </p>
    </div>
  </div>
  
  <div class="flex flex-col w-full sm:p-4 items-center mb-5">
    <p class="mt-4 text-base leading-relaxed sm:text-lg sm:leading-loose mb-2">{$language === 'en' ? interests.en : interests.jp}</p>
    <div class="border-b justify-center border-gray-200 w-full sm:w-3/4"></div>
    <div class="flex flex-col sm:flex-row sm:justify-between gap-4 mt-4 w-full sm:w-3/4">
      <!-- Web Development -->
      <div class="flex flex-col gap-4 mt-4">
        <p class="mb-1 leading-relaxed text-lg sm:text-xl font-semibold">Web Development</p>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:web" width="24" height="24"/>
          <p class="text-sm sm:text-base">Front-end</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:server" width="24" height="24"/>
          <p class="text-sm sm:text-base">Back-end</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:responsive" width="24" height="24"/>
          <p class="text-sm sm:text-base">Responsive Design</p>
        </div>
      </div>
      <!-- Data Science -->
      <div class="flex flex-col gap-4 mt-4">
        <p class="mb-1 leading-relaxed text-lg sm:text-xl font-semibold">Data Science</p>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:chart-bar" width="24" height="24"/>
          <p class="text-sm sm:text-base">Data Analysis</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:brain" width="24" height="24"/>
          <p class="text-sm sm:text-base">Machine Learning</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:chart-line" width="24" height="24"/>
          <p class="text-sm sm:text-base">Data Visualization</p>
        </div>
      </div>
      <!-- Other Interests -->
      <div class="flex flex-col gap-4 mt-4">
        <p class="mb-1 leading-relaxed text-lg sm:text-xl font-semibold">Other Interests</p>
        <div class="flex items-center gap-2">
          <Icon icon="ph:bicycle-bold" width="24" height="24"/>
          <p class="text-sm sm:text-base">Cycling</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="ph:coffee-bean-bold" width="24" height="24"/>
          <p class="text-sm sm:text-base">Coffee Perfection</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="ph:camera-bold" width="24" height="24"/>
          <p class="text-sm sm:text-base">Photography</p>
        </div>
      </div>
    </div>
  </div>
</SectionWrapper>