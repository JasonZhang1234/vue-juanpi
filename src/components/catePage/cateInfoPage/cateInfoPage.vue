<template>
	<ul class="cateInfoPage">
			<li @click='showCateInfoMore($event)'>女装</li>
			<li @click='showCateInfoMore'>男装</li>
			<li @click='showCateInfoMore'>母婴</li>
			<li @click='showCateInfoMore'>鞋类</li>
			<li @click='showCateInfoMore'>箱包</li>
			<li @click='showCateInfoMore'>居家百货</li>
			<li @click='showCateInfoMore'>家电数码</li>
			<li @click='showCateInfoMore'>内衣配饰</li>
			<li @click='showCateInfoMore'>美妆</li>
			<li @click='showCateInfoMore'>运动户外</li>
			<li @click='showCateInfoMore'>美食</li>
			<li @click='showCateInfoMore'>车品文娱</li>
	</ul>
</template>


<style type="text/css">
	.cateInfoPage{
		width:2.584541rem;
	}

	.cateInfoPage li{
		width:100%;
		height:1.095008rem;
		line-height: 1.095008rem;
		padding-left: 0.322061rem;
		font-size: 0.341546rem;
		background-color:#f9f9f9;
	}
</style>

<script type="text/javascript">
	export default{
		methods:{
			showCateInfoMore(e){
				
				var oUls = document.querySelectorAll('.cateInfoMore ul');

				var oLis = document.querySelectorAll('.cateInfoPage li');
				var arr = ['女装','男装','母婴','鞋类','箱包','居家百货','家电数码','内衣配饰','美妆','运动户外','美食','车品文娱'];


				for(var i =0;i<arr.length;i++){
					if(arr[i]==e.target.innerHTML){
						e.target.style.backgroundColor='white';
						e.target.style.color = 'red';
						oUls[i].style.display = 'flex';	
					}else{

						oLis[i].style.backgroundColor='#f9f9f9';
						oLis[i].style.color = 'black';
						oUls[i].style.display = 'none';
					}
				}
			}
		}
	}


</script>