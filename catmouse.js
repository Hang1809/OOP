class Rat {
    constructor(name, weight, speed) {
      this.name = name;
      this.weight = weight;
      this.speed = speed;
      this.isDead = false;
      this.speak = function () {
        console.log(`chit, chit`);
      };
    }
  }
  class Cat {
    constructor(name, weight, speed) {
      this.name = name;
      this.weight = weight;
      this.speed = speed;
      this.speak = function () {
        console.log(`meo, meo`);
      };
    }
    canCatchMouse(mouse) {
      if (this.speed > mouse.speed) {
        console.log(`${this.name} can catch ${mouse.name}.`);
        return true;
      } else {
        console.log(`${this.name} can't catch ${mouse.name}.`);
        return false;
      }
    }
    eat(mouse) {
      if (this.canCatchMouse(mouse) && mouse.isDead === false) {
        this.weight += mouse.weight;
        mouse.isDead = true;
        mouse.weight = 0;
        console.log(`${this.name}  eat ${mouse.name} successful`);
      } else {
        console.log(`${this.name} can't eat ${mouse.name} `);
      }
    }
  }
  var Tom = new Cat("tom", 10, 12);
  var Jerry = new Rat("jerry", 3, 10);
  console.log(Tom);
  console.log(Jerry);
  console.log(Tom.canCatchMouse(Jerry));
  Tom.eat(Jerry);
  console.log(Tom.weight);