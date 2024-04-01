type CartInfo = {
  image: string;
  title: string;
  price: number;
};
let openMenu = document.querySelector(".openMenu") as HTMLHeadingElement;
let icon = document.querySelector(".openMenu span i") as HTMLElement;
let sideBar = document.querySelector("#page-1 #part-2") as HTMLDivElement;
let isOpen = false;
openMenu.addEventListener("click", (): void => {
  if (isOpen == false) {
    openMenu.style.transition = "all ease 0.5s";
    sideBar.style.right = "-20%";
    icon.classList.replace("ri-menu-5-line", "ri-close-large-line");
    isOpen = true;
  } else {
    openMenu.style.transition = "all ease 0.5s";
    sideBar.style.right = "-200%";
    icon.classList.replace("ri-close-large-line", "ri-menu-5-line");
    isOpen = false;
  }
});

let url: string = "https://fakestoreapi.com/products";

async function fetchData() {
  let response = await fetch(url);
  let data: CartInfo[] = await response.json();
  // rounding the values of prices
  let priceArray: number[] = [];
  for (let cart of data) {
    priceArray.push(Math.floor(cart.price));
  }
  for (let i = 0; i < priceArray.length; i++) {
    data[i].price = priceArray[i];
  }
  addContent(data);
  addCartsystem(data);
}

fetchData();
function addContent(carts: CartInfo[]): void {
  let clutter: string = "";
  carts.forEach((elem) => {
    clutter += `
                <div class="cart cart-1">
<img src="${elem.image}" alt="img">
<h3>${elem.title}</h3>
<h2>$${elem.price}</h2>
<button class="cartBtn" >Add to cart</button>
                </div>`;
  });
  let cartContainer = document.querySelector("#part-1") as HTMLDivElement;
  cartContainer.innerHTML = clutter;
}

function addCartsystem(carts: CartInfo[]): void {
  let carBtn = document.querySelectorAll(
    ".cartBtn"
  ) as NodeListOf<HTMLButtonElement>;
  let myCartCluter: string = "";
  let sum: number = 0;
  let count: number = 0;
  carBtn.forEach((elem: HTMLButtonElement, i: number): void => {
    elem.addEventListener("click", function (): void {
      myCartCluter += `
      <div class="mylist">
       <img src="${carts[i].image}" alt="img">
       <h3>${carts[i].title}</h3>
       <p>$ ${carts[i].price}</p>
       <button class="deletBtn"><i class="ri-delete-bin-7-line"></i></i></button>
       </div>
      `;
      count += 1;
      let countH1 = document.querySelector(".count h1") as HTMLHeadElement;
      countH1.innerHTML = `<span><i class="ri-shopping-cart-fill"></i> ${count}</span> `;
      sum += carts[i].price;
      let totalH1 = document.querySelector(".total h1") as HTMLHeadElement;
      totalH1.innerHTML = `Total $${sum}`;
      let myCartList = document.querySelector(".my-cart") as HTMLDivElement;
      myCartList.innerHTML = myCartCluter;
      let deletBtn = document.querySelectorAll(
        ".deletBtn"
      ) as NodeListOf<HTMLButtonElement>;
      let myList = document.querySelectorAll(
        ".mylist"
      ) as NodeListOf<HTMLDivElement>;
      deletBtn.forEach((elem: HTMLButtonElement, n: number) => {
        elem.addEventListener("click", (): void => {
          myList[n].remove();
          myCartCluter = myCartList.innerHTML;
          let prevousElem = elem.previousElementSibling as Element;
          let deletVal = parseInt(prevousElem.innerHTML.split(" ")[1]);
          sum -= deletVal;
          let totalH1 = document.querySelector(".total h1") as HTMLHeadElement;
          totalH1.innerHTML = `Total $${sum}`;
          count -= 1;
          let countH1 = document.querySelector(".count h1") as HTMLHeadElement;
          countH1.innerHTML = `<span><i class="ri-shopping-cart-fill"></i> ${count}</span> `;
        });
      });
    });
  });
}
