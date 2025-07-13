let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
        } else if (value === 'AC') {
            string = "";
        } else if (value === 'DEL') {
            string = string.slice(0, -1);
        } else {
            string += value;
        }

        input.value = string;
    });
});
