<template>
	<ul class="footer">
		<li>
			<router-link to ='news'>
				<div></div>
				<span>今日上新</span>
			</router-link>
		</li>

		<li>
			<router-link to = 'send'>
				<div></div>
				<span>直发仓</span>	
			</router-link>	
		</li>

		<li>
			<router-link to = 'earth'>
				<div></div>
				<span>全球购</span>
			</router-link>
		</li>

		<li>
			<router-link to = 'cart'>
					<div></div>
					<span>购物车</span>
			</router-link>
		</li>


		<li>
			<router-link to ='mine'>
					<div></div>
					<span>我的卷皮</span>
			</router-link>
		</li>			
	</ul>
</template>


<style type="text/css">
	.footer{
		width:100%;
		height:1.306667rem;
		position:absolute;
		bottom:0;
		display:flex;
	}

	.footer li{
		width:20%;
		height:100%;
		text-align: center;
	}
	
	.footer li a{
		display:flex;
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.footer li div{
		width: .64rem;
		height: .64rem;
	}

.footer li:first-of-type div{
	background:url('../../assets/imgs/news.png') no-repeat;
	background-size:contain;
}



.footer li:nth-of-type(2) div{
	background:url('../../assets/imgs/send.png') no-repeat;
	background-size:contain;
}

.footer li:nth-of-type(3) div{
	background:url('../../assets/imgs/earth.png') no-repeat;
	background-size:contain;
}

.footer li:nth-of-type(4) div{
	background:url('../../assets/imgs/cart.png') no-repeat;
	background-size:contain;
}

.footer li:nth-of-type(5) div{
	background:url('../../assets/imgs/mine.png') no-repeat;
	background-size:contain;
}


.footer li:first-of-type .router-link-exact-active div{
	background:url('//s2.juancdn.com/bao/170411/6/8/58ecae97ad0a49a6408b45df_72x72.png') no-repeat;
	background-size:contain;
}



.footer li:nth-of-type(2) .router-link-exact-active div{
	background:url('//s2.juancdn.com/bao/170411/9/d/58ecaea6a43d1f5e382003c6_72x72.png') no-repeat;
	background-size:contain;
}

.footer li:nth-of-type(3) .router-link-exact-active div{
	background:url('//s2.juancdn.com/bao/170411/b/5/58ecaeb3a43d1f5caf7c0d16_72x72.png') no-repeat;
	background-size:contain;
}

.footer li:nth-of-type(4)  .router-link-exact-active div{
	background:url('//s2.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png') no-repeat;
	background-size:contain;
}

.footer li:nth-of-type(5)  .router-link-exact-active div{
	background:url('//s2.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png') no-repeat;
	background-size:contain;
}


</style>


<script type="text/javascript">
	


</script>


