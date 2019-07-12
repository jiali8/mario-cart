// Mario Kart Simulator 
'use scrict';

// Global Variables 
let numBanana= 0;
let numShell = 0;
let numStar = 0;
let numMushroom = 0;
let numBullet = 0; 

// Event Listeners 
document.getElementById('itemBtn').addEventListener('click',getItem);

// Event Functions
function getItem () {

    let position = document.getElementById('input').value;

    
    if (position >= 1 && position <= 6) {  // (if position is between 1 and 6) 
        //generate a random number 
        let randomItem = Math.random(); 
        console.log(randomItem);
    
        //simulate results
        if (randomItem < 0.45) {
            // 45% chance of getting a banana
            console.log ('banana');
            numBanana++;
            document.getElementById('banana').innerHTML = numBanana;
            document.getElementById('results').innerHTML += '<img src="images/banana.png">';
            
        } else if (randomItem < 0.8) { 
            // 35% chance of getting a green shell
            console.log('shell');
            numShell++;
            document.getElementById('shell').innerHTML = numShell;
            document.getElementById('results').innerHTML += '<img src="images/greenshell.png">';
            
        } else if (randomItem < 0.95) { 
            // 15% chance of getting a star
            console.log('star');
            numStar++;
            document.getElementById('star').innerHTML = numStar;
            document.getElementById('results').innerHTML += '<img src="images/star.png">';
            
        } else if (randomItem < .99) { 
            // 4% chance of getting a mushroom
            console.log('mushroom');
            numMushroom++;
            document.getElementById('mushroom').innerHTML = numMushroom;
            document.getElementById('results').innerHTML += '<img src="images/goldenmushroom.png">';
            
        } else  { 
            // 1% chance of getting a bullet bill
            console.log('bullet bill');
            numBullet++;
            document.getElementById('bullet').innerHTML = numBullet;
            document.getElementById('results').innerHTML += '<img src="images/bulletbill.png">';
        }



    } else if (position >= 1 && position <=12) { //if position is between 7 and 12
        //generate a random number 
        let randomItem = Math.random(); 
        console.log(randomItem);
    
        //simulate results
        if (randomItem < 0.05) {
            // 5% chance of getting a banana
            console.log ('banana');
            numBanana++;
            document.getElementById('banana').innerHTML = numBanana;
            document.getElementById('results').innerHTML += '<img src="images/banana.png">';

        } else if (randomItem < 0.1) { 
            // 5% chance of getting a green shell
            console.log('shell');
            numShell++;
            document.getElementById('shell').innerHTML = numShell;
            document.getElementById('results').innerHTML += '<img src="images/greenshell.png">';

        } else if (randomItem < 0.35) { 
            // 25% chance of getting a star
            console.log('star');
            numStar++;
            document.getElementById('star').innerHTML = numStar;
            document.getElementById('results').innerHTML += '<img src="images/star.png">';

        } else if (randomItem < .7) { 
            // 35% chance of getting a golden mushroom
            console.log('mushroom');
            numMushroom++;
            document.getElementById('mushroom').innerHTML = numMushroom;
            document.getElementById('results').innerHTML += '<img src="images/goldenmushroom.png">';

        } else { 
            // 30% chance of getting a banana
            console.log('bullet bill');
            numBullet++;
            document.getElementById('bullet').innerHTML = numBullet;
            document.getElementById('results').innerHTML += '<img src="images/bulletbill.png">';
        }

    } else { //if user enters an invalid position (ex. 0, position higher than 12) 
        document.getElementById('results').innerHTML += "Position is not valid" ;
    }
}



