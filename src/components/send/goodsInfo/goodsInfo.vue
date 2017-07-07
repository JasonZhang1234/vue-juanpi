<template>
	<div class="goodInfo">

	{{getUrl()}}


	</div>


</template>


<script type="text/javascript">
	

	export default{
		methods:{
			getUrl(){
				
				var url = this.$route.query.url;
				this.$axios.get(url).then(function(res){
							console.log(res.data.status);
							console.log(res.data.result);
					});

				return this.$route.query.url;
			}
		}
	}
</script>