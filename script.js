let links=document.querySelectorAll(".links");

links.forEach(function(link){
link.addEventListener("mouseover",function(){link.style.color="Teal";
    if(link.firstElementChild && link.firstElementChild.tagName==="IMG"){
        link.firstElementChild.setAttribute("src","./image.png")
    }
    if(link.parentElement.className=="dropdown"){link.nextElementSibling.style.display="block";}
})
link.addEventListener("mouseleave",function(){link.style.color="white";
    if(link.firstElementChild && link.firstElementChild.tagName==="IMG"){
        link.firstElementChild.setAttribute("src","./image2.png")
    }
   
})
});
let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(dropdown){
    dropdown.addEventListener("mouseenter", function(){
        let link = dropdown.querySelector(".links");
        link.style.color = "teal";
        if(link.firstElementChild &&link.firstElementChild.tagName === "IMG"){

            link.firstElementChild.setAttribute("src","./image.png");}

        link.nextElementSibling.style.display = "block";

    });
    
    dropdown.addEventListener("mouseleave", function(){
        let link = dropdown.querySelector(".links");
        link.style.color = "white";
        if(link.firstElementChild &&
           link.firstElementChild.tagName === "IMG"){
            link.firstElementChild.setAttribute( "src", "./image2.png");}
        link.nextElementSibling.style.display = "none";});

});

searchbar=document.querySelector("#searchbar");
searchicon=document.querySelector("#searchicon");

searchicon.addEventListener("click",function(){
if(searchbar.style.display === "block"){searchbar.style.display = "none";}

else{searchbar.style.display = "block";}

});





const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }

    });

});

observer.observe(document.getElementById("firstheading"));
observer.observe(document.querySelector(".h"));
observer.observe(document.querySelector(".main-work-process"));
observer.observe(document.querySelector(".services-main-heading"));
observer.observe(document.querySelector(".main-case-study"));
observer.observe(document.querySelector(".price-heading"));




const container = document.querySelector("#img");
const img = container.querySelector("img");

container.addEventListener("mousemove", function(e){

    let x = e.offsetX / container.offsetWidth;
    let y = e.offsetY / container.offsetHeight;

    img.style.transform =
        `translate(${-x * 40}px, ${-y * 40}px)`;
});

const checkbox = document.querySelector(".switch input");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");

checkbox.addEventListener("change", () => {

    if(checkbox.checked){
        monthly.style.color = "#a8b0c0";
        yearly.style.color = "#12978f";
    }
    else{
        monthly.style.color = "#12978f";
        yearly.style.color = "#a8b0c0";
    }

});