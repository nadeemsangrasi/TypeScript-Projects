var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var openMenu = document.querySelector(".openMenu");
var icon = document.querySelector(".openMenu span i");
var sideBar = document.querySelector("#page-1 #part-2");
var isOpen = false;
openMenu.addEventListener("click", function () {
    if (isOpen == false) {
        openMenu.style.transition = "all ease 0.5s";
        sideBar.style.right = "-20%";
        icon.classList.replace("ri-menu-5-line", "ri-close-large-line");
        isOpen = true;
    }
    else {
        openMenu.style.transition = "all ease 0.5s";
        sideBar.style.right = "-200%";
        icon.classList.replace("ri-close-large-line", "ri-menu-5-line");
        isOpen = false;
    }
});
var url = "https://fakestoreapi.com/products";
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, priceArray, _i, data_1, cart, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    priceArray = [];
                    for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                        cart = data_1[_i];
                        priceArray.push(Math.floor(cart.price));
                    }
                    for (i = 0; i < priceArray.length; i++) {
                        data[i].price = priceArray[i];
                    }
                    addContent(data);
                    addCartsystem(data);
                    return [2 /*return*/];
            }
        });
    });
}
fetchData();
function addContent(carts) {
    var clutter = "";
    carts.forEach(function (elem) {
        clutter += "\n                <div class=\"cart cart-1\">\n<img src=\"".concat(elem.image, "\" alt=\"img\">\n<h3>").concat(elem.title, "</h3>\n<h2>$").concat(elem.price, "</h2>\n<button class=\"cartBtn\" >Add to cart</button>\n                </div>");
    });
    var cartContainer = document.querySelector("#part-1");
    cartContainer.innerHTML = clutter;
}
function addCartsystem(carts) {
    var carBtn = document.querySelectorAll(".cartBtn");
    var myCartCluter = "";
    var sum = 0;
    var count = 0;
    carBtn.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            myCartCluter += "\n      <div class=\"mylist\">\n       <img src=\"".concat(carts[i].image, "\" alt=\"img\">\n       <h3>").concat(carts[i].title, "</h3>\n       <p>$ ").concat(carts[i].price, "</p>\n       <button class=\"deletBtn\"><i class=\"ri-delete-bin-7-line\"></i></i></button>\n       </div>\n      ");
            count += 1;
            var countH1 = document.querySelector(".count h1");
            countH1.innerHTML = "<span><i class=\"ri-shopping-cart-fill\"></i> ".concat(count, "</span> ");
            sum += carts[i].price;
            var totalH1 = document.querySelector(".total h1");
            totalH1.innerHTML = "Total $".concat(sum);
            var myCartList = document.querySelector(".my-cart");
            myCartList.innerHTML = myCartCluter;
            var deletBtn = document.querySelectorAll(".deletBtn");
            var myList = document.querySelectorAll(".mylist");
            deletBtn.forEach(function (elem, n) {
                elem.addEventListener("click", function () {
                    myList[n].remove();
                    myCartCluter = myCartList.innerHTML;
                    var prevousElem = elem.previousElementSibling;
                    var deletVal = parseInt(prevousElem.innerHTML.split(" ")[1]);
                    sum -= deletVal;
                    var totalH1 = document.querySelector(".total h1");
                    totalH1.innerHTML = "Total $".concat(sum);
                    count -= 1;
                    var countH1 = document.querySelector(".count h1");
                    countH1.innerHTML = "<span><i class=\"ri-shopping-cart-fill\"></i> ".concat(count, "</span> ");
                });
            });
        });
    });
}
