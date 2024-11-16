let totalPrice = 0;
let total = 0;
let discount = 0;
const productList_Element = document.getElementById("product-list");
const totalPrice_Element = document.getElementById("total-price");
const applyBtn_Element = document.getElementById("apply-Btn");
const makePurchaseBtn_Element = document.getElementById("Make-Purchase");
const couponInput_Element = document.getElementById("coupon-input");
const discount_Element = document.getElementById("discount");
const total_Element = document.getElementById("total");


function getPrice(text) {
    return parseFloat(parseFloat(text.children[1].children[2].children[0].innerText).toFixed(2));
}

function getProductName(target) {
    return target.children[1].children[1].innerText;
}

// function updater(element, Who, value) {
//     // Who += value;
//     // console.log(totalPrice);

//     element.innerText = value;
//     // return totalPrice;
// }

function totalPriceUpdate(target) {
    let productPrice = getPrice(target);

    totalPrice += productPrice;
    // console.log(totalPrice);

    totalPrice_Element.innerText = totalPrice;
    // return totalPrice;

    total_Element.innerText = totalPrice;

    // updater(totalPrice_Element,totalPrice,productPrice);
}


function addProduct(target) {
    let ProductName = getProductName(target);
    // console.log(ProductName);

    const newProduct = document.createElement("li");
    newProduct.innerText = ProductName;
    newProduct.classList.add("text-black");
    newProduct.classList.add("font-medium");
    newProduct.classList.add("text-2xl");
    // newProduct.className("");
    // document.getElementsByTagName(newProduct).
    productList_Element.appendChild(newProduct);
}

function get2DecimalNumber(digit) {
    return parseFloat(digit.toFixed(2));
}

function couponApplyBtn(target) {
    console.log(target.parentNode);
    const couponCode = couponInput_Element.value;
    if (couponCode === "SELL200") {
        discount = get2DecimalNumber(totalPrice * 0.2);
        total = get2DecimalNumber(totalPrice - discount);
    }
    else {
        alert('Invalid Coupon Code');
        return;
    }
    discount_Element.innerText = discount;
    total_Element.innerText = total;
}

function buy(target) {
    totalPriceUpdate(target);
    addProduct(target);

    if (totalPrice > 0) {
        makePurchaseBtn_Element.removeAttribute("disabled");
    }

    if (totalPrice >= 200) {
        applyBtn_Element.removeAttribute("disabled");
    }
}

function goHome(target) {
    // console.log(target);
    window.location = "index.html";
}



// function copyToClipboard(value) {
//     navigator.clipboard.writeText(value)
// }

// const SELL200_Element = document.getElementById("SELL200");

// SELL200_Element.addEventListener("click", function copyToClipboard(){})
