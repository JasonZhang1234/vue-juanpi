<template>
	<div class="send">
	    <headerSend></headerSend>
		<introSend></introSend>
		<bgSend></bgSend>
		<tipSend></tipSend>	
		<bgSend></bgSend>
		<introSend2></introSend2>
		<cateSend></cateSend>
		<mainSend></mainSend>
	</div>
</template>


<style type="text/css">
</style>


<script type="text/javascript">
 import headerSend from './headerSend/headerSend';
 import introSend from './introSend/introSend';
 import  bgSend from './bgSend/bgSend';
 import tipSend from './tipSend/tipSend';
 import introSend2 from './introSend2/introSend2';
 import cateSend from './cateSend/cateSend';
 import mainSend from  './mainSend/mainSend';

 export default{
 	components:{
 		headerSend,
 		introSend,
 		bgSend,
 		tipSend,
 		introSend2,
 		cateSend,
 		mainSend
 	}
 	
 }




</script>