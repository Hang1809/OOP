class Apple {
    constructor(quality) {
        this.weight = 10;
        this.quality = quality;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }
    
    speak() {
        console.log(`${this.name}: 'It's me, ${this.name}. I've come to eat all the apples.'`)
    }

    checkApple(apple) {
        if (apple.quality == 'good') {
            console.log(`${this.name}: 'This apple looks ${apple.quality}. It's mine.'`)
        }else if (apple.quality == 'bad') {
            console.log(`${this.name}: 'This apple looks ${apple.quality} but food is food though.'`)
        }else if (apple.quality == 'rotten') {
            console.log(`${this.name}: 'This apple is ${apple.quality}. Feed it to the pigs.'`)
        }else {
            console.log(`${this.name}: 'I cannot identify this apple.'`)
        }
    }

    eatApple(apple) {
        if (apple.weight > 0) {
            apple.weight -= 1;
            if (apple.quality == 'good') {
                console.log(`${this.name}: 'Yummy!'`);
                this.weight += 1;
            }else if (apple.quality == 'bad') {
                console.log(`${this.name}: 'As long as it's ediable!'`);
                this.weight += 1;
            }else if (apple.quality == 'rotten') {
                console.log(`${this.name}: *blarghhh`);
                this.weight -= 1;
            }else {
                console.log(`${this.name}: 'It has a strange taste.'`);
                this.weight += Math.round(Math.random()*(2+2)-2);
            }
        }else {
            console.log(`${this.name}: 'This much won't fill my stomach.'`);
        }

    }
}

let Adam = new Human('Adam', 'male', 70);
let Eva = new Human('Eva', 'female', 55);

let sampleApple = new Apple('good');

Eva.speak();
Eva.checkApple(sampleApple);

for (let i = sampleApple.weight; i >= 0; i--) {
    Eva.eatApple(sampleApple);
    console.log(`Eva's weight: ${Eva.weight}`);
    console.log(`Apple's weight: ${sampleApple.weight}`)
}
