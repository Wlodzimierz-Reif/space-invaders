class Ship {
    constructor(id) {
        this.isActive = true;
        this.id = id;
    }
    disableShip() {
        this.isActive = false;
    }
}

class MotherShip extends Ship{
    constructor(id) {
        super(id);
        this.hp = 100;
    }
    receiveHit() { 
        this.hp -= 9;
        if(this.hp <= 0) {endGame()}
    }
}

class Attacker extends Ship {
    constructor(id) {
        super(id);
        this.hp = 45;
    }
    receiveHit() {
        this.hp -= 12;
        if(this.hp <= 0) 
            {this.hp = 0; 
            this.disableShip();
            }
    }
}

class Defender extends Ship {
    constructor(id) {
        super(id);
        this.hp = 80;
    }
    receiveHit() {
        this.hp -= 10;
        if(this.hp <= 0) {this.hp = 0; this.disableShip();}
    }
}



const endGame = () => {
    shipFleet.map(ship => {
        ship.hp = 0;
        return ship;
    });
    alert("We are safe!!!");
    console.log(shipFleet.forEach(ship => console.log(ship.hp)));   
}




let motherShip = new MotherShip(0);
document.getElementById("ships").innerHTML += `<div><p>mother ship</p><p id="0">HP: ${motherShip.hp}</p></div>` 

const shipFleet = [motherShip];

for(let i = 1; i <= 8; i++) {
    const attacker = new Attacker(i);
    shipFleet.push(attacker);
    document.getElementById("ships").innerHTML += `<div><p>attacker${i}</p><p id="${i}">HP: ${attacker.hp}</p></div>` 
}
for(let i = 1; i <= 5; i++) {
    const defender = new Defender(i+8);
    shipFleet.push(defender);
    document.getElementById("ships").innerHTML += `<div><p>defender${i}</p><p id="${i+8}">HP: ${defender.hp}</p></div>` 
}
console.log(shipFleet);




const aimAtShip = () => Math.floor(Math.random() * shipFleet.length);

const fire = () => {

    const shipIndex = aimAtShip();
    const selectedShip = shipFleet[shipIndex];
    
    console.log(shipIndex);
    console.log(selectedShip.hp);
    
    selectedShip.receiveHit();
    
    console.log(selectedShip.hp);
    
    if(selectedShip.isActive === false) shipFleet.splice(shipIndex, 1);
    if(shipFleet.length < 1) {endGame()};
    
    console.log(shipFleet); 
}



