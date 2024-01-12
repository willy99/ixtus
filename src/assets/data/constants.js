import logo_instagram from "../images/icons/instagram.png"
import logo_youtube from "../images/icons/youtube.png"
import logo_facebook from "../images/icons/facebook.png"
import logo_gmail from "../images/icons/gmail.png"
import logo_telegram from "../images/icons/telegram.png"

 export const home_folder = '/newdemo';
// export const home_folder = '/';

export const nav = [
  {
    id: 1,
    text: "menuAbout",
    submenu: [
      {
        id: 101,
        text: 'menuNewsWorship',
        url: '/news/general'
      },
      {
        id: 101,
        text: 'menuNewsOnline',
        url: '/news/online'
      },
      {
        id: 101,
        text: 'menuNewsBible',
        url: '/news/bible'
      },
      {
        id: 101,
        text: 'menuNewsMeet',
        url: '/news/meet'
      }
    ],
    url: "/",
  },
  {
    id: 2,
    text: "menuAbout",
    url: "/about",
  },
  {
    id: 5,
    text: "menuContacts",
    url: "/contact",
  },
];

export const youtubeChannelId = 'UCC0YxrLRJpYUorAt3jg8eDA';
export const youtubeBaseFeedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';
export const socialUrls = {
  youtube: {
    url: 'https://www.youtube.com/channel/UCC0YxrLRJpYUorAt3jg8eDA',
    logo: logo_youtube
  },
  instagram: {
    url: 'https://www.instagram.com/templeofsave',
    logo: logo_instagram
  },
  facebook: {
    url: 'https://www.facebook.com/templeofsave/',
    logo: logo_facebook
  },
  telegram: {
    url: 'https://t.me/templeofsave_odessa',
    logo: logo_telegram
  },
  gmail: {
    url: 'mailto:ixtus.od.ua@gmail.com',
    logo: logo_gmail
  }
};

export const category = [
  {
    id: 1,
    category: "Причастя",
    title: "",
    cover: "./images/category/ca1.jpg",
  },
  {
    id: 2,
    category: "Проповіді",
    title: "Духовні цінності",
    cover: "./images/category/ca2.jpg",
  },
  {
    id: 3,
    category: "Піснопіння",
    title: "Диво навколо",
    cover: "./images/category/ca3.jpg",
  },
  {
    id: 4,
    category: "Прославлення Бога",
    title: "Книга Життя",
    cover: "./images/category/ca4.jpg",
  },
  {
    id: 5,
    category: "Вечора",
    title: "There's always light at the end of the tunnel",
    cover: "./images/category/ca5.png",
  },
  {
    id: 6,
    category: "30-річчя Церкви",
    title: "Becoming a Dragonfly",
    cover: "./images/category/ca6.jpg",
  },
  {
    id: 7,
    category: "Business",
    title: "Stay Calm And Surf",
    cover: "./images/category/ca7.jpg",
  },
  {
    id: 8,
    category: "Хрещення",
    title: "There's always light at the end of the tunnel",
    cover: "./images/category/ca8.jpg",
  },
  {
    id: 9,
    category: "Technology",
    title: "There's always light at the end of the tunnel",
    cover: "./images/category/ca9.jpg",
  },
  {
    id: 10,
    category: "Technology",
    title: "There's always light at the end of the tunnel",
    cover: "./images/category/ca10.jpg",
  },
  {
    id: 11,
    category: "Technology",
    title: "There's always light at the end of the tunnel",
    cover: "./images/category/ca11.jpg",
  },
  {
    id: 12,
    category: "Technology",
    title: "There's always light at the end of the tunnel",
    cover: "./images/category/ca12.jpg",
  },
];

export const youtubeVideoKeywordWorship = 'Богослужіння';
export const youtubeVideoKeywordBible = 'Вивчення Слова';
export const youtubeVideoKeywordOnline = 'Пряма трансляція';
