let form=document.createElement('form');
let name=document.createElement('input');
name.placeholder="name";
name.id="name";

let email=document.createElement('input');
email.placeholder="email";
email.id="email";

let address=document.createElement('input');
address.placeholder="address";
address.id="address"

let ammount=document.createElement('input');
ammount.placeholder="ammount";
ammount.id="ammount"

let btn=document.createElement('button');
btn.id="submit";
btn.innerText="Submit"
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let obj={
        name:form.name.value,
        email:form.email.value,
        address:form.address.value,
        wallet:form.ammount.value

    }
    console.log(obj)
    localStorage.setItem("user",JSON.stringify(obj))
})
form.append(name,email,address,ammount,btn);

document.querySelector("body").appendChild(form);

