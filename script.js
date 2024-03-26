let milisekundy = 200;


let red = 0;
let green = 0;
let blue = 0;





function random_number(max){
    return Math.floor(Math.random()*max);

}




function changecolor(){
    red = random_number(255);
    green = random_number(255);
    blue = random_number(255);
    console.log(red,green,blue);
    document.getElementsByTagName("body")[0].style = `background-color: rgb(${red},${green},${blue})`;
    


}

function delay(kolko,pocet){
    setTimeout(function(){
        changecolor();
        console.log(`cakam, teraz robim ${pocet}ty ukon`);
    },kolko*pocet)
}


var input = document.getElementById("pocetopakovani");
var cakanie = document.getElementById("cakanie");

function changecolordelayed(){
    if (input =undefined){
    for(let i =1; i<10;i++){
        delay(milisekundy,i)
    }
    
    }
    else{
    for(let g =1; g<input;g++){
        delay(milisekundy,i)
    }
    }
}
