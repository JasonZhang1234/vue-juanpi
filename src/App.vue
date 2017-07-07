<template>
  <div id="app">

  	<router-view class='content'></router-view>	
  	<v-footer></v-footer>
<!-- 	<offsetTop></offsetTop> -->
  </div>
</template>


<style>
	#app{
		position:absolute;
		left:0;
		right:0;
		top:0;
		bottom:0;
	}

	 .content{
	 	left:0;
	 	right:0;
	 	top:0;
	 	bottom: 1.30667rem;
	 	position:absolute;
		overflow:auto;
	}
	
</style>


<script>
import vFooter from './components/footer/footer.vue';
import offsetTop from './components/offsetTop/offsetTop'; 

export default{
	components:{
		vFooter,
		offsetTop
	}
}
</script>

