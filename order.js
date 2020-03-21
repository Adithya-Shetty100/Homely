var t=document.querySelector("#select");
var t1=document.querySelector("#select1");
var t2=document.querySelector("#select2");
var tag=document.querySelector("#cart");
var num=0;

t.addEventListener("click",function(){
    prompt("Enter your address");
    alert("The order was placed successfully!!");
    num++;
    tag.innerHTML= ' <a  id="cart" href=""><i class="fas fa-cart-arrow-down"></i> Cart:'+ num +'</a>' ;
    
});

t1.addEventListener("click",function(){
    prompt("Enter your address");
    alert("The order was placed successfully!!");
    num++;
    tag.innerHTML= ' <a  id="cart" href=""><i class="fas fa-cart-arrow-down"></i> Cart:'+ num +'</a>' ;
});

t2.addEventListener("click",function(){
    prompt("Enter your address");
    alert("The order was placed successfully!!");
    num++;
    tag.innerHTML= ' <a  id="cart" href=""><i class="fas fa-cart-arrow-down"></i> Cart:'+ num +'</a>' ;
});