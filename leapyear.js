function isLeapYears(){
    const year = document.getElementById('year').value;
    const result = document.getElementById('result');
    const form = document.getElementById('form');
    
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        result.style.display = 'block';
        result.style.color = 'green';
        result.innerHTML = year + ' is a leap year';
        form.style.height = '200px';
        form.style.transition = 'height 0.5s ease';
    } else {
        result.style.display = 'block';
        result.style.color = 'red';
        result.innerHTML = year + ' is not a leap year';
        form.style.height = '200px';
        form.style.transition = 'height 0.5s ease';
    }
}
function resetFrom(){
    document.getElementById('year').value = '';
    document.getElementById('result').style.display = 'none';
    form.style.height = '150px';
    form.style.transition = 'height 0.5s ease';
}
