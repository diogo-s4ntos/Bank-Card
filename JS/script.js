document.getElementById('input-holder').addEventListener('input', () => {
    document.getElementById('card-holder-full-name').placeholder = document.getElementById('input-holder').value || 'FULL NAME';
});

document.getElementById('input-number').addEventListener('input', () => {
    document.getElementById('number').placeholder = document.getElementById('input-number').value || '####  ####  ####  ####';
    
});

document.getElementById('input-month').addEventListener('input', () => {
    document.getElementById('card-expires-date').placeholder = document.getElementById('input-month').value + '/' + document.getElementById('input-year').value || 'MM/YY';
});

document.getElementById('input-year').addEventListener('input', () => {
    document.getElementById('card-expires-date').placeholder =  document.getElementById('input-month').value + '/' + document.getElementById('input-year').value || 'MM/YY';
});

function validarNumero(input){
    //Remove qualquer caractere que não seja um número
    input.value = input.value.replace(/[^0-9]/g, '');
    input.value = input.value.replace(/(\d{4})(?=\d)/g, '$1 ');
}

function validarLetra(input){
    //Remove qualquer caractere que não seja um número
    input.value = input.value.replace(/[^A-Za-z]/g, ' ');
}

document.getElementById('input-cvv').addEventListener('input', () => {
    document.getElementById('card-cvv').placeholder =  document.getElementById('input-cvv').value || 'CVV';
});

document.getElementById('input-cvv').addEventListener('focus', () => {
    document.getElementById('card').style.transform = 'rotateY(180deg)';
    document.getElementById('card-content').style.display = 'none';
    document.getElementById('card-back').style.display = 'flex';
    document.getElementById('card-back').style.transform = 'rotateY(-180deg)';
});

document.getElementById('input-cvv').addEventListener('blur', () => {
    document.getElementById('card').style.transform = 'rotateY(0deg)';
    document.getElementById('card-content').style.display = 'grid';
    document.getElementById('card-back').style.display = 'none';
});