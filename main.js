// Mario Kart Simulator 

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



    } else if (position >= 1 && position <=12) {
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

    } else {
        document.getElementById('results').innerHTML += "Position is not valid" ;
    }
}



