<!-- Modal.svelte -->
<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { theme } from '../store';

  export let modalData;
  export let language;

  const dispatch = createEventDispatcher();
  let modalContent;

  function closeModal() {
    dispatch('close');
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  }

  onMount(() => {
    modalContent.focus();
    // Add event listener for keydown on mount
    window.addEventListener('keydown', handleKeydown);

    // Remove event listener on component destruction
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<div 
  class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" 
  transition:fade
>
  <div 
    class=" {($theme === 'dark') ? 'bg-slate-600' : 'bg-white'} 
    {($theme === 'dark') ? 'text-white' : 'text-base'} p-8 rounded-lg max-w-2xl relative"
    bind:this={modalContent}
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <button 
      class="absolute top-2 right-2 text-2xl bg-transparent border-none cursor-pointer  
      {($theme === 'dark') ? 'bg-slate-600' : 'bg-white'} 
      {($theme === 'dark') ? 'text-white' : 'text-base'}
 "
      on:click={closeModal}
      aria-label={language === 'en' ? 'Close modal' : 'モーダルを閉じる'}
    >
      &times;
    </button>
    <h2 class="text-xl font-bold mb-4">{modalData.title[language]}</h2>
    <img src={modalData.image} alt={modalData.title[language]} class="w-full  h-auto mb-4" />
    <p class="mb-4">{modalData.content[language]}</p>
    {#if modalData.link}
      <a 
        href={modalData.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        class="inline-block mt-4 px-4 py-2 {($theme === 'dark') ? 'bg-slate-400' : 'bg-slate-600'} 
{($theme === 'dark') ? 'text-base' : 'text-white'}"
      >
        {language === 'en' ? 'View Project' : 'プロジェクトを見る'}
      </a>
    {:else if modalData.links}
      <div class="mt-4 space-x-2 text-right gap-4">
        {#each Object.entries(modalData.links) as [key, url]}
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-block px-4 py-2 {($theme === 'dark') ? 'bg-slate-400' : 'bg-slate-600'} 
            {($theme === 'dark') ? 'text-base' : 'text-white'}"
          >
            {language === 'en' ? ` ${key}` : `${key}`}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</div>