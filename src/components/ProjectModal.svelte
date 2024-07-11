<script>
  import modalpic1 from '../assets/romance.png'
  import modalpic2 from '../assets/iro.png'
  import modalpic3 from '../assets/coffee1.png'

  let modalData = {
  "modal-1": {
    "title": {
      "en": "The Romance Cycling Blog",
      "jp": "ロマンス・サイクリング・ブログ"
    },
    "content": {
      "en": "I am an avid cyclist, so I created this social media site for my friends and I to share our rides and experiences. It's a great way for users to stay connected and inspired each other. The site allows users to create posts and add pictures, as well as manage their group of friends. It's written in React with MongoDB on the backend. Images are uploaded to Cloudinary for storage.",
      "jp": "私は熱心なサイクリストなので、友人たちと一緒にライドや経験を共有するためのソーシャルメディアサイトを作りました。ユーザーが繋がり、互いに刺激し合うための素晴らしい方法です。このサイトでは、ユーザーが投稿を作成し、写真を追加したり、友人グループを管理したりすることができます。フロントエンドはReactで書かれており、バックエンドにはMongoDBを使用しています。画像はCloudinaryにアップロードして保存しています。"
    },
    "link": "https://rider-social.vercel.app/",
    "image": "modalpic1"
  },
  "modal-2": {
    "title": {
      "en": "Iro Iro",
      "jp": "イロイロ"
    },
    "content": {
      "en": "This project allows users to upload an image, and have it colorized by AI. It utilizes OpenCV's image model for colorization, React, FastApi, and AWS S3 for image storage. This project is not currently online because of the cost associated with AWS S3 and backend hosting services. But, if you'd like to try it out, check out the github repo!",
      "jp": "このプロジェクトでは、ユーザーが画像をアップロードし、AIによってカラー化することができます。カラー化にはOpenCVの画像モデルを使用し、フロントエンドにReact、バックエンドにFastApi、画像保存にAWS S3を使用しています。現在、AWS S3とバックエンドホスティングサービスに関連するコストのため、オンラインでは公開していません。しかし、試してみたい場合は、GitHubリポジトリをチェックしてください！"
    },
    "link": "https://github.com/rsw359/Iro-Iro",
    "image": "modalpic2"
  },
  "modal-3": {
    "title": {
      "en": "Data Projects",
      "jp": "データプロジェクト"
    },
    "content": {
      "en": "I like to analyze data and create visualizations. I have a few projects that you can check out. One is a project that uses a worldwide coffee ratings dataset to analyze the highest rated coffees in the world. Another is a project that analyzes the relationship between the cost and performance of Nvidia GPUs. There is also one that analyzes player's approach to a boss in the game Elden Ring. All are written in Python with Pandas, Matplotlib, and Jupyter Notebooks.",
      "jp": "データの分析と可視化が好きです。いくつかのプロジェクトを紹介します。一つは、世界中のコーヒー評価データセットを使用して、世界で最も高く評価されているコーヒーを分析するプロジェクトです。もう一つは、NvidiaのGPUのコストとパフォーマンスの関係を分析するプロジェクトです。また、ゲーム「Elden Ring」のボスに対するプレイヤーのアプローチを分析するものもあります。すべてPythonで書かれており、Pandas、Matplotlib、Jupyter Notebookを使用しています。"
    },
    "links": {
      "link1": "https://www.kaggle.com/code/rogerwells/linear-regressions-on-gpu-data",
      "link2": "https://www.kaggle.com/code/rogerwells/coffee-ratings-eda",
      "link3": "https://www.kaggle.com/code/rogerwells/elden-ring-player-approach-to-bosses"
    },
    "image": "modalpic3"
  }
}
</script>