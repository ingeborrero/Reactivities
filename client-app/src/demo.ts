export interface Duck {
    name: String,
    numLegs: number,
    makeSound: (sound: String)=> void;
};

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: String) => console.log(sound)
};

const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
};

export const ducks = [duck1, duck2];

