const $display = document.getElementById('display'),
$btn = document.querySelectorAll('.btn');

let calculation = []
let accumalate;
function calculate(btn){
    let value = btn.innerText;
    if(value === 'AC'){
        calculation = [];
        $display.value = '';
    }else if (value === '&larr'){
        calculation.pop()
        $display.value = calculation.join('')
    }else if (value === '='){
        $display.value = eval(accumalate)
    }else if (value === '%'){
        $display.value = parseFloat(calculation.join(''))/100
        calculation = [];
    } else {
        calculation.push(btn.innerText)
        accumalate = calculation.join('');
        $display.value = accumalate;
    }    
}



$btn.forEach(button => button.addEventListener('click',()=>calculate(button)))