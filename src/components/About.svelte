<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  import aboutPic from "../assets/block-print.jpg"
  import { theme, language, openModal } from "../store";
  import Icon from '@iconify/svelte'

  let about = {
    "en": "Hi, I'm [Your Name]. I'm a passionate developer with a keen interest in creating innovative solutions. With a background in [Your Background], I bring a unique perspective to every project I undertake.",
    "jp": "こんにちは、[あなたの名前]です。革新的なソリューションを生み出すことに情熱を持つ開発者です。[あなたの背景]の経験を活かし、取り組むプロジェクトごとにユニークな視点をもたらします。"
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
          <Icon icon="mdi:book-open-page-variant" width="24" height="24"/>
          <p class="text-sm sm:text-base">Continuous Learning</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:account-group" width="24" height="24"/>
          <p class="text-sm sm:text-base">Collaboration</p>
        </div>
        <div class="flex items-center gap-2">
          <Icon icon="mdi:lightbulb-on" width="24" height="24"/>
          <p class="text-sm sm:text-base">Innovation</p>
        </div>
      </div>
    </div>
  </div>
</SectionWrapper>