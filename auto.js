const form = document.querySelector("form");
const result = document.querySelector('.result');
const audi = [1000000, 1100000,1200000];
const bmw = [1200000, 1300000,1400000];
const ford = [900000, 100000,1100000];
const brandPrices = [audi, bmw, ford];


form.addEventListener("submit", function(evt){
    evt.preventDefault();

    let sum = 0;
    // проверка марки и года
    const brand = document.querySelector('select[name="brand"]');
    const year =  document.querySelector('select[name="year"]');
    
    const brandArray = brandPrices[brand.value];
    const brandCost = brandArray[year.value];
    sum +=brandCost;

// проверка топлива
    const fuelRadios = document.querySelectorAll('input[name="fuel"]');
    if (fuelRadios[0].checked){
        sum += Number(fuelRadios[0].value);
    } else if (fuelRadios[1].checked){
        sum += Number(fuelRadios[1].value);
    }

// проверка трансмиссии
let transmission = document.querySelector('input[name="transmission"');
if (transmission.checked){
    sum += Number(transmission.value);
}else if (!transmission.checked){
    sum += 0;
}


    result.textContent = "Итоговая сумма: " + sum + " рублей";
});