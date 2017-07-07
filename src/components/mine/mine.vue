<template>
	<div class="mine">
		<mineHeader></mineHeader>
		<orderInfoMine></orderInfoMine>
		<bgMine></bgMine>
		<loveInfoMine></loveInfoMine>
		<bgMine></bgMine>
		<serviceMine></serviceMine>
		<bgMine></bgMine>
		<footerMine></footerMine>
	</div>
</template>

<style type="text/css">
		
.mine{
	overflow-x: hidden;
}

</style>

<script type="text/javascript">
	import mineHeader from './mineHeader/mineHeader';
	import orderInfoMine from './orderInfoMine/orderInfoMine';
	import bgMine from './bgMine/bgMine';
	import loveInfoMine from './loveInfoMine/loveInfoMine';
	import serviceMine from './serviceMine/serviceMine';
	import footerMine from './footerMine/footerMine';


	export default{
		components:{
			mineHeader,
			orderInfoMine,
			bgMine,
			bgMine,
			loveInfoMine,
			serviceMine,
			footerMine
		}
	}

</script>

