<template>
		<div class="cart">
			<cartHeader></cartHeader>
			<emptyCart></emptyCart>
		</div>	
</template>

<style type="text/css">
	.cart{
		background-color: #dfdfdf;
	}

</style>


<script type="text/javascript">
	import cartHeader from './cartHeader/cartHeader';
	import emptyCart from './emptyCart/emptyCart';
	export default{
		components:{
			cartHeader,
			emptyCart
		}
	}


</script>