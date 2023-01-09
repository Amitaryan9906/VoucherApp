 


let balance=document.createElement("h3")
balance.id="balance"
document.querySelector("body").append(balance)


let voucherDiv=document.createElement("div");
voucherDiv.id="purchased_vouchers"
document.querySelector("body").append(voucherDiv);
let pdata=JSON.parse(localStorage.getItem("purchase"));


// For append vouchers
const appendVoucher = (data)=> {
data.forEach((ele)=>{
    let box=document.createElement("div");
    box.className="voucher"

    let img=document.createElement("img");
    img.src=ele.image

    let name=document.createElement("p")
    name.innerHTML=ele.name;

    let price=document.createElement("p");
    price.innerHTML=ele.price;

 

    box.append(img,name,price);
document.querySelector("#purchased_vouchers").append(box);
})
}
appendVoucher(pdata)

const wallet=()=>{
    let user_wallet=JSON.parse(localStorage.getItem("user"))
    let view=document.querySelector("#balance");
    view.innerHTML=user_wallet.wallet;
    }
    wallet();