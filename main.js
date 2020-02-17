const tot = document.querySelector('#tot');
const button = document.querySelector('#button');
const tip = document.querySelector('#tip');
const rate = document.querySelector('#rate');
const grand = document.querySelector('#grand');
button.addEventListener("click", calculate);



function calculate()
{
    const tax =5.50;

    tip.textContent ='Tip: $' + ((rate.value*tot.value)/100.0);
    calctot =((rate.value*tot.value)/100.0)+Number(tot.value)+tax;
    grand.textContent = 'Grand Total: $'+calctot;
}
