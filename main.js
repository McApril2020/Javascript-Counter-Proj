let count = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(items) {

    items.addEventListener('click', function(e) {
        const num = e.currentTarget.classList;
        if(num.contains('decrease')) {
            count--;
        } else if(num.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = 'green';
        }
        if(count < 0) {
            value.style.color = 'red';
        }
        if(count === 0) {
            value.style.color = '#222';
        }

        value.textContent = count;
    })

})