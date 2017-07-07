<template>
	<div class="brandEarth">
		 <a href="" v-for='item in brandEarth'>
			<img v-bind:src="item" alt="">
		</a>
	</div>
</template>


<style type="text/css">
	.brandEarth{
		width: 100%;
		height:5rem;
		display: flex;
		flex-wrap: wrap;
	}	

	.brandEarth a{
		display:block;
		width:25%;
		height:50%;
		box-sizing:border-box;
		border-right:3px solid #dfdfdf;
	}

	.brandEarth a img {
		width: 100%;
		height: 100%;
	}
</style>

<script type="text/javascript">

export default{
  computed:{
  	brandEarth(){
  			return this.$store.state.newsData.data.brandDataEarth;
  		}
	}
}
</script>