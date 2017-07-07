<template>
	<ul class="mainSend">
		<li v-for='item in dataMainSend'>
			<a href="#goodsInfo">
				<img :src='item.pic_url' alt="">
				
				<p class="priceMainSend">
					<span>¥{{item.cprice}}</span><i>拼</i><span>¥{{item.oprice}}</span>
				</p>
				
				<div class="infoMainSend">
					<span>直发</span><span>{{item.title}}</span>
				</div>	
			</a>
		</li>
	</ul>
</template>


<style type="text/css">

	.mainSend{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		overflow-x: hidden;
	}

	.mainSend li{
		width:50%;
		height:6.36rem;
	}

	.mainSend li:nth-of-type(odd){
		border-bottom:2px solid #dfdfdf;
	}
	


	 .mainSend li img{
		width:100%;
		height:5rem; 
	}

	.priceMainSend{
		width:50%;
		height:.579rem;
		line-height:.579rem;
		padding:0 .193rem;
	} 
	
	.priceMainSend i{
		font-size:.2815rem;
		color:white;
		background-color:red;
		margin-left:10px;
	}
	.priceMainSend span{
		font-size:.36rem;
	}
	

	.priceMainSend span:first-child{
		color:red;
	}
	

	.priceMainSend span:last-child{
		text-decoration:line-through;
		color:#d2d2d2;
		margin-left:.161rem;
	}

	.infoMainSend{
		width: 100%;
		height:.483rem;
		padding-left:.193rem;
	}
	.infoMainSend span:first-child{
	   display: inline-block;
	   width:.804rem;
	   height: .331rem;
	   border:1px solid red;
		color:red;
		text-align:center;
		margin-right:.193rem;
	}


</style>



<script type="text/javascript">
	
export default{
	data(){
		return {
				dataMainSend:[]
		}
	},
	methods:{
		getMainSend(){
			this.$http.jsonp('https://shop.juanpi.com/gsort',{	
				params:{
						key:'%7B%22cdt%22%3A%7B%22stock%22%3A%222%22%2C%22is_show_presale%22%3A%220%22%2C%22hot_type%22%3A%5B%221%22%2C%223%22%5D%2C%22source_type%22%3A%5B%221%22%5D%2C%22fcate%22%3A%22490%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%7D%7D',
						type:50,
						zhouyi_ids:'p8_c3_l1_18_51_5',
						machining:'danpin',
						page:1,
						rows:10,
						dtype:'JSONP'
					}
			}).then(function(res){
				  this.dataMainSend = JSON.parse(res.bodyText).list;
			})
		},

		getAgainMainSend(){
			
			// var oSend = document.querySelector('.send')
		}
	},
	mounted(){
		this.getMainSend();
	}
}

</script>