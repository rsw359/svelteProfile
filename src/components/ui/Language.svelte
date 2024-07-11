<script>
  import { language } from "../../store";
  import Icon from '@iconify/svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from "svelte/easing";
	

  function toggleLanguage(){
    language.update(currentLanguage => currentLanguage === 'en' ? "jp": 'en')
  }

  const flip = tweened(0, {
    duration:300,
    easing: cubicOut,
  });

  $:{
    flip.set($language === 'en' ? 0 : 180);
  }
</script>

<button on:click={toggleLanguage}>
  <div style="transform: rotateY({$flip}deg); transition: color 0.3ms;">

    <Icon 
      icon='tabler:language-hiragana' 
      class='size-5 {$language === 'en'? 'text-red-500': 'text-blue-500'}'
      
    />
  </div>
</button>
    
<style>
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  
  div {
    display: inline-block;
    transition: transform 0.3s;
  }
</style>
    
  
  
  
 