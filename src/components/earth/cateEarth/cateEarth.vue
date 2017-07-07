<template>

	<div class="cateEarth">
		<a href="" v-for='item in datalist'>
				<img v-bind:src='item' alt="">
		</a>

	</div>

</template>

<style type="text/css">
	.cateEarth{
		width:100%;
		height:4.8rem;
		display:flex;
		flex-wrap:wrap;
	}

	.cateEarth a{
		display: block;
		width:50%;
		height:50%;
	}

	.cateEarth a img{
		width: 100%;
		height: 100%;
	}
</style>

<script type="text/javascript">


	export default{
	
		methods:{
			request(){
				this.$http({
					url:'http://localhost:8080/earth',
					method:'GET'
				}).then(function(req){
						
						var dataStr = req.bodyText.substring(req.bodyText.indexOf('(')+1,req.bodyText.lastIndexOf(")"));
						 this.$store.commit('getData',{
						 	data:JSON.parse(dataStr).module_ads.multi_block
						 });
				})
			}
		},
		mounted(){
			this.request();
		},
		computed:{
			datalist(){
		  	return this.$store.state.newsData.data.cateDataEarth; 
			}
		}
	}	
</script>