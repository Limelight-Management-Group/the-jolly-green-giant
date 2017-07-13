
$(document).ready(function(){
	let shopCart = [];
	console.log('this is working!')
	$(".productItem").click(function(e){
		e.preventDefault();

		let itemInfo = $(this.dataset)[0]
		itemInfo.qty = 1;
		// for(var i = 0; i < shopCart.length; i++){
		// 	if(itemInfo.id === shopCart.id[i]){
		// 		// s hopCart.push(itemInfo)
		// 		itemInfo.qty++
		// 		console.log('added to cart!')
		// 	}
		// }


		$.each(shopCart,function(index, value){
			// if(itemInfo.id !== shopCart.id){
				console.log(index +' '+ value)
			})
		shopCart.push(itemInfo)

		// console.log(itemInfo[0]);
		// console.log(itemInfo.qty)
			
		// console.log(shopCart)
		})
	})
