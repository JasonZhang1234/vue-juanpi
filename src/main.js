
import './assets/js/flexible.js';
import './assets/css/reset.css';
import './assets/fontlib/iconfont.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import vueResource from 'vue-resource';
import Vuex from 'vuex';
import axios from 'axios';


Vue.prototype.$axios = axios;

Vue.use(Vuex);

const store = new  Vuex.Store({
	state:{
		newsData:{
			data:{
				cateDataEarth:[],
				briefDataEarth:[],
				brandDataEarth:[],
			}
		},
		catePage:0
	},

	mutations:{

		// 获取到全球购页面的数据
		getData(state,opt){
		// 这里是分类的数据
		 state.newsData.data.cateDataEarth[0] = opt.data[0].data[0].child[0].pic;
		 state.newsData.data.cateDataEarth[1] = opt.data[0].data[0].child[1].pic;
		 state.newsData.data.cateDataEarth[2] = opt.data[1].data[0].child[0].pic;
		 state.newsData.data.cateDataEarth[3] = opt.data[1].data[0].child[1].pic;
		 
		 // 这里是brief部分的数据
		 state.newsData.data.briefDataEarth[0] = opt.data[2].data[0].child[0].pic;
         state.newsData.data.briefDataEarth[1] = opt.data[2].data[0].child[1].pic;
         
         //这里是商标部分的数据
         for(var i=0;i<4;i++){
         state.newsData.data.brandDataEarth[i]= opt.data[3].data[0].child[i].pic;
         }
         for(var i=0;i<4;i++){
         	 state.newsData.data.brandDataEarth[i+4]= opt.data[4].data[0].child[i].pic;
         }
                  	
		},

		getCatePage(state,opt){
			console.log('这里是仓库中的数据');
			state.catePage = opt.catePage;

		}
	},
	actions:{			
	}
});


Vue.use(vueResource);
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  vueResource,
  store
})
