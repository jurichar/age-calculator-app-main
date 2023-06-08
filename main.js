let day = 0;
let month = 0;
let year = 0;
let b_day = 0;
let b_month = 0;
let b_year = 0;

function nbOfDayInAMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

const inputs = {
    day: {
        selector: document.querySelector(".day"),
        valid: (val) => val >= 1 && val <= 31 && Number.isInteger(val)
    },
    month: {
        selector: document.querySelector(".month"),
        valid: (val) => val >= 1 && val <= 12 && Number.isInteger(val)
    },
    year: {
        selector: document.querySelector(".year"),
        valid: (val) => val >= 1 && Number.isInteger(val)
    }
}

for (let key in inputs) {
    inputs[key].selector.addEventListener('input', () => {
        const val = parseInt(inputs[key].selector.value);
        if (!inputs[key].valid(val)) {
            inputs[key].selector.style.border = "2px solid red";
            document.querySelector('.Error').style.display = "flex";
        } else {
            inputs[key].selector.style.border = "1px solid rgb(200, 200, 200)";
            document.querySelector('.Error').style.display = "none";
        }
    });
}

const button = document.querySelector('#summit');

button.addEventListener('click', () => {
    day = parseInt(document.querySelector('.day').value);
    month = parseInt(document.querySelector('.month').value);
    year = parseInt(document.querySelector('.year').value);

    const actual_date = new Date();
    const date_str = year + '-' + month + '-' + day;
    const old_date = new Date(date_str);

    actual_d = actual_date.getDate();
    actual_m = actual_date.getMonth();
    actual_y = actual_date.getFullYear();

    old_d = old_date.getDate();
    old_m = old_date.getMonth();
    old_y = old_date.getFullYear();

    b_year = actual_y - old_y;
    b_month = actual_m - old_m;
    b_day = actual_d - old_d;
    
    if (old_m > actual_m || (old_m === actual_m && old_d > actual_d)) {
        b_year--;
        b_month += 12;
    }

    if (old_d > actual_d) {
        b_month--;
        b_day += nbOfDayInAMonth((old_m - 1 + 12) % 12, old_y);
    }

    console.log(b_day + "-" + b_month + "-" + b_year);
    document.querySelector('#y_num').innerHTML = b_year + '&nbsp;';
    document.querySelector('#m_num').innerHTML = b_month + '&nbsp;';
    document.querySelector('#d_num').innerHTML = b_day + '&nbsp;';
});
