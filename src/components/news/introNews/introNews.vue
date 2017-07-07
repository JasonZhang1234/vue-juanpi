<template>	
		<ul class="introNews">
			<li v-on:click='getDataCart'>
				<router-link :to="{path:'/goodsInfo',query:{url:sendUrl}}">
					<img src="../../../assets/imgs/introNews.png" alt="">
					<span>最后疯抢</span>
				</router-link>
			</li>


			<li v-on:click='getDataCart'>
				<a href="">
					<img src="../../../assets/imgs/introNews2.png" alt="">
					<span>9.9包邮</span>
				</a>
			</li>


			<li v-on:click='getDataCart'>
				<a href="">
					<img src="../../../assets/imgs/introNews3.png" alt="">
					<span>拼团</span>
				</a>
			</li>


			<li v-on:click='getDataCart'>
				<a href="">
					<img src="../../../assets/imgs/introNews4.png" alt="">
					<span>即将上线</span>
				</a>
			</li>
		</ul>
</template>


<style type="text/css">
	.introNews{
		width:100%;
		display:flex;
	}


	.introNews li{
		width:25%;
		height:2.157rem;
	}	
	
	.introNews li a{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items:center;
	}
	
	.introNews img{
		width: .9618rem;
		height: .9618rem;
		margin-bottom: 15px;
	}

</style>


<script type="text/javascript">
	export default{
		methods:{
			getDataCart(){
				console.log(111111);
			}
		},
		computed:{
			sendUrl(){
				var str = 'http://localhost:8080/goodsInfo';
				return str;
			}
		}
	}
</script>