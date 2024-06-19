
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var elemc = document.querySelector(".elem-countainer")
var fixed = document.querySelector("#fixed-img")
elemc.addEventListener("mouseenter",function(){
    fixed.style.display ="block"
})
elemc.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})
var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })
})
// var elems =document.querySelectorAll(".elem")
// elems.forEach(function(e)){(
//     e.addEventListener("mouseenter",function(){
//     var image = e.getAttribute("data-image")
// fixed.style.backgroundimage =  `url(${image})`
//     })
// })
