let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '+/-', '%'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
}

document.querySelector('#ac').onclick = () => clearAll();

document.querySelector('.buttons').onclick = (event) => {



    const key = event.target.textContent;

    // если нажата клавиша 0-9 или точка
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = a;

        } else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    // если нажата клавиша + - / *
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    // нажата =
    if (key === '=') {
        if (b === '=') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                a = a / b;
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a='';
                    b='';
                    sign='';
                    return;
                }
                break;
            case '+/-':
                a = -a;
                break;
            case '%':
                a = a / 100;
                break;


        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

    function hideMathSign(button) { button.style.display = "none"; } function clearResult() { document.getElementById("result").value = ""; } function calculateResult() { var result = eval(document.getElementById("result").value); document.getElementById("result").value = result; }
}
document.querySelectorAll('.btn-number').forEach((item) => {
    item.onclick = () => {
        document.querySelector('#calc-number').innerText += item.innerText
    }
})

