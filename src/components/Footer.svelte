<script>
  import { language } from "../store";
  import Icon from '@iconify/svelte';

  const currentYear = new Date().getFullYear();

  let contact = {
    en: "Contact",
    jp: "お問い合わせ"
  };

  let copyright = {
    en: `© ${currentYear} Roger Wells. All rights reserved.`,
    jp: `© ${currentYear} [ウエルスロジャー]。全著作権所有。`
  };
</script>

<footer class="bg-gray-100 dark:bg-gray-800 py-8">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-4 md:mb-0">
        <h3 class="text-lg font-semibold mb-2">{$language === 'en' ? contact.en : contact.jp}</h3>
        <a href="mailto:devrogerjp@gmail.com" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-2">
          <Icon icon="mdi:email" class="mr-2" />
          devrogerjp@gmail.com
        </a>
        
      </div>
      <div class="flex space-x-4">
        <a href="https://https://github.com/rsw359" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon icon="mdi:github" width="24" height="24" />
        </a>
        <a href="https://www.linkedin.com/in/roger-s-wells/" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          <Icon icon="mdi:linkedin" width="24" height="24" />
        </a>
        
      </div>
    </div>
    <div class="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
      {$language === 'en' ? copyright.en : copyright.jp}
    </div>
  </div>
</footer>