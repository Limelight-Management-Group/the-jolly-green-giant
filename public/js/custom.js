let shopCart = [];
$(document).ready(function(){
	if(sessionStorage["shopCart"] != null){
		shopCart = JSON.parse(sessionStorage["shopCart"].toString());
	}
	outputCart();
    // let isInCart = false;
    console.log('this is working!')
    $(".productItem").click(function(e){
        e.preventDefault();

        let itemInfo = $(this.dataset)[0]
        itemInfo.qty = itemInfo.qty || 1;
        // for(var i = 0; i < shopCart.length; i++){
        //     if(itemInfo.id === shopCart.id[i]){
        //         // s hopCart.push(itemInfo)
        //         itemInfo.qty++
        //         console.log('added to cart!')
        //     }
        // }

        const isInCart = (id) =>{
            let isInCart = false;
            $.each(shopCart,function(index, value){
                if(value.id == itemInfo.id ){
                    // console.log(index +' '+ value)
                    // itemInfo.qty++;
                    console.log('this is the qty', shopCart[index].qty)
                    isInCart = true;
                }
            })
            return isInCart
        }

        const updateQuantity = (id, direction) =>{
            $.each(shopCart,function(index, value){
                if(value.id == itemInfo.id ){
                    // console.log(index +' '+ value)
                    shopCart[index].qty = 1 + parseInt(shopCart[index].qty) 
                    // itemInfo.qty++    
                    console.log('this is the qty', itemInfo.qty)
                }
            })
                
        }
            //takes in an id
            //forEach on array and compares id's to see if the value is in the array
            // increments the quantity
            // returns the quantity
        let test = isInCart(itemInfo.id);
        console.log(test);

        //         const isInCart = () =>{
        //     $.each(shopCart,function(index, value){
        //         if(value.id == itemInfo.id ){
        //             console.log(index +' '+ value)
        //             itemInfo.qty++;
        //             console.log('this is the qty', itemInfo.qty)
        //             isInCart = true;
        //         }
        //     })
        // }
        if(!isInCart(itemInfo.id)){
            shopCart.push(itemInfo)
            console.log('unique item')
        }
        else {
            updateQuantity(itemInfo.id, 'increase')
            console.log('another item added')
        }
        
 		 
		sessionStorage["shopCart"] = JSON.stringify(shopCart)
		outputCart();            
        // console.log('this is the shopping cart', shopCart)
        })
    })
		function outputCart(){
		if(sessionStorage["shopCart"] != null){
		 shopCart = JSON.parse(sessionStorage["shopCart"].toString())
		 console.log('this is sessionStorage :', sessionStorage["shopCart"])
		 $('#checkoutDiv').show()
		}
		let holderHTML = '';
		let total = 0;
		let itemCount = 0;
        $.each(shopCart,function(index, value){
			let subTotal = (value.price * value.qty)
        	holderHTML +=  `<tr> <td> ${value.qty}  </td> <td> ${value.name} </td> <td class="text-xs-right"> ${formatMoney(value.price)}</td> <td class="text-xs-right"> ${formatMoney(subTotal)} </td></tr>  <br>`
        	// console.log('this is the value :', value)
        	total += subTotal
        	itemCount += parseInt(value.qty)
        	console.log(itemCount)

        	// console.log(subTotal, total)
        })
        holderHTML += `<tr> <td colspan="2" class="text-xs-right"> Total: <td/> <td class="text-xs-right">${formatMoney(total)}<td/></tr>`
        $('#output').html(holderHTML)
        $(".total").html(formatMoney(total))
        $(".items").html(itemCount)

        // console.log('holder Array ', holderHTML)

        function formatMoney(n){
        	return'$' + (n/100).toFixed(2)
        }
	}
	



// 	let shopCart = [];
// $(document).ready(function(){
// 	if(sessionStorage["shopCart"] != null){
// 		shopCart = JSON.parse(sessionStorage["shopCart"].toString());
// 	}
// 	outputCart();
//     // let isInCart = false;
//     console.log('this is working!')
//     $(".productItem").click(function(e){
//         e.preventDefault();

//         let itemInfo = $(this.dataset)[0]
//         itemInfo.qty = itemInfo.qty || 1;
        // for(var i = 0; i < shopCart.length; i++){
        //     if(itemInfo.id === shopCart.id[i]){
        //         // s hopCart.push(itemInfo)
        //         itemInfo.qty++
        //         console.log('added to cart!')
        //     }
        // }

 //        const isInCart = (id) =>{
 //            let isInCart = false;
 //            $.each(shopCart,function(index, value){
 //                if(value.id == itemInfo.id ){
 //                    // console.log(index +' '+ value)
 //                    // itemInfo.qty++;
 //                    console.log('this is the qty', shopCart[index].qty)
 //                    isInCart = true;
 //                }
 //            })
 //            return isInCart
 //        }

 //        const updateQuantity = (id, direction) =>{
 //            $.each(shopCart,function(index, value){
 //                if(value.id == itemInfo.id ){
 //                    // console.log(index +' '+ value)
 //                    shopCart[index].qty = 1 + parseInt(shopCart[index].qty) 
 //                    // itemInfo.qty++    
 //                    console.log('this is the qty', itemInfo.qty)
 //                }
 //            })
                
 //        }
 //            //takes in an id
 //            //forEach on array and compares id's to see if the value is in the array
 //            // increments the quantity
 //            // returns the quantity
 //        let test = isInCart(itemInfo.id);
 //        console.log(test);

 //        //         const isInCart = () =>{
 //        //     $.each(shopCart,function(index, value){
 //        //         if(value.id == itemInfo.id ){
 //        //             console.log(index +' '+ value)
 //        //             itemInfo.qty++;
 //        //             console.log('this is the qty', itemInfo.qty)
 //        //             isInCart = true;
 //        //         }
 //        //     })
 //        // }
 //        if(!isInCart(itemInfo.id)){
 //            shopCart.push(itemInfo)
 //            console.log('unique item')
 //        }
 //        else {
 //            updateQuantity(itemInfo.id, 'increase')
 //            console.log('another item added')
 //        }
        
 		 
	// 	outputCart();            
 //        // console.log('this is the shopping cart', shopCart)
 //        })
 //    })
	// function outputCart(){
	// 	if(sessionStorage["shopCart"] != null){
	// 	 shopCart = JSON.parse(sessionStorage["shopCart"].toString());
	// 	 sessionStorage["shopCart"] = JSON.stringify(shopCart)
	// 	 console.log('this is sessionStorage :', sessionStorage["shopCart"])
	// 	}
 //        $.each(shopCart,function(index, value){
 //        	$('#output').append(value.name + '' + value.qty + '' + value.price + '<br>')
 //        	console.log('this is the value :', value)
 //        })
	// }

 

	
 