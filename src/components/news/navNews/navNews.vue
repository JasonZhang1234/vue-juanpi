<template>
	<div class="navNewsBox">

	<ul class="navNews">
			<li v-on:click='getDataNewsCate'><a href="#news">上新</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news2">女装</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news3">鞋包</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news4">母婴</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news5">数码</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news6">居家</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news7">男士</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news8">美妆</a></li>
			<li v-on:click='getDataNewsCate'><a href="#news9">美食</a></li>
	</ul>
	</div>	
</template>


<style type="text/css">

	.navNewsBox::-webkit-scrollbar {display:none}
	.navNewsBox{
		overflow-x:auto;
		height:.9178rem;
		position:relative;
	}
	
	.navNews{
		height:.9178rem;
		display:flex;
		position:absolute;
		z-index:2;
	}
	
	.navNews li{
		width:1.398rem;
		height:100%;
		line-height:.98rem;
		text-align:center;
		font-size:.35rem;
	}
	.fixPlace li{
		width:1.398rem;
		height:100%;
		line-height:.98rem;
		text-align:center;
		font-size:.35rem;
		
	}
	
	.fixPlace a{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	.fixPlace{
		width:200%;
		height:.9178rem;
		display:flex;
		position:fixed;
		z-index:2;
		top:0;
		background-color: white;
	}
	.active{
		color:red;
		border-bottom: 10px solid red;
	}
</style>

<script type="text/javascript">
		
	export default{
			data(){
					return {
						arrNav:['上新','女装','鞋包','母婴','数码','居家','男士','美妆','美食']
					}
			},
			methods:{
				getDataNewsCate(){		
					var oLis = document.querySelectorAll('.navNews li');
					for(var i=0;i<oLis.length;i++){

							if(event.target.parentElement==oLis[i]){
								console.log(11111);
									oLis[i].className = 'active';
							}
					}
				}
			},
			mounted(){
				// this.getDataNewsCate();
			}
		}

</script>