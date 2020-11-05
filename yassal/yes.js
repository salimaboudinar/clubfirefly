let btnlike=document.getElementsByClassName("like-btn");
let like=document.getElementsByClassName("like");
console.log(btnlike)
for(let i=0;i<btnlike.length;i++){

    btnlike[i].addEventListener("click",function(){

        if (like[i].style.fill=="black"){
            console.log("red")
            like[i].style.fill="red";

        }else{
            like[i].style.fill="black";
        }
    }
    )
}




let btnPlus=document.getElementsByClassName("plus-btn")
let qte=document.getElementsByClassName("quantity1")

for (let i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click",function(){
        console.log("Hello from plus")
        qte[i].value++
        totale()
   } );
}

let btnMoin=document.getElementsByClassName("minus-btn")


for (let i=0;i<btnPlus.length;i++){
    btnMoin[i].addEventListener("click",function(){
        if(qte[i].value>0)
        
        qte[i].value--
        totale()
   } );
}
function totale(){
    let qte=document.getElementsByClassName("quantity1")
    console.log(qte[0].value     )
    let price=document.getElementsByClassName("total-price")
    let somme=0
    for(let i=0; i<price.length;i++){
        somme+=     price[i].innerHTML*qte[i].value
    }
    document.getElementById("total").innerHTML=somme
}

  window.onload = function () {
    var horse1 = document.getElementById("horse1");
    var horse2 = document.getElementById("horse2");
    var info = document.getElementById("info");
    }
    function startRace(){
    document.getElementById("board").style.background = "blue";
    document.getElementById("startButton").disabled = true;
    var position1= 0;
    var position2= 0;
    var t = setInterval(run, 50);
    var circuitLength = window.innerWidth - 80;
     function run(){
            if ((position1>(circuitLength))||(position2>(circuitLength))){
                clearInterval(t);
                document.getElementById("startButton").disabled = false;
                if (horse1.offsetLeft>horse2.offsetLeft){
                    document.getElementById("board").style.background = "green";
                    info.innerHTML = "Race finished.<br> You won the race !!";
                }
                else {
                document.getElementById("board").style.background = "red";
                    info.innerHTML = "Race finished.<br> The computer won";
                }
            }
            else {
                position1 += Math.floor((Math.random() * 20 ) + 1);
                position2 += Math.floor((Math.random() * 20) + 1);
                horse1.style.left = position1 + "px";
                horse2.style.left = position2 + "px";
                if (horse1.offsetLeft>=horse2.offsetLeft){
                    info.innerHTML = "You are ahead";
                }
                else {
                    info.innerHTML = "The computer is ahead";
                }
                
            }
            
        
        }
    
    }
       
    


 