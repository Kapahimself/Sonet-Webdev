let hbtn = document.querySelector("#Home");
let abtn = document.querySelector("#About");
let cbtn = document.querySelector("#Contact");

hbtn.addEventListener("click",changetext);
abtn.addEventListener("click",changetext);
cbtn.addEventListener("click",changetext);

let space = document.querySelector("#change-space");




function changetext(e) 
{
    console.log(e.target.id);
    for (let i = 0; i < space.children.length; i++) {
        const element = space.children[i];
        element.style.display = "none";
    }
    if (e.target.id === "Home") 
    {
        document.querySelector(".home-body").style.display = "block";
    }
    else if (e.target.id === "About") 
    {
        document.querySelector(".about-body").style.display = "block";
    }
    else if (e.target.id === "Contact") 
    {
        document.querySelector(".contact-body").style.display = "block";
    }
}

let nme = document.querySelector("#Name");
let email = document.querySelector("#Email");
let phone = document.querySelector("#Phone");

let btn = document.querySelector("#sbmitbtn");
function clicked(e) 
{
    if(nme.value=="" || email.value=="" || phone.value=="")
    {
        alert('Please fill the top three fields');      
    }
    const details=
    {
        name:nme.value,
        mail:email.value,
        phno:parseInt(phone.value)
    };
    let array_details = new Array();
    console.log(JSON.stringify(details));
    array_details.push(details);
}

btn.addEventListener("click",clicked);



