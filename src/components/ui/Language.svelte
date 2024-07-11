<script>
  import {language} from "../../store"

  function toggleLanguage(){
    language.update(currentLanguage => currentLanguage === 'en' ? "jp": 'en')
  }
</script>

<button on:click={toggleLanguage}>
  {#if $language === 'en'}
  <i class="fa-solid fa-language "></i>

  {:else}
  <i class="fa-solid fa-language text-red-700"></i>
  {/if}
</button>