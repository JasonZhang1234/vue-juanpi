<template>	
	<div class="cateSend">
			<ul class="cateTopSend">
				<li >默认</li>
				<li>
				 	价格
				 	<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/sort_default.png" alt="">
				 	</li>
				<li>
					销量
				</li>
			</ul>

			<div class='cateBotBox'>
				<ul class="cateBot">
					<li> <a href="">精选</a></li>
					<li v-for= 'item in dataSendCate'><a href="">{{item.name}}</a></li>
				</ul>
			</div>
	</div>
</template>

<style type="text/css">
 .cateSend{
 	width: 100%;
 	height:2.388rem;
 }

.cateSendActive{
	width:100%;
	height:2.388rem;
	position:fixed;
	top:0;
	background-color: white; 
}

.cateTopSend{
	width: 100%;
	height:.9742rem;
}

.cateTopSend li{
	float:left;
	width:33.3333333%;
	height:100%;
	line-height:.9742rem;
	text-align:center;
	 font-size:.396rem;
}

.cateTopSend li img{
	width: .4rem;
	height: .4rem;
	vertical-align: middle;
}


.cateBotBox::-webkit-scrollbar {
	display:none
}

.cateBotBox{
	height:1.414rem;
	overflow-x:auto;
	background-color: #f4f4f8;
}

.cateBotBox .cateBot{
	width:140%;
	height:100%;
}

.cateBot li{
	float:left;
	height:100%;
	line-height:1.414rem;
}


.cateBot li a{
	padding:0 30px;
	font-size:.396rem;
	display:inline-block;
	height:.7rem;
	vertical-align:middle;
	text-align:center;
	line-height:.7rem;
}

</style>


<script type="text/javascript">
	export default{
		 data(){
		 	return{
		 		dataSendCate:[]
		 	}
		 },
		methods:{
			requestDataSendCate(){
				this.$http({
					url:'http://localhost:8080/cateSend',
					method:'GET',
				}).then(function(res){		
					 this.dataSendCate = JSON.parse(res.bodyText).sub_cate_list;
						
				})
			},

			sendScroll(){
				var oBox = document.querySelector('.send');
				var oCateSend = document.querySelector('.cateSend');
				oBox.onscroll=function(){
						
						if(oBox.scrollTop>1500){
								oCateSend.className = 'cateSendActive';
						}else{
							oCateSend.className = 'cateSend';
						}

		
				}

			}
		},
		mounted(){
			this.requestDataSendCate();
			this.sendScroll();
		}
	}
</script>