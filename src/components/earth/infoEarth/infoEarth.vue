<template>
	<div>
		<div class="infoEarth" v-for='item in dataInfoEarth'>
				<a href="">
					<img :src="item.shop_cover" alt="">
				</a>
				<div class="infoBox" >
					<ul>
						<li v-for= 'i in item.shop_goods'>
							<a href="">
								<img :src="i.pic_url" alt="">
							</a>
							<p class="priceInfo"><span>¥{{i.cprice}}</span><span>¥{{i.oprice}}</span></p>
							<p class="infoGoods">{{i.title}}</p>
						</li>
					</ul>
				</div>
		</div>

	</div>
</template>


<style type="text/css">
	
.infoEarth{
	width:100%;
}

.infoEarth>a{
	width:100%;
	height:4.739rem;
	display:block;
}

.infoEarth>a img{
	width:100%;
	height:100%;
}



.infoBox::-webkit-scrollbar {display:none}

.infoBox{
	width:100%;
	overflow-x:auto;
}

.infoBox ul{
	display:flex;
}

.infoBox ul li{
	width:2.1739rem;
	height:4.1rem;
}


.infoBox .priceInfo{
	width: 2.173913rem;
	height: 0.338164rem;
	text-align: center;
	padding-left:0.161031rem;
}

.infoBox .priceInfo span:first-child{
	color:blue;
}

.infoBox .priceInfo span:last-child{
	color: #dfdfdf;
	text-decoration:line-through;
}


.infoBox .infoGoods{
	width:2.173913rem;
	height: 0.644122rem;
	text-align: center; 
	padding-left:0.161031rem;
}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				dataInfoEarth:[],
				index:1
			}
		},
		methods:{
			request(){
				this.$http({
					url:'http://localhost:8080/infoEarth',
					method:'GET',
					params:{
						page:this.index
					}
				}).then(function(req){
					var data = req.bodyText.substring(req.bodyText.indexOf('(')+1,req.bodyText.lastIndexOf(')'));
					this.dataInfoEarth = JSON.parse(data).list;
					console.log(this.dataInfoEarth);
				})
			}//end f
		},//end m
		mounted(){
			this.request();
		}
		
	}


</script>