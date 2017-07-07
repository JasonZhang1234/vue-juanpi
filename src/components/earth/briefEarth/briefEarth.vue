<template>
	<div class="briefEarth">
		<a href="" v-for='item in briefEarth'>
			<img :src="item" alt=""> 
		</a>
	</div>
</template>


<style type="text/css" scoped>
	
.briefEarth{
	width:100%;
	height:6.079rem;
	display: flex;
}

 .briefEarth a{
 	width: 49.8%;
 	height:100%;
 	display: block;
 }
 .briefEarth a:first-child{
 	border-right:5px solid #dfdfdf;
 }

 .briefEarth img{
 	width:100%;
 	height:100%;
 }
</style>


<script type="text/javascript">
	
	export default{
		computed:{
				briefEarth(){
						return this.$store.state.newsData.data.briefDataEarth;
				}
		}
	}
</script>