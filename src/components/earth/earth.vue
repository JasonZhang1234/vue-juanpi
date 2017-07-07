<template>
	<div class="earth">
		<earthHeader></earthHeader>
		<cateEarth></cateEarth>
		<bgEarth></bgEarth>
		<briefEarth></briefEarth>
		<bgEarth></bgEarth>
		<brandEarth></brandEarth>
		<infoEarth></infoEarth>
	</div>
</template>

<!-- https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page=1&rows=10&callback=gsort_callback 
https://shop.juanpi.com/gsort?key=310&type=6&zhouyi_ids=p8_c3_l1_18_51_5&machining=showshopgoods&page=2&rows=10&callback=gsort_callback
-->

<style type="text/css">
	

</style>


<script type="text/javascript">
import earthHeader from './earthHeader/earthHeader.vue';
import cateEarth from './cateEarth/cateEarth';
import bgEarth from './bgEarth/bgEarth';
import briefEarth from './briefEarth/briefEarth';
import brandEarth from './brandEarth/brandEarth';
import infoEarth from './infoEarth/infoEarth';


	export default{
		components:{
			earthHeader,
			cateEarth,
			bgEarth,
			briefEarth,
			brandEarth,
			infoEarth
		}
	}


</script>