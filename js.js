class Ship {
    constructor() {
        this.isActive = true;
    }
    disableShip() {
        this.isActive = false;
    }
}

class MotherShip extends Ship{
    constructor() {
        super();
        this.name = "Mother Ship";
        this.hp = 100;
    }
    receiveHit() { 
        this.hp -= 9;
        if(this.hp <= 0) {endGame()}
        };
}

class Attacker extends Ship {
    constructor() {
        super();
        this.name = "Defender";
        this.hp = 45;
    }
    receiveHit() {
        this.hp -= 12;
        if(this.hp <= 0) {
            this.hp = 0; 
            this.disableShip();
        }
    }
}

class Defender extends Ship {
    constructor() {
        super();
        this.hp = 80;
    }
    receiveHit() {
        this.hp -= 10;
        if(this.hp <= 0) {this.hp = 0; this.disableShip();}
    }
}

const motherShip = new MotherShip();
const attacker1, attacker2, attacker3, attacker4, attacker5, attacker6, attacker7, attacker8 = new Attacker();
const defender1, defender2, defender3, defender4, defender5 = new Defender();


