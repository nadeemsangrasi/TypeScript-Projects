var addItems = function (array) {
    var itemName = prompt("Enter item name which you want to add");
    var quantanty = prompt("Enter quantanty");
    var setPrice = prompt("Enter price");
    if (quantanty !== null && setPrice !== null) {
        var quant = parseInt(quantanty);
        var price = parseInt(setPrice);
        array.push({ itemName: itemName, Quantanty: quant, price: price });
        confirm("Item added successfully\nItem: " + itemName + "\nQuantanty: " + quant + "\nPrice: " + price);
        console.log("Item added successfully\nItem: " + itemName + "\nQuantanty: " + quant + "\nPrice: " + price);
    }
};
var getBill = function (array) {
    var nameItem = prompt("Enter your item name which  you want");
    var quantantyYouWant = prompt("Enter Quantanty you want");
    var payPrice = prompt("Enter pay bill");
    if (quantantyYouWant !== null && payPrice !== null) {
        if (array.length !== 0) {
            var quantInNum = parseInt(quantantyYouWant);
            var payPriceNum = parseInt(payPrice);
            for (var i = 0; i < array.length; i++) {
                if (nameItem === array[i].itemName) {
                    var bill = array[i].price * quantInNum;
                    if (payPriceNum === bill) {
                        array[i].Quantanty -= quantInNum;
                        confirm("Thank you for purchassing\nYour item is " + array[i].itemName + "\nYour total bill is " + bill);
                        console.log("Thank you for purchassing\nYour item is " + array[i].itemName + "\nYour total bill is " + bill);
                    }
                }
            }
        }
        else {
            confirm("Please first add items in list");
            console.log("Please first add items in list");
        }
    }
    else {
        confirm("input is null");
        console.log("input is null");
    }
};
var updateItem = function (array) {
    var itemToUpdate = prompt("Enter item name to update");
    var priceToUpdate = prompt("Enter price to update");
    var quantToUpdate = prompt("Enter quantanty to update");
    if (priceToUpdate !== null && quantToUpdate !== null) {
        var updatePrice = Number(priceToUpdate);
        var updateQuant = Number(quantToUpdate);
        for (var i = 0; i < array.length; i++) {
            if (itemToUpdate === array[i].itemName && updatePrice === array[i].price && updateQuant === array[i].Quantanty) {
                var newItemName = prompt("Enter new Item name");
                var newPrice = prompt("Enter new Price");
                var newQuant = prompt("Enter new Quantanty");
                if (newQuant !== null && newPrice !== null) {
                    array[i].itemName = newItemName;
                    array[i].price = Number(newPrice);
                    array[i].Quantanty = Number(newQuant);
                }
            }
        }
    }
    else {
        confirm("input is null");
        console.log("input is null");
    }
};
var deletItem = function (array) {
    var nameItemToDelet = prompt("Enter your name to delet item");
    for (var i = 0; i < array.length; i++) {
        if (nameItemToDelet === array[i].itemName) {
            confirm("Item deleted successfully\nItem name is:".concat(array[i].itemName, "\nItem price:").concat(array[i].price, "\nItem quantanty:").concat(array[i].Quantanty));
            console.log("Item deleted successfully\nItem name is:".concat(array[i].itemName, "\nItem price:").concat(array[i].price, "\nItem quantanty:").concat(array[i].Quantanty));
            array.splice(i, 1);
        }
    }
};
function showItem(array) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        console.log(item);
    }
}
var mainfunc = function () {
    var list = [];
    var flage = true;
    while (flage) {
        console.log("Welcome to my Grocery Store");
        console.log("Choose options below");
        console.log("1 Add items");
        console.log("2 Buy item and get bill");
        console.log("3 Update items");
        console.log("4 Delet items");
        console.log("5 Show items");
        console.log("6 Exit");
        var choice = prompt("Enter your option");
        if (choice != null) {
            var choosedNum = parseInt(choice);
            switch (choosedNum) {
                case 1:
                    addItems(list);
                    break;
                case 2:
                    getBill(list);
                    break;
                case 3:
                    updateItem(list);
                    break;
                case 4:
                    deletItem(list);
                    break;
                case 5:
                    showItem(list);
                    break;
                case 6:
                    console.log("Bye Bye have a good day ");
                    flage = false;
                    break;
            }
        }
        else {
            console.log("please Enter valid choice");
            break;
        }
    }
};
mainfunc();
