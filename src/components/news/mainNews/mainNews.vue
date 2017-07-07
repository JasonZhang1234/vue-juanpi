<template>
	<div class="mainNews" >
			<ul  v-if='showTag'>
				<li v-for='(item,index) in dataNewHome'>
					<a href="">
						<img :src="item.pic_url" alt="">
						<img :src="item.shop_logo" alt="">
						 <p>
							{{index}}
						 </p>
						<div>
							<span>{{item.title}}</span>
							<span>{{item.residue}}</span>
						</div>
					</a>
				</li>
			</ul>
	</div>
</template>
						
<style type="text/css">
  .mainNews ul{
	width: 100%;
	display:flex;
	flex-wrap:wrap;
}
	.mainNews ul li{
		width:49.2%;
		height:6.36rem;
	}
	
	.mainNews ul li:nth-child(odd){
		margin-right:.099rem;
	}

	.mainNews li a{
		width: 100%;
		height:100%;
		display:block;
		position:relative;
	} 

	
	.mainNews li a img:first-child{
		width:100%;
		height:5rem;
	}


	.mainNews li a img:nth-of-type(2){
		width: 1.56rem;
		height: .78rem;
		position:absolute;
		right:50px;
		transform:translateY(-50%);
	} 
	

	.mainNews li a>p{
		height:.338rem;
		color:#ff7077;
		margin-bottom:10px;
	}

	.mainNews li a div{
		width:100%;
		height:.483rem;
	}
	
	

	.mainNews li a div span:nth-of-type(2){
		display:inline-block;
		position:absolute;
		right:30px;
		color: #dfdfdf;
	}
</style>


<script type="text/javascript">
export default{
		data(){
			return {
					pageIndex:1,
					dataNewHome:[],
					dataInfoNewHome:[],
					showTag: false
				}
		},
		methods:{
			request(){
				this.$http.jsonp('https://shop.juanpi.com/gsort',{
						params:{
							key:'zuixinzhekou',
							type:1,
							zhouyi_ids:'p8_c3_l1_18_51_5',
							machining:'hotcoupon',
							page:this.pageIndex,
							rows:'10',
							dtype:'JSONP',
							cm:1,
							cm_channel:1
						},
				}).then(function(res){
		this.showTag = false;
		// 数据渲染的问题？？？？？？？？？ 
	for(var i =0;i<JSON.parse(res.bodyText).list.length;i++){
					this.dataNewHome.push(JSON.parse(res.bodyText).list[i]);
				}
			this.showTag = true;
				})
			},

			requestAgain(){
				var oApp = document.querySelector('.news');
				var onavNews = document.querySelector('.navNews');
				var _this = this;
				var distance=4000;
				
				oApp.onscroll = function(){
	
					if(oApp.scrollTop>=320){	
						onavNews.className='fixPlace';
					}else{
						onavNews.className='navNews';
					}
					
					if(oApp.scrollTop>distance){
						console.log(oApp.scrollTop);
						distance = (_this.pageIndex*5)*790;
						_this.pageIndex++;			
						_this.request();


					}
				}
			},
		},
		mounted(){
			 this.request();
			 this.requestAgain();
		}

}	

</script>