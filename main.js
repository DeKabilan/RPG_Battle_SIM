
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms-1000));
}

let slimehealth = 100;
console.log(slimehealth)

let playerhealth = 100;
console.log(playerhealth)


function showtext(){
    sleep(0).then(() => document.getElementById("text").style.display = "block"); 
}
function hidetext(){
    sleep(0).then(() => document.getElementById("text").style.display = "none"); 
}

function hideattack(){
    sleep(0).then(() => document.getElementById("attack").style.display = "none"); 
    sleep(0).then(() => document.getElementById("defend").style.display = "none"); 
}
function showattack(){
    sleep(0).then(() => document.getElementById("attack").style.display = "block"); 
    sleep(0).then(() => document.getElementById("defend").style.display = "block"); 
}
function showfight(){
    hideattack()
    sleep(0).then(() => document.getElementById("fight").style.display = "block"); 
    sleep(0).then(() => document.getElementById("run").style.display = "block"); 
}
function hidefight(){
    hideattack()
    sleep(0).then(() => document.getElementById("fight").style.display = "none"); 
    sleep(0).then(() => document.getElementById("run").style.display = "none"); 
}

function intro(){
    sleep(2000).then(() => document.getElementById("text").innerText = "This is an Experimental RPG Battle Simulator Project");
    sleep(2000).then(() => document.getElementById("slime").style.opacity = "0%");
    sleep(5000).then(() => document.getElementById("text").innerText = "Lets start with a simple battle");
    sleep(7500).then(() => document.getElementById("text").innerText = "A wild Slime appeared!");
    sleep(7500).then(() => showslime());
    sleep(11000).then(() => document.getElementById("text").style.display = "none"); 
    sleep(12000).then(() => document.getElementById("fight").style.display = "block"); 
    sleep(12000).then(() => document.getElementById("run").style.display = "block"); 
}



function fight(){
    sleep(0).then(() => document.getElementById("fight").style.display = "none"); 
    sleep(0).then(() => document.getElementById("run").style.display = "none"); 
    showattack()
}

function attack(){
    sleep(0).then(() => damagecalc());  
}

function heal(){
    sleep(0).then(() => healcalc());  
}

function random(num1,num2){
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

function damagecalc(){
    let damages = random(20,25)
    slimehealth=slimehealth-damages
    console.log(slimehealth)
    hideattack()
    hiteffect()
    sleep(1500).then(() => document.getElementById("text").innerText = "The Slime Took "+damages+" Damage");  
    sleep(1500).then(() => showtext());
    sleep(3500).then(() => hidetext());
    if (slimehealth<0){   
        sleep(1000).then(() => endslime()); 
    }
    else {
        sleep(3500).then(() => endturnplayer());       
    }
    return slimehealth      
}
function healcalc(){
    let damages = random(30,40)
    playerhealth=playerhealth+damages
    console.log(playerhealth)
    hideattack()
    sleep(1500).then(() => document.getElementById("text").innerText = "You Healed "+damages+" Health Points");  
    sleep(1500).then(() => showtext());
    sleep(3500).then(() => hidetext());

    return playerhealth   
}

function damagecalcplayer(){
    let damage = random(10,15)
    playerhealth=playerhealth-damage
    console.log(playerhealth)
    hideattack()
    sleep(1500).then(() => document.getElementById("text").innerText = "You Took "+damage+" Damage");  
    sleep(1500).then(() => showtext());
    sleep(3500).then(() => hidetext());
    if (playerhealth<0){   
        sleep(1000).then(() => endplayer()); 
    }
    else {
        sleep(3500).then(() => endturnslime());       
    }

    return playerhealth
}

function endturnplayer(){
    sleep(500).then(() => document.getElementById("text").innerText = "End Turn");
    sleep(500).then(() =>showtext());
    sleep(2000).then(() => hidetext());
    sleep(2500).then(() => damagecalcplayer());
}

function endturnslime(){
    sleep(500).then(() => document.getElementById("text").innerText = "End Turn");
    sleep(500).then(() =>showtext());
    sleep(2000).then(() => hidetext());
    sleep(2500).then(() => showfight());

}



function hiteffect(){
    sleep(0).then(() =>document.getElementById("hit").src="assets/noimage.gif");
    sleep(0).then(() =>document.getElementById("hit").src="assets/hit.gif");
    sleep(0).then(() =>document.getElementById("hit").style.display="block");
    sleep(1350).then(() =>document.getElementById("hit").style.display="none");
    
}



function run(){
    hideattack()
    hidefight()
    hidetext()
    sleep(2000).then(() => showtext())
    sleep(2000).then(() => document.getElementById("text").innerText = "You can't Run Away Now!"); 
    sleep(4000).then(() => endturnplayer()); 
}

function endplayer(){
    hideattack();
    hidefight();
    hidetext();
    sleep(2000).then(() => showtext());
    sleep(2000).then(() => document.getElementById("text").innerText = "You Lost!"); ;
}
function endslime(){
    hideattack();
    sleep(1000).then(() => hidetext());
    sleep(3500).then(() => showtext());
    sleep(3500).then(() => hideslime());
}

function hideslime(){   
    sleep(1300).then(() => document.getElementById("slime").style.opacity = "100%");
    sleep(1600).then(() => document.getElementById("slime").style.opacity = "80%");
    sleep(1900).then(() => document.getElementById("slime").style.opacity = "60%");
    sleep(2100).then(() => document.getElementById("slime").style.opacity = "40%");
    sleep(2400).then(() => document.getElementById("slime").style.opacity = "20%");
    sleep(2700).then(() => document.getElementById("slime").style.opacity = "0%");
    sleep(3000).then(() => document.getElementById("text").innerText = "You Won!"); 
}
function showslime(){   
    sleep(1000).then(() => document.getElementById("slime").style.opacity = "0%");
    sleep(1300).then(() => document.getElementById("slime").style.opacity = "20%");
    sleep(1600).then(() => document.getElementById("slime").style.opacity = "40%");
    sleep(1900).then(() => document.getElementById("slime").style.opacity = "60%");
    sleep(2100).then(() => document.getElementById("slime").style.opacity = "80%");
    sleep(2400).then(() => document.getElementById("slime").style.opacity = "100%");

}