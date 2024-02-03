import { type StaticImageData } from 'next/image';

import CoffeeShop from '~/public/images/projects/CoffeeShop.png';
import Discord from '~/public/images/projects/Discord.png';
import F2EMission1 from '~/public/images/projects/F2EMission1.png';
import Inkdrop from '~/public/images/projects/Inkdrop.png';
import LivePhotos from '~/public/images/projects/LivePhotos.png';
import MaskMap from '~/public/images/projects/MaskMap.png';
import RNMail from '~/public/images/projects/RNMail.jpg';
import TravelFun from '~/public/images/projects/TravelFun.png';
import Voomap from '~/public/images/projects/Voomap.png';
import YouBike from '~/public/images/projects/YouBike.png';

export type Link = {
  github: string;
  post: string;
  site: string;
};

export type Project = {
  date: string;
  description: string;
  image: {
    alt: string;
    src: StaticImageData | string;
  };
  links: Link;
  pin?: boolean;
  title: string;
};

export const allProject: Project[] = [
  {
    date: '2022-04-09',
    description:
      '剛開始學 Vue 時做的第一個作品，當時還用 Options API 寫的，有完整前後台功能的電商網站，時代久遠，已放棄維護。',
    image: {
      alt: '貓咖啡',
      src: CoffeeShop,
    },
    links: {
      github: '',
      post: '/projects/cat-coffee',
      site: 'https://cofcat456.github.io/coffeeShop/#/',
    },
    pin: true,
    title: '貓咖啡 Cat Coffee',
  },
  {
    date: '2022-09-06',
    description:
      '學習 Vue3 時的切版練習，使用六角學院提供的設計稿，覺得成品很好看所以放了上來。',
    image: {
      alt: 'LivePhotos',
      src: LivePhotos,
    },
    links: {
      github: '',
      post: '',
      site: 'https://cofcat456.github.io/live-photos/',
    },
    pin: true,
    title: 'LivePhotos 募款網站',
  },
  {
    date: '2023-03-09',
    description:
      '參加六角學院 2022 Vue 作品實戰班時的作品，一直都很喜歡 KKday 跟 Klook 的網站風格，所以挑選了這個主題，用 Vue3 跟 TypeScript 完成的作品，花了很多心血做。',
    image: {
      alt: 'Travel Fun',
      src: TravelFun,
    },
    links: {
      github: '',
      post: '/projects/travel-fun',
      site: 'https://travel-fun.vercel.app/#/',
    },
    pin: true,
    title: '旅遊趣 Travel Fun ',
  },
  {
    date: '2023-07-31',
    description:
      '第一個做的開源套件，在做旅遊趣的時候需要用到 Vue3 + Google Maps 的功能，但沒有看到有支援 TypeScript 的套件，就自己手做一個了。',
    image: {
      alt: 'Voomap',
      src: Voomap,
    },
    links: {
      github: '',
      post: '/projects/voomap',
      site: 'https://voomap.vercel.app/',
    },
    pin: true,
    title: 'Voomap',
  },
  {
    date: '2023-09-05',
    description:
      '模仿 Gmail 做的模板，看著 devaslife 的影片跟著做的，當兵前用一點零碎的時間做的 React Native App。',
    image: {
      alt: 'RNMail',
      src: RNMail,
    },
    links: {
      github: '',
      post: '/projects/react-native-gmail',
      site: '',
    },
    pin: false,
    title: 'RNMail',
  },
  {
    date: '2023-12-21',
    description:
      '2023 The F2E 的作品，退伍後怕生疏，就找今年 F2E 的設計稿練練手，順便學習了 GSAP 跟 Lenis 的使用。',
    image: {
      alt: '2023_F2E_Mission1',
      src: F2EMission1,
    },
    links: {
      github: '',
      post: '',
      site: 'https://2023-f2e-mission1.vercel.app/',
    },
    pin: false,
    title: '立委競選官網',
  },
  {
    date: '2023-12-21',
    description:
      '最近剛買了 Inkdrop 來取代 Obsidian，但用了一下子之後發現並沒有像 Obsidian 可以使用 UI 快速插入模板的功能，於是一言不合就做了一個插件出來😆。',
    image: {
      alt: 'Inkdrop',
      src: Inkdrop,
    },
    links: {
      github: 'https://github.com/CofCat456/inkdrop-fast-template',
      post: '',
      site: '',
    },
    pin: false,
    title: 'Fast Tempalte',
  },
  {
    date: '2023-3-12',
    description:
      '新冠肺炎爆發時熱門的作品主題，當然不免俗的跟風一下，用 Vue3 跟 Leaflet 和搭配著 Kuro 老師的 008 天絕對看不完的 Vue 這本書一起完成的。',
    image: {
      alt: 'MaskMap',
      src: MaskMap,
    },
    links: {
      github: '',
      post: '',
      site: 'https://mask-map.vercel.app/',
    },
    pin: false,
    title: '口罩地圖',
  },
  {
    date: '2023-6-17',
    description:
      '之前無聊給自己跟朋友的群組做的 Bot，連接 ChatGPT3.5-Turbo 跟字定義一些快捷指令，不過後來礙於 ChatGPT 改為付費後(窮)，就當作是娛樂項目了。',
    image: {
      alt: 'Discord',
      src: Discord,
    },
    links: {
      github: 'https://github.com/CofCat456/discord-bot',
      post: '',
      site: '',
    },
    pin: false,
    title: 'ChatGPT Discord Bot',
  },
  {
    date: '2023-12-27',
    description:
      '使用 Next 14 串接 Open API 做的 YouBike2.0 站點查詢系統，UI 使用了 Ant Design 5.0，整個過程都是用自己不熟悉的技術，做完還是學到蠻多的，未來會考慮慢慢完整其他功能。',
    image: {
      alt: 'YouBike',
      src: YouBike,
    },
    links: {
      github: '',
      post: '',
      site: 'https://youbike2-0.vercel.app/site',
    },
    pin: false,
    title: 'YouBike2.0',
  },
  {
    date: '2024-02-24',
    description:
      'Inkdrop 並沒有像 Obsidian 一樣支援 Daily Notes 的功能，我自己在工作時習慣每天寫 Daily Notes 來記錄當天的工作，所以花點時間做了一個插件來支援',
    image: {
      alt: 'Inkdrop',
      src: Inkdrop,
    },
    links: {
      github: 'https://github.com/CofCat456/inkdrop-daily-notes',
      post: '',
      site: '',
    },
    pin: false,
    title: 'Daily Notes',
  },
];
