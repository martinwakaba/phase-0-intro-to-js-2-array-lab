// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){

    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function removeLastCat(){
    const copyOfcats = [...cats];

    copyOfcats.pop();

    return copyOfcats;
}

function removeFirstCat(){
    const copyOfcats = [...cats];

    copyOfcats.shift();

    return copyOfcats;
}

function destructivelyRemoveFirstCat(){
    cats.splice(0,1);
    
}

function destructivelyRemoveLastCat(){
    cats.splice(cats.length - 1);
    
}

function appendCat(name){
    const newCats = [...cats];
    newCats.splice(newCats.length, 0, "Broom");
    return newCats;
}

function prependCat(name){
    const newCats = [...cats];
    newCats.splice(0, 0, "Arnold");
    return newCats;
}