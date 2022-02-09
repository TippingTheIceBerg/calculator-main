
let tipsChoice = document.getElementsByClassName("tipPercent");

let tipDec = .15;

let total = 0;


let reset = document.getElementById("resetBtt")


let borderBill = document.getElementById("flexIconTotal");

let borderPeople = document.getElementById("totalPeopleContainer")

//  Calc text
let tipPerPersonText = document.getElementById("tipPer");


let totalPerPersonText = document.getElementById('totalPer')

// Calc varibles

let calcTip;
let calcTotal;





let custom = document.getElementById("tipPercentCustom")


custom.addEventListener("focus",()=>{
    // this portion handles the customer border color staying on at all times, this decision was made since the tip 
    custom.style.border = "solid hsl(172, 67%, 45%) 3px"

    // this portion removes the active state of the non-custom tips when the custom tip is clicked on.

 
    for(let k = 0; k < tipsChoice.length -1; k++){
        tipsChoice[k].setAttribute("id","")
    }
    // --------------------
  
})
// this portion handles the change in custom tip values
custom.addEventListener("change",() =>{
    tipDec = parseInt(tipsChoice[5].value) / 100

})
// ---------------------

// this portion handles the tips other than custom in both active state background color and values

for(let i = 0 ; i < tipsChoice.length-1 ;i++){
 

    tipsChoice[i].addEventListener("click",()=>{

custom.style.border = 'none'
        // this portion removes the background selected, resets all bg active colors when choosing a new tip by assining an id of nothing.



        for(let j = 0; j < tipsChoice.length -1; j++){
            tipsChoice[j].setAttribute("id","")
        }
        // -----------------


        // this portion sets an id of active which adds the color active background color

        tipsChoice[i].setAttribute('id',"active")
        
       tipDec = parseInt(tipsChoice[i].value) / 100;

    //  ---------------------
    })
   
    // --------------------
    


}

// handles the border color of both bill and number of people, the color will stay highlighted until the rest button is pressed, and if fine will change back to none border, if an error is found, the color will be allowed to change red for whatever section fails as an allowable number. The fail condition color is found below in the error section of reset add event listener click

borderBill.addEventListener("click",()=>{
    borderBill.style.border = "solid var(--highLightCyan)"
    
    borderPeople.style.border = "none"
    


})
borderPeople.addEventListener("click",()=>{
    borderPeople.style.border = "solid var(--highLightCyan)"
  borderBill.style.border = "none"
 

})


// this portion gets the bill and number of people and does the calculations

reset.addEventListener("click",() =>{
   
    let bill = parseInt( document.getElementById("total").value);

    let numPeople = parseInt( document.getElementById("totalPeopleInput").value)


    // controls error selection, where if no values are entered, a red border is chosen and the calculation is not continued. 


if(isNaN(bill) && isNaN(numPeople) ){
    borderBill.style.border = "solid red";
    borderPeople.style.border = "solid red";
    return;
}
if (isNaN(bill)){
    borderPeople.style.border = "none"
    borderBill.style.border = "solid red";
    return;
}
else if(isNaN(numPeople)){
    borderBill.style.border = "none"
        borderPeople.style.border = "solid red"
        return;
    }

        // this section removes all active colors if all values are accetped, if any values fails, error colors will appear for bill and num of people. I've decided that knowing what percent tip was choosen is more important to keep for each reset press than bill and num of people. As a result, these values will be kept highlighted
        
            // commented out section is for if the desision is made to remove the highlighted tip selection after each reset.
// for(let i = 0 ; i < tipsChoice.length-1 ;i++){
//     tipsChoice[i].setAttribute('id',"") ;
// }
// custom.style.border = 'none'
            // ----------------


borderBill.style.border = "none"
borderPeople.style.border ='none'
        // ----------------

        

    // -------------------------

    calcTip = bill * tipDec / numPeople

    
    calcTip = calcTip.toFixed(2);


    tipPerPersonText.innerText = `$${calcTip}`


    calcTotal = bill / numPeople;
calcTotal = calcTotal.toFixed(2);
    totalPerPersonText.innerText = `$${calcTotal}`


})

// --------------------




