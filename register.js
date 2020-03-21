var t=document.querySelector(".sub");
var p=document.querySelector(".publish");
var a=document.querySelector("#adi");
var b=document.querySelector("#adi1");

t.addEventListener("click",function(){
    alert("You registered  successfully!!");
});

p.addEventListener("click",function(){
    a.innerHTML='<br/><textarea id= "adi" class="d-block" name="menu" cols="50" row="6" placeholder="Enter your menu...."></textarea>';
    b.innerHTML=' <br/><br/><p id="adi1"class="d-block">Price: <input type="number" name="price"></p> ';
});


