<template>
	<div class="loopPicNews">
		<swiper :options="swiperOption" >
			
	  		<swiper-slide><img src="../../../assets/imgs/loop1News.jpg" alt=""></swiper-slide>
	  		<swiper-slide><img src="../../../assets/imgs/loop2News.jpg" alt=""></swiper-slide>
	  		<swiper-slide><img src="../../../assets/imgs/loop3News.jpg" alt=""></swiper-slide>
	  		<swiper-slide><img src="../../../assets/imgs/loop4News.jpg" alt=""></swiper-slide>
	  		<swiper-slide><img src="../../../assets/imgs/loop5News.jpg" alt=""></swiper-slide>
	  		<div class="swiper-pagination" slot ='pagination'></div>
		</swiper>
	</div>
</template>

<style type="text/css">

		.swiper-slide img{
			width: 100%;
			height: 3.86rem;
		}
		
		.swiper-pagination-bullet{
			width:0.402576rem;
			height:0.402576rem;
		}
</style>





<script>
export default{
    data(){
      return {
        swiperOption:{
          autoplay:1000,
          loop:true,
         autoplayDisableOnInteraction:false,
         pagination:'.swiper-pagination',
         paginationClickable :true
      },//end Option

    }//end return 
  }//end data

}//end default




</script>