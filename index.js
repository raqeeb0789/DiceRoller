
function Roller() {
    const input = parseInt(document.getElementById("dicenumbers").value);
    let output=document.getElementById("output");
    let outputImage=document.getElementById("diceimages");
    const nuDice=[]
    const images=[]
    if(isNaN(input) || input <= 0){
        output.textContent="Please Enter a valid input";
    }
    for(let i=0;i<input;i++){
        let num=Math.floor(Math.random()*6)+1;
        nuDice.push(num)
        images.push(`<img src="images/${num}.png">`);
    }
    const sum = nuDice.reduce((total, current) => total + current, 0);
   output.textContent=`Dice: ${nuDice.join(', ')}\n Total = ${sum}`;
   outputImage.innerHTML=images.join('');
}
