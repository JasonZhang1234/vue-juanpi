<template>
	<div class="catePage">
		<headerCatePage></headerCatePage>
		<inputCatePage></inputCatePage>
		<div class="cateInfoBox">
			<cateInfoPage></cateInfoPage>
			<cateInfoMore></cateInfoMore>
		</div>
	</div>
</template>

<style type="text/css">
	.cateInfoBox{
		width:100%;
		display:flex;
	}
</style>

<script type="text/javascript">
	import headerCatePage from './headerCatePage/headerCatePage';
	import inputCatePage from './inputCatePage/inputCatePage';
	import cateInfoPage from './cateInfoPage/cateInfoPage';
	import cateInfoMore from './cateInfoPage/cateInfoMore';
	export default{
		components:{
			headerCatePage,
			inputCatePage,
			cateInfoPage,
			cateInfoMore
		}
	}



</script>