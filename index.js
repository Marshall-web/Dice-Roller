// function Sum (...numbers){
//     let result =0;
//     for(let number of numbers ){
//       result +=number
//     }
//     return result
// }
// function Average(...numbers){
//     let result =0
//     let ave;
//     for(let number of numbers){
//         result+=number
//         ave =result/numbers.length
//     }
//     return ave
// }

// console.log(Average(1,2,4,5))

// function combineString(...strings){
//     return strings.join(" ")
// }

// const fullname= combineString("Dauda","Marshall","Nurrideen")

// console.log(fullname)

function rollDice() {
    const diceCount = parseInt(document.getElementById('dice-count').value);
    const diceResult = document.getElementById('dice-result');
    const diceImages = document.getElementById('dice-images');
    const values = [];
    const images = [];

    for(let i=0; i<diceCount; i++){
        const value = Math.floor(Math.random()*6)+1
        values.push(value)
        images.push(`<img src="images/${value}.png" id="img" alt="Dice ${value}">`)
    }

    diceResult.textContent =`dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join(' ')
}