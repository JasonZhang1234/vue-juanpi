<template>
	<div class="news2">
		<headerNews></headerNews>
		<navNews></navNews>		
		<cateNews2></cateNews2>
		<bgNews2></bgNews2>
		<briefNews2></briefNews2>
		<bgNews2></bgNews2>
		<topicNews2></topicNews2>
		<bgNews2></bgNews2>
		<tipNews></tipNews>
	</div>
</template>

<style type="text/css">
	
</style>

<script type="text/javascript">
	import headerNews from  '../headerNews/headerNews.vue';
	import navNews from '../navNews/navNews.vue';
	import cateNews2 from './cateNews2/cateNews2';
	import bgNews2 from '../bgNews/bgNews';
	import briefNews2 from './briefNews2/briefNews2';
	import topicNews2 from './topicNews2/topicNews2';
	import tipNews from '../tipNews/tipNews';
	export default{
		components:{
			headerNews,
			navNews,
			cateNews2,
			bgNews2,
			briefNews2,
			topicNews2,
			tipNews
		}
		

	}
</script>