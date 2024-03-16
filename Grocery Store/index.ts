
type Grocery = {
    itemName:string | null;
    Quantanty:number;
    price:number;
    
}
type AddItems = (array:Grocery[]) => void;
type GetBill = (array:Grocery[]) => void;
let addItems : AddItems =(array)=>{
let itemName : string | null= prompt("Enter item name which you want to add")
let quantanty : string | null = prompt("Enter quantanty")
let setPrice : string | null =  prompt("Enter price")
if(quantanty !==null && setPrice !==null){
    let quant : number= parseInt(quantanty)
    let price : number = parseInt(setPrice)
    array.push({itemName:itemName,Quantanty:quant,price:price})
    confirm("Item added successfully\nItem: " + itemName + "\nQuantanty: "+ quant + "\nPrice: " + price )
    console.log("Item added successfully\nItem: " + itemName + "\nQuantanty: "+ quant + "\nPrice: " + price )
}

}

let getBill : GetBill = (array)=>{
let nameItem : string | null = prompt("Enter your item name which  you want")
let quantantyYouWant : string | null = prompt("Enter Quantanty you want")     
let payPrice : string | null = prompt("Enter pay bill")
if(quantantyYouWant!==null && payPrice !==null ){
    if(array.length!==0){
        let quantInNum : number = parseInt(quantantyYouWant)
        let payPriceNum : number = parseInt(payPrice)
        for(let i=0;i<array.length;i++){
            if(nameItem===array[i].itemName){
                let bill =array[i].price*quantInNum
                if(payPriceNum===bill){
                    array[i].Quantanty-=quantInNum
                    confirm("Thank you for purchassing\nYour item is " + array[i].itemName + "\nYour total bill is " + bill)
                    console.log("Thank you for purchassing\nYour item is " + array[i].itemName + "\nYour total bill is " + bill)
    
                }
                
                
            }
            
        }
    }
    else{
            confirm("Please first add items in list")
            console.log("Please first add items in list")
            
        
        
    }
}
else{
        confirm("input is null")
        console.log("input is null")
        
    
}     
}

let updateItem = (array:Grocery[]):void=>{
let itemToUpdate : string | null =prompt("Enter item name to update")
let priceToUpdate : string | null=prompt("Enter price to update")
let quantToUpdate : string | null=prompt("Enter quantanty to update")
if(priceToUpdate!==null && quantToUpdate!==null){
   let updatePrice :number= Number(priceToUpdate)
   let updateQuant :number= Number(quantToUpdate)
    for(let i=0;i<array.length;i++){
        if(itemToUpdate===array[i].itemName && updatePrice ===array[i].price && updateQuant===array[i].Quantanty){
            let newItemName : string | null = prompt("Enter new Item name")
            let newPrice : string | null = prompt("Enter new Price")
            let newQuant : string | null = prompt("Enter new Quantanty")
            if(newQuant!==null && newPrice!==null){
                array[i].itemName=newItemName;
                array[i].price=Number(newPrice)
                array[i].Quantanty=Number(newQuant)
            }
            

        }
        
    }
}
else{
    confirm("input is null")
    console.log("input is null")
}
}
let deletItem = (array:Grocery[]):void=>{
    let nameItemToDelet : string | null = prompt("Enter your name to delet item")
    for(let i=0;i<array.length;i++){
        if(nameItemToDelet===array[i].itemName){
            confirm(`Item deleted successfully\nItem name is:${array[i].itemName}\nItem price:${array[i].price}\nItem quantanty:${array[i].Quantanty}`)
            console.log(`Item deleted successfully\nItem name is:${array[i].itemName}\nItem price:${array[i].price}\nItem quantanty:${array[i].Quantanty}`)
            array.splice(i,1)
            
        }
    }
}

function showItem(array:Grocery[]):void{
for(let item of array){
console.log(item)
}
}
let mainfunc = ():void=>{
let list :Grocery[] =[];
let flage : boolean= true;
while(flage){
    console.log("Welcome to my Grocery Store")
    console.log("Choose options below")
    console.log("1 Add items")
    console.log("2 Buy item and get bill")
    console.log("3 Update items")
    console.log("4 Delet items")
    console.log("5 Show items")
    console.log("6 Exit")
    let choice : string | null=  prompt("Enter your option")
    if(choice != null){
        let choosedNum : Number = parseInt(choice)
        switch (choosedNum) {
            case 1:
                addItems(list)
                break
            case 2:
                getBill(list)
                break
            case 3:
                updateItem(list)
                break
            case 4:
                deletItem(list)
                break
            case 5:
                showItem(list)
                break
            case 6:
                console.log("Bye Bye have a good day ")
                flage=false
                break
        }
    }
    else{
        console.log("please Enter valid choice")
        break
    }

}   
}
mainfunc()