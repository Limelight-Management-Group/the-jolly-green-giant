$(document).ready(function(){
    let shopCart = [];
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
        
        // console.log(itemInfo[0]);
        // console.log(itemInfo.qty)
            
        console.log('this is the shopping cart', shopCart)
        })
    })
 