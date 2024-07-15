<script>
  import { language, theme } from '../store'
  import ProjectModal from './ProjectModal.svelte'
  import project1pic from '../assets/romance.png'
  import project2pic from '../assets/iro.png'
  import project3pic from '../assets/coffee1.png'
  import skillsPic from '../assets/tambo.jpeg'
  import Icon from '@iconify/svelte'
	import SectionWrapper from './SectionWrapper.svelte';

   let projectsData = {
  "project-1": {
    "title": {
      "en": "Romance Cycling",
      "jp": "ロマンス・サイクリング・ブログ"
    },
    "content": {
      "en": "I am an avid cyclist, so I created this social media site for my friends and I to share our rides and experiences. It's a great way for users to stay connected and inspired each other. The site allows users to create posts and add pictures, as well as manage their group of friends. It's written in React with MongoDB on the backend. Images are uploaded to Cloudinary for storage.",
      "jp": "私は熱心なサイクリストなので、友人たちと一緒にライドや経験を共有するためのソーシャルメディアサイトを作りました。ユーザーが繋がり、互いに刺激し合うための素晴らしい方法です。このサイトでは、ユーザーが投稿を作成し、写真を追加したり、友人グループを管理したりすることができます。フロントエンドはReactで書かれており、バックエンドにはMongoDBを使用しています。画像はCloudinaryにアップロードして保存しています。"
    },
    "link": "https://rider-social.vercel.app/",
    "image": project1pic
  },
  "project-2": {
    "title": {
      "en": "Iro Iro",
      "jp": "色色"
    },
    "content": {
      "en": "This project allows users to upload an image, and have it colorized by AI. It utilizes OpenCV's image model for colorization, React, FastApi, and AWS S3 for image storage. This project is not currently online because of the cost associated with AWS S3 and backend hosting services. But, if you'd like to try it out, check out the github repo!",
      "jp": "このプロジェクトでは、ユーザーが画像をアップロードし、AIによってカラー化することができます。カラー化にはOpenCVの画像モデルを使用し、フロントエンドにReact、バックエンドにFastApi、画像保存にAWS S3を使用しています。現在、AWS S3とバックエンドホスティングサービスに関連するコストのため、オンラインでは公開していません。しかし、試してみたい場合は、GitHubリポジトリをチェックしてください!"
    },
    "link": "https://github.com/rsw359/Iro-Iro",
    "image": project2pic
  },
  "project-3": {
    "title": {
      "en": "Data Projects",
      "jp": "データプロジェクト"
    },
    "content": {
      "en": "I like to analyze data and create visualizations. I have a few projects that you can check out. One is a project that uses a worldwide coffee ratings dataset to analyze the highest rated coffees in the world. Another is a project that analyzes the relationship between the cost and performance of Nvidia GPUs. There is also one that analyzes player's approach to a boss in the game Elden Ring. All are written in Python with Pandas, Matplotlib, and Jupyter Notebooks.",
      "jp": "データの分析と可視化が好きです。いくつかのプロジェクトを紹介します。一つは、世界中のコーヒー評価データセットを使用して、世界で最も高く評価されているコーヒーを分析するプロジェクトです。もう一つは、NvidiaのGPUのコストとパフォーマンスの関係を分析するプロジェクトです。また、ゲーム「Elden Ring」のボスに対するプレイヤーのアプローチを分析するものもあります。すべてPythonで書かれており、Pandas、Matplotlib、Jupyter Notebookを使用しています。"
    },
    "links": {
      "GPU notebook": "https://www.kaggle.com/code/rogerwells/linear-regressions-on-gpu-data",
      "Coffee notebook": "https://www.kaggle.com/code/rogerwells/coffee-ratings-eda",
      "Elden Ring notebook": "https://www.kaggle.com/code/rogerwells/elden-ring-player-approach-to-bosses"
    },
    "image": project3pic
  }
}
let title = {
  "en": "Projects",
  "jp": "私のプロジェクト"
}

let projectsText = {
  "en": " I have worked on many different types of project, from blogs and social media sites to data projects using Python. Here are a 3 of my favorites. Click the image to learn more.",
  "jp": "ブログやソーシャルメディアサイトからPythonを使用したデータプロジェクトまで、様々なプロジェクトに取り組んできました。ここではお気に入りの三つをご紹介します。"
}

let activeModal = null;


function openModal(projectId){
  activeModal=projectId
}

function closeModal(){
  activeModal=null
}
</script>

<SectionWrapper id="projects">


  <div class='flex flex-col items-center p-8 mt-9'>
    <!--content-->
    <div class="flex flex-col items-center text-center w-full mb-8">
      <img src={skillsPic} alt="" class="w-32 h-32 rounded-full border-2 z-20 {($theme==='dark')?'border-white': 'border-gray-600'}" />
      <h1 class="text-3xl font-bold z-20 text-gray-800 mt-4">{$language==='en'?title.en : title.jp}</h1>
      <p class="sm:w-3/4 mt-4">{$language==='en'?projectsText.en : projectsText.jp}</p>
    </div>
    
    <!--gallery-->
    <div class=" flex flex-row sm:justify-between gap-4 mt-4 sm:w-3/4">
      {#each Object.entries(projectsData) as [id, project]}
      <div class="cursor-pointer transform hover:scale-105  transition-transform duration-300 ">
        <button class="image-button" on:click={()=> openModal(id)}>
          <img 
              src={project.image} 
              alt={project.title[$language]} 
              class="w-full h-24 sm:h-40 rounded-md border {($theme==='dark')? 'border-gray-800': 'border-gray-600'}"
              />
          </button>
        </div>
        {/each}
              
      </div>
    </div>

    <!--modal-->
    {#if activeModal}
    <ProjectModal
      modalData={projectsData[activeModal]} 
      language={$language} 
      on:close={closeModal}
    />
  {/if}
</SectionWrapper>





