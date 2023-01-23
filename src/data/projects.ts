import { StaticImageData } from 'next/image';

import CoffeeShop from '../../public/images/projects/coffeeShop.jpg';
import ReactTodo from '../../public/images/projects/react_todoList.jpg';
import LivePhotos from '../../public/images/projects/LivePhotos.jpg';
import FacebookUI from '../../public/images/projects/facebook_UI.jpg';
import RealtimeWeather from '../../public/images/projects/realtime_weather.jpg';
import AlDente from '../../public/images/projects/AlDente.jpg';
import HexDessertRestaurant from '../../public/images/projects/dessert_restaurant.jpg';
import ChatTalkerAI from '../../public/images/projects/chatTalker_AI.jpg';
import PriceComparison from '../../public/images/projects/price_comparison.jpg';
import MultiplicationTable from '../../public/images/projects/multiplication_table.jpg';
import Clock from '../../public/images/projects/clock.jpg';
import JSToDo from '../../public/images/projects/js_todoList.jpg';
import HexScoolHomePage from '../../public/images/projects/hexScool_homePage.jpg';

export type Project = {
  title: string;
  description: string;
  skills: string[];
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
}

export const allProject: Record<Category, Project[]> = {
  Project: [
    {
      title: '貓咖啡 CatCof',
      description: '咖啡電商網站，有前後台功能',
      skills: ['Vue 2', 'Vue Cli', 'Vue Router', 'Bootstrap5'],
      links: {
        post: '',
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
      links: {
        post: '',
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
      title: 'TailwindCSS - Faceboock UI',
      description: 'TailwindCSS 實作 Facebook 頁面',
      skills: ['TailwindCSS', 'Webpack'],
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
      title: 'TailwindCSS - AlDente UI',
      description: 'TailwindCSS 練習作品',
      skills: ['TailwindCSS', 'Webpack'],
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
      title: '六角甜點餐廳',
      description: 'TailwindCSS 練習作品',
      skills: ['HTML 5', 'CSS'],
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/HexSchool_webLayoutTraining1st/Task-1/',
      },
      image: {
        src: HexDessertRestaurant,
        alt: '六角學院 甜點餐廳',
        placeholder: 'empty',
      },
    },
    {
      title: 'chatTalker AI 機器人',
      description: 'TailwindCSS 練習作品',
      skills: ['HTML 5', 'CSS'],
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/HexSchool_webLayoutTraining1st/Task-2/',
      },
      image: {
        src: ChatTalkerAI,
        alt: 'chatTalker AI 機器人',
        placeholder: 'empty',
      },
    },
    {
      title: '農產品比價網',
      description: '輕鬆查詢全台蔬菜、水果、花卉等價格',
      skills: ['Axios', 'Bootstrap 5'],
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
      title: '九九乘法表',
      description: ' 新手 JS 地下城，1F Boss 關卡',
      skills: ['Vue 2', 'JavaScript'],
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/JS-Dungeons/1F/',
      },
      image: {
        src: MultiplicationTable,
        alt: '六角學院 新手 JS 地下城 1F',
        placeholder: 'empty',
      },
    },
    {
      title: '時鐘',
      description: '新手 JS 地下城，2F Boss 關卡',
      skills: ['Vue 2', 'JavaScript'],
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/JS-Dungeons/2F/',
      },
      image: {
        src: Clock,
        alt: '六角學院 新手 JS 地下城 2F',
        placeholder: 'empty',
      },
    },
    {
      title: 'JS TodoList',
      description: '使用 JS 練習Todolist。',
      skills: ['HTML 5', 'JavaScript', 'Bootstrap 5'],
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/Todolist/',
      },
      image: {
        src: JSToDo,
        alt: 'JavaScript TodoList',
        placeholder: 'empty',
      },
    },
    {
      title: '六角 HexScool 首頁',
      description: '六角大專院校程式體驗營作品',
      skills: ['HTML 5', 'JavaScript', 'Bootstrap 5'],
      links: {
        post: '',
        github: '',
        site: 'https://cofcat456.github.io/HexSchoolWork/jQuery/',
      },
      image: {
        src: HexScoolHomePage,
        alt: '六角學院 首頁',
        placeholder: 'empty',
      },
    },
  ],
};
