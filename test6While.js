function test6While(input) {
    let pass = input[0];
    let index = 1;
    let word = input[index];
    let wrongCounter = 0;

    while (word !== pass) {
        index++;
        wrongCounter++;
        word = input[index];
    }
    if (word === pass) {

    } if (wrongCounter >= 3) {
        console.log("You are Blocked!");
        console.log(`You try to put ${wrongCounter} times Wrong Password`);
    } else {
        console.log("Welcome!");
    }

}
test6While(["gosho", "Dragan", "Petkan", "gosho", "bezrabotna", "gosho", "kofti"])