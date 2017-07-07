<template>

	<div class="orderInfoMine">
		<div class="orderInfoTopMine">
			<span>我的订单</span><span>全部订单</span>
		</div>
		<div class="orderInfoBotMine">
			<a>
				<div class="icon iconfont icon-daifukuan"></div>
				<span>待付款</span>
			</a>
			
			<a>
				<div class="icon iconfont icon-daichengtuan"></div>
				<span>待成团</span>
			</a>

			<a>
				<div class="icon iconfont icon-daishouhuo"></div>
				<span>待收货</span>
			</a>

			<a>
				<div class="icon iconfont icon-cshy-rmb2"></div>
				<span>退款/售后</span>
			</a>
		</div>
	</div>
</template>

<style type="text/css">
	.orderInfoTopMine{
		width: 100%;
		height:1.15942rem;
		line-height:1.15942rem;
		padding-left:.768rem;
		border-bottom:3px solid #dfdfdf;
	}
	
	
	.icon{
		font-size:.67rem;
	}

	.orderInfoTopMine span:last-of-type{
		position:absolute;
		right:.768rem; 
	}

	 .orderInfoBotMine{
		width:100%;
		height:1.924rem;
		display:flex;
		align-items:center;
		justify-content:space-around;
	}
		
		.orderInfoBotMine a{
			display:flex;
			flex-direction:column;
			align-items:center;
			width: 1.37rem;
			height:1.04rem;
		} 

		.orderInfoBotMine a div{
			width:.67rem;
			height:.67rem;
		}
</style>