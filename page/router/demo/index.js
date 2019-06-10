
const Home = () => import(/* webpackChunkName: "Content" */'@/components/Content.vue')
const Map = () => import(/* webpackChunkName: "Map" */'@/components/Map.vue')
const About = () => import(/* webpackChunkName: "About" */'@/components/About.vue')
const Message = () => import(/* webpackChunkName: "Message" */'@/components/Message.vue')
const Article = () => import(/* webpackChunkName: "Article" */'@/components/ArticlePage.vue')

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: "SRongr的个人博客"
    }
  },
  {
    path: '/map',
    component: Map,
    meta: {
      title: 'SRongr的个人博客'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: 'SRongr的个人博客'
    }
  },
  {
    path: '/message',
    component: Message,
    meta: {
      title: 'SRongr的个人博客'
    }
  },
  {
    path: '/article/:id',
    component: Article,
    meta: {
      title: 'SRongr的个人博客'
    }
  }
]

export default routes
