<template>
<div class="news">
	<div class="preHeaderNews">
		<img src="../../assets/imgs/preIndexNews.png" alt="">
	</div>
	 <headerNews></headerNews>
	 <navNews></navNews>
	<loopPicNews></loopPicNews>
	<introNews></introNews>
	<bgNews></bgNews>
	<briefNews></briefNews>
	<tipNews></tipNews>
	<mainNews></mainNews>
</div>

</template>


<style type="text/css">
	.preHeaderNews img{
		width:100%;
		height:1.6rem;
}
</style>


<script type="text/javascript">

import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import headerNews from  './headerNews/headerNews.vue';
import navNews from './navNews/navNews.vue';
import loopPicNews from './loopPicNews/loopPicNews.vue';
import introNews from './introNews/introNews.vue';
import bgNews from './bgNews/bgNews.vue';
import briefNews from './briefNews/briefNews.vue';
import tipNews from './tipNews/tipNews.vue';
import mainNews from './mainNews/mainNews.vue';


Vue.use(VueAwesomeSwiper);
export default{
	components:{
		headerNews,
		navNews,
		loopPicNews,
		 introNews,
		 bgNews,
		 briefNews,
		 tipNews,
		 mainNews
	},
	methods:{

},
	mounted(){
		
	}
}
</script>