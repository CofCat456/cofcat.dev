import { StaticImageData } from 'next/image';

import CoffeeShop from '../../public/images/projects/coffeeShop.jpg';
import ReactTodo from '../../public/images/projects/react_todoList.jpg';
import LivePhotos from '../../public/images/projects/LivePhotos.jpg';
import FacebookUI from '../../public/images/projects/facebook_UI.jpg';
import RealtimeWeather from '../../public/images/projects/realtime_weather.jpg';
import AlDente from '../../public/images/projects/AlDente.jpg';
import PriceComparison from '../../public/images/projects/price_comparison.jpg';
import JSDungeons from '../../public/images/projects/js_dungeons.jpg';
import HexScoolHomePage from '../../public/images/projects/hexScool_homePage.jpg';
import ChatTalkerAI from '../../public/images/projects/chatTalker_AI.jpg';
import JS2022CLASS from '../../public/images/projects/js-2022-autumn-class.jpg';

export type Project = {
  title: string;
  description: string;
  skills: string[];
  date: string;
  links: {
    post: string;
    github: string;
    site: string;
  };
  image: {
    src: string | StaticImageData;
    alt: string;
    placeholder: 'blur' | 'empty';
  };
};

export enum Category {
  Project = 'Project',
  Exerecise = 'Exerecise',
  Train = 'Train',
}

export const allProject: Record<Category, Project[]> = {
  Project: [
    {
      title: '貓咖啡 Cat Coffee',
      description: '咖啡電商網站，有前後台功能',
      skills: ['Vue 2', 'Vue Cli', 'Vue Router', 'Bootstrap5'],
      date: '2022-04-19',
      links: {
        post: '/projects/cat-coffee',
        github: '',
        site: 'https://cofcat456.github.io/coffeeShop/#/',
      },
      image: {
        src: CoffeeShop,
        alt: '貓咖啡',
        placeholder: 'blur',
      },
    },
    {
      title: 'React - TodoList',
      description: '使用 React 開發，串接 API 完成代辦事項功能',
      skills: ['React', 'React Hook', 'React Router'],
      date: '2022-08-21',
      links: {
        post: '/projects/react-api-todolist',
        github: '',
        site: 'https://cofcat456.github.io/react-todoList/',
      },
      image: {
        src: ReactTodo,
        alt: 'React Todolist',
        placeholder: 'blur',
      },
    },
    {
      title: 'LivePhotos 募款網站',
      description: '用 Vue3 和 TailWindCSS 開發',
      skills: ['Vue3', 'Vitawind', 'VeeValidate'],
      date: '2022-09-07',
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/live-photos/',
      },
      image: {
        src: LivePhotos,
        alt: 'LivePhotos',
        placeholder: 'blur',
      },
    },
  ],
  Exerecise: [
    {
      title: 'Faceboock UI',
      description: 'TailwindCSS 實作 Facebook 頁面',
      skills: ['TailwindCSS', 'Webpack'],
      date: '2022-08-26',
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/TailwindCSS-Facebook/',
      },
      image: {
        src: FacebookUI,
        alt: 'Facebook UI',
        placeholder: 'blur',
      },
    },
    {
      title: '即時天氣預報',
      description: '使用 React 開發，串接中央氣象局 API',
      skills: ['React', 'React Hook', 'Emotion'],
      date: '2022-08-06',
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/realtime-weather-app/',
      },
      image: {
        src: RealtimeWeather,
        alt: '即時天氣預報 APP',
        placeholder: 'blur',
      },
    },
    {
      title: 'AlDente UI',
      description: 'TailwindCSS 練習作品',
      skills: ['TailwindCSS', 'Webpack'],
      date: '2022-08-25',
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/TailwindCSS-AlDente/',
      },
      image: {
        src: AlDente,
        alt: 'AlDente UI',
        placeholder: 'blur',
      },
    },
    {
      title: '農產品比價網',
      description: '輕鬆查詢全台蔬菜、水果、花卉等價格',
      skills: ['Axios', 'Bootstrap 5'],
      date: '2022-01-27',
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/comparison/',
      },
      image: {
        src: PriceComparison,
        alt: '六角學院 農產品比價網站',
        placeholder: 'empty',
      },
    },
    {
      title: '新手 JS 地下城',
      description: '六角學院 - 新手 JS 地下城闖關過程紀錄',
      skills: ['JS'],
      date: '2022-02-06',
      links: {
        post: '/projects/js-dungeons',
        github: '',
        site: '',
      },
      image: {
        src: JSDungeons,
        alt: '六角學院 新手 JS 地下城',
        placeholder: 'blur',
      },
    },
  ],
  Train: [
    {
      title: '公益體驗營',
      description: '參加六角學院於 2022 舉辦公益體驗營的期間作品',
      skills: ['JS'],
      date: '2022-08-26',
      links: {
        post: '/projects/webLayoutTraining1st',
        github: '',
        site: '',
      },
      image: {
        src: ChatTalkerAI,
        alt: '六角學院 公益體驗營',
        placeholder: 'blur',
      },
    },
    {
      title: '六角大專院校程式體驗營',
      description: '參加六角學院於 2022 舉辦大專院校程式體驗營的期間作品',
      skills: ['JS'],
      date: '2022-04-03',
      links: {
        post: '/projects/hexScool_summer_intern',
        github: '',
        site: '',
      },
      image: {
        src: HexScoolHomePage,
        alt: '六角學院 六角大專院校程式體驗營',
        placeholder: 'blur',
      },
    },
    {
      title: 'JS 工程師養成直播班 - 2022 秋季',
      description: '參加六角學院於 2022 舉辦 JS 工程師養成直播班 - 2022 秋季的期間作品',
      skills: ['JS'],
      date: '2022-11-05',
      links: {
        post: '/projects/js-2022-autumn-class',
        github: '',
        site: '',
      },
      image: {
        src: JS2022CLASS,
        alt: '六角學院 JS 工程師養成直播班 - 2022 秋季',
        placeholder: 'blur',
      },
    },
  ],
};
