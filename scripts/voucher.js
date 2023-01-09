
let balance=document.createElement("p")
balance.id="wallet_balance"

let phtml=document.createElement("a")
phtml.href="purchase.html"
phtml.innerHTML="Purchase"
document.querySelector("body").append(balance,phtml)


const voucher= async()=> {
    const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
    try {
let res= await fetch(url);
let data=await res.json();
console.log(data[0].vouchers);
appendVoucher(data[0].vouchers)
    }catch(error){
        console.log(error);
    }
}
voucher();

let voucherDiv=document.createElement("div");
voucherDiv.id="voucher_list"
document.querySelector("body").append(voucherDiv);


// For append vouchers
const appendVoucher = async(data)=> {
data.forEach((ele)=>{
    let box=document.createElement("div");
    box.className="voucher"

    let img=document.createElement("img");
    img.src=ele.image

    let name=document.createElement("p")
    name.innerHTML=ele.name;

    let price=document.createElement("p");
    price.innerHTML=ele.price;

    let btn=document.createElement("button");
    btn.innerHTML="BUY"
    btn.className="buy_voucher"

   let pdata=JSON.parse(localStorage.getItem("purchase")) || [];
    btn.addEventListener("click",()=>{
        
        let udata= JSON.parse(localStorage.getItem("user"))
        let pr=Number(ele.price);
        let wallet=Number(udata.wallet);
        console.log(pr,wallet)
        if(pr<=wallet){
          udata.wallet=wallet-pr;
          console.log(udata)
            pdata.push(ele)
            localStorage.setItem("purchase",JSON.stringify(pdata))
            localStorage.setItem("user",JSON.stringify(udata))
            uwallet();
            // alert("Hurray! purchase successful")
        }else{
            alert("Sorry! insufficient balance")
            return false;
        }
    
    })

    box.append(img,name,price,btn);
document.querySelector("#voucher_list").append(box);
})
}
//  For wallet_balance
const uwallet=()=>{
let user_wallet=JSON.parse(localStorage.getItem("user"))
let view=document.querySelector("#wallet_balance");
view.innerHTML=user_wallet.wallet;
}
uwallet();





