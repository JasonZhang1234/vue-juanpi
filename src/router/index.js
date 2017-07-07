import Vue from 'vue';
import Router from 'vue-router';
import news from '../components/news/news';
import send from '../components/send/send';
import cart from '../components/cart/cart';
import mine from '../components/mine/mine';
import earth from '../components/earth/earth';
import news2 from '../components/news/news2/news2';
import news3 from '../components/news/news3/news3';
import news4 from '../components/news/news4/news4';
import catePage from '../components/catePage/catePage';
import goodsInfo from '../components/send/goodsInfo/goodsInfo';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'news',
      component:news
    },
    {
        path:'/news2',
        name:'news2',
        component:news2
    },
    {
        path:'/news3',
        name:'news3',
        component:news3
    },
    {
    	path:'/send',
    	name:'send',
    	component:send
    },
    {
        path:'/goodsInfo',
        component:goodsInfo
    },
    {
    	path:'/earth',
    	name:'earth',
    	component:earth
    },
    {
    	path:'/cart',
    	name:'cart',
    	component:cart
    },
    {
    	path:'/mine',
    	name:'mine',
    	component:mine
    },
    {
        path:'/catePage',
        name:'catePage',
        component:catePage
    },
    {
        path:'/',
        component:news
    }
  ]
});
