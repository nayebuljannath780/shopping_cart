const btn = document.getElementById("loginBtn");
btn.addEventListener('click', function(){
    const loginPage = document.getElementById("login-page");
    loginPage.style.display = "none";
    const body = document.getElementById("shopping_area");
    body.style.display = "block";
})
function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '_count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotalPrice = 0;
    if (product == 'phone') {
        productTotalPrice = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotalPrice = productNewCount * 59;
    }
    document.getElementById(product + '_total').innerText = '$' + productTotalPrice;
    calculateTotal();
}

function calculateTotal() {
    const phoneInput = getInputValue('phone');
    const caseInput = getInputValue('case');

    const subTotal = phoneInput * 1219 + caseInput * 59;
    document.getElementById("sub-total").innerText = subTotal;

    const tax = Math.round(subTotal / 10);
    document.getElementById("tax-count").innerText = tax;

    const total = subTotal + tax;
    document.getElementById('total').innerText = total;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '_count');
    const productCount = parseInt(productInput.value);
    return productCount;
}


// broad way
// document.getElementById('phone_increase').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone_count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotalPrice = phoneNewCount * 1219;
//     document.getElementById('phone_price').innerText = '$' + phoneTotalPrice;
// })
// document.getElementById('phone_decrease').addEventListener('click', function(){
//     const phoneInput = document.getElementById('phone_count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotalPrice = phoneNewCount * 1219;
//     document.getElementById('phone_price').innerText = '$' + phoneTotalPrice;
// })



// document.getElementById('case_increase').addEventListener('click', function () {
//     handleProductChange(true);
// })

// document.getElementById('case_decrease').addEventListener('click', function () {
//    handleProductChange(false);
// })


// document.getElementById('case_increase').addEventListener('click', function () {
//     const caseInput = document.getElementById('case_count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
//     const caseTotalPrice = caseNewCount * 59;
//     document.getElementById('case_total_price').innerText = '$' + caseTotalPrice;
// })

// document.getElementById('case_decrease').addEventListener('click', function () {
//     const caseInput = document.getElementById('case_count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotalPrice = caseNewCount * 59;
//     document.getElementById('case_total_price').innerText = '$' + caseTotalPrice;
// })



// document.getElementById('phone_increase').addEventListener('click', function () {
//     handlePhoneChange(true);
// })
// document.getElementById('phone_decrease').addEventListener('click', function () {
//     handlePhoneChange(false);
// })
// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById('phone_count');
//     const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     let phoneNewCount = phoneCount;
//     if (isIncrease == true) {
//         phoneNewCount = phoneCount + 1;
//     }
//     if (isIncrease == false && phoneNewCount > 0) {
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotalPrice = phoneNewCount * 1219;
//     document.getElementById('phone_price').innerText = '$' + phoneTotalPrice;
// }
