// Mario Kart Simulator 
'use scrict'

// Global Variables 
let numBanana= 0;
let numShell = 0;
let numStar = 0;
let numMushroom = 0;
let numBullet = 0; 

// Event Listeners 
document.getElementById('itemBtn').addEventListener('click',getItem);
document.getElementById('clear').addEventListener('click', clearResults);
document.getElementById('plus10').addEventListener('click', plusTen);
document.getElementById('plus50').addEventListener('click', plusFifty);
document.getElementById('plus100').addEventListener('click', plusHundred);


// Event Functions
function getItem () {
    
    //get input value
    let position = document.getElementById('input').value;

    //test input variable and update the page 
    
    if (position >= 1 && position <= 6) { 
        //generate a random number 
        let randomItem = Math.random(); 
        console.log(randomItem);
    
        //simulate results
        if (randomItem < 0.45) {
            console.log ('banana');
            numBanana++;
            document.getElementById('banana').innerHTML = numBanana;
            document.getElementById('results').innerHTML += '<img src="images/banana.png">';

        } else if (randomItem < 0.8) { 
            console.log('shell');
            numShell++;
            document.getElementById('shell').innerHTML = numShell;
            document.getElementById('results').innerHTML += '<img src="images/greenshell.png">';

        } else if (randomItem < 0.95) { 
            console.log('star');
            numStar++;
            document.getElementById('star').innerHTML = numStar;
            document.getElementById('results').innerHTML += '<img src="images/star.png">';

        } else if (randomItem < .99) { 
            console.log('mushroom');
            numMushroom++;
            document.getElementById('mushroom').innerHTML = numMushroom;
            document.getElementById('results').innerHTML += '<img src="images/goldenmushroom.png">';

        } else  { 
            console.log('bullet bill');
            numBullet++;
            document.getElementById('bullet').innerHTML = numBullet;
            document.getElementById('results').innerHTML += '<img src="images/bulletbill.png">';
        }

    

    } else if (position >= 7 && position <=12) {
        //generate a random number 
        let randomItem = Math.random(); 
        console.log(randomItem);
    
        //simulate results
        if (randomItem < 0.05) {
            console.log ('banana');
            numBanana++;
            document.getElementById('banana').innerHTML = numBanana;
            document.getElementById('results').innerHTML += '<img src="images/banana.png">';

        } else if (randomItem < 0.1) { 
            console.log('shell');
            numShell++;
            document.getElementById('shell').innerHTML = numShell;
            document.getElementById('results').innerHTML += '<img src="images/greenshell.png">';

        } else if (randomItem < 0.35) { 
            console.log('star');
            numStar++;
            document.getElementById('star').innerHTML = numStar;
            document.getElementById('results').innerHTML += '<img src="images/star.png">';

        } else if (randomItem < .7) { 
            console.log('mushroom');
            numMushroom++;
            document.getElementById('mushroom').innerHTML = numMushroom;
            document.getElementById('results').innerHTML += '<img src="images/goldenmushroom.png">';

        } else { 
            console.log('bullet bill');
            numBullet++;
            document.getElementById('bullet').innerHTML = numBullet;
            document.getElementById('results').innerHTML += '<img src="images/bulletbill.png">';
        }

    } 

    //display total number of items 
    document.getElementById('total').innerHTML = numBanana + numShell + numStar + numMushroom + numBullet;

}

function clearResults() {
    document.getElementById('banana').innerHTML = "0";
    document.getElementById('shell').innerHTML = "0";
    document.getElementById('star').innerHTML = "0";
    document.getElementById('mushroom').innerHTML = "0";
    document.getElementById('bullet').innerHTML = "0";
    document.getElementById('total').innerHTML = "0";
    document.getElementById('results').innerHTML = ' ';
    
}

function plusTen () {
    for(let n = 0; n < 10; n++) {
        getItem();
    }
} 

function plusFifty () {
    for(let n = 0; n < 50; n++) {
        getItem();
    }
} 

