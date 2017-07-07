<template>
	<div class="headerNews">
		<span class="icon iconfont icon-fenlei" @click='catePage'>
		</span>
	</div>
</template>


<style type="text/css">
	.headerNews{
		width:100%;
		height:.96rem;
		background: url(../../../assets/imgs/top-logo.png) no-repeat;
		background-size:1.159rem .579rem;
		background-position:center;
		position: relative;
	}
	
	.headerNews span{
		position: absolute;
		top:0.241546rem;
		right: .261rem;
		font-size: 0.563607rem;
	}
	
</style>

<script type="text/javascript">
	export default{
		methods:{
			catePage(){
				this.$router.push({
					path:'/catePage'
				});
			}
		}
	}



</script>