// function show(){
//     let selector = document.getElementById('select').value;

//     if(selector == 'C to F'){
//         let celsius = document.getElementById('value').value;
//         let fahrenheit = (celsius * 9/5) + 32;
//         Output.textContent = 'Output: ' +fahrenheit + '°F';
//     }else{
//         let Kg = document.getElementById('value').value;
//         let pounds = Kg * 2.20462;
//         Output.textContent = 'Output: ' + pounds + ' lbs';
//     }
// }

function show(){
    let selector = document.getElementById('select').value;
    let value = document.getElementById('value').value;

    switch (selector) {
        case 'C to F':
            let fahrenheit = (value * 9/5) + 32;
            Output.textContent = 'Output: ' +fahrenheit + ' °F';
            break;
        case 'Kg to Pound':
            let pounds = value * 2.20462;
            Output.textContent = 'Output: ' + pounds +' lbs';
            break;
        case 'D to Rupee':
            let Rupee = value * 84.94;
            Output.textContent = 'Output: ' + Rupee +' Rs';
            break;
        default:
            Output.textContent = 'Invalid Selection';
            break;


    }
}

