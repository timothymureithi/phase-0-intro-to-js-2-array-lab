// Write your solution here!


var cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
  return cats.push(name)
}

function removeFirstCat(){
    return cats.slice(1)
}

function removeLastCat(){
    return cats.splice(1)
}

function removeLastCat(){
    return cats.slice(0, cats.length-1)
    
}

function prependCat(name){
    return [name, ...cats]
}

function appendCat(name){
    return [...cats, name]
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}


