import logo_instagram from "../images/icons/instagram.png"
import logo_youtube from "../images/icons/youtube.png"
import logo_facebook from "../images/icons/facebook.png"
import logo_gmail from "../images/icons/gmail.png"
import logo_telegram from "../images/icons/telegram.png"
import icon_address from "../images/icons/icon_address.png"
import icon_phone from "../images/icons/icon_phone.png"
import icon_email from "../images/icons/icon_email.png"
import flag_ukraine from "../images/icons/flag_ukraine.png"
import flag_usa from "../images/icons/flag_usa.png"
import menu_list from "../images/icons/menu_list.png"

 export const home_folder = '/newdemo';
// export const home_folder = '/';

export const nav = [
  {
    id: 1,
    text: "menuNews",
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
export const googleMapAddress = 'https://www.google.com/maps/place/%D0%A5%D1%80%D0%B0%D0%BC+%D0%A1%D0%BF%D0%B0%D1%81%D0%B5%D0%BD%D0%B8%D1%8F,+%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%95%D0%B2%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D1%85+%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD-%D0%B1%D0%B0%D0%BF%D1%82%D0%B8%D1%81%D1%82%D0%BE%D0%B2/@46.597813,30.798569,16z/data=!4m6!3m5!1s0x40c624bed1de1497:0x696215327c6a0210!8m2!3d46.5978126!4d30.7985687!16s%2Fg%2F11xwsf7zk?hl=en&entry=ttu';
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
  email: {
    url: 'mailto:ixtus.od.ua@gmail.com',
    logo: logo_gmail
  },
  email_clean: {
    url: 'ixtus.od.ua@gmail.com',
    logo: logo_gmail
  }

};

export const icons = {
  address: icon_address,
  phone: icon_phone,
  email: icon_email,
  flag_ukraine: flag_ukraine,
  flag_usa: flag_usa,
  menu_list: menu_list,
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
export const youtubeVideoKeywordNightWorship = 'Вечірнє Богослужіння';
export const youtubeVideoKeywordBible = 'Вивчення Слова';
export const youtubeVideoKeywordOnline = 'Пряма трансляція';
