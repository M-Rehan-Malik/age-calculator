const btn = document.querySelector('button');
btn.onclick = check1
const input1 = document.querySelector('#day-input');
const input2 = document.querySelector('#month-input');
const input3 = document.querySelector('#year-input');
const div1 = document.querySelector('.day');
const div2 = document.querySelector('.month');
const div3 = document.querySelector('.year');
const e = document.querySelectorAll('.o')
const date = new Date
let divArr = [div1, div2, div3];
let inputArr = [input1, input2, input3]
function check1() {
    for (let i=0;i< divArr.length ; i++) {
        if (inputArr[i].value.replaceAll(' ', '')==='') {
        if (divArr[i].classList.length===1) {
        divArr[i].classList.toggle('error')
        e[i].classList.toggle('em')}
        e[i].textContent='This field is required'
    } else {
        if (divArr[i].classList.length===2) {
            divArr[i].classList.toggle('error')
            e[i].classList.toggle('em')}
            e[i].textContent='This field is required'
        }
    }
if (inputArr[0].value.replaceAll(' ', '')!=='' && inputArr[1].value.replaceAll(' ', '')!=='' && inputArr[2].value.replaceAll(' ', '')!=='') check2()
}
function check2() {
    const errors = ['day', 'month', 'year'];
    for (let g=0;g<inputArr.length;g++) {
        let nums = Number(inputArr[g].value.replaceAll(' ', ''));
        if (nums%1!==0) {
            divArr[g].classList.toggle('error')
            e[g].classList.toggle('em')
            e[g].textContent = 'Must be a valid ' + errors[g]
        }
       else continue
}if (Number(inputArr[0].value.replaceAll(' ', ''))%1===0 && Number(inputArr[1].value.replaceAll(' ', ''))%1===0 && Number(inputArr[2].value.replaceAll(' ', ''))%1===0) check3()}

function check3() {
    value1 = Number(inputArr[0].value.replaceAll(' ', ''))
    value2 = Number(inputArr[1].value.replaceAll(' ', ''))
    value3 = Number(inputArr[2].value.replaceAll(' ', ''))
    if (value2[0]===0) value2 = value2[1]
    const month = [1, 3, 5, 7, 8, 10, 12]
    const errors = ['Must be a valid day', 'Must be a valid month', 'Must be in the past'];
    if (value1<=0 | value1>31 | inputArr[0].value.replaceAll(' ', '').length!==2) {
        divArr[0].classList.toggle('error')
        e[0].classList.toggle('em')
        e[0].textContent = errors[0]
    } else if (month.includes(value2))
    {
        if (value1>30) {
            divArr[0].classList.toggle('error')
            e[0].classList.toggle('em')
            e[0].textContent = errors[0]
        }
}     else if (value2===2) {
        if (value3%4===0) {
            if (value1>29) {
                divArr[0].classList.toggle('error')
                e[0].classList.toggle('em')
                e[0].textContent = errors[0]
            }
        } else {
            if (value1>28) {
                divArr[0].classList.toggle('error')
                e[0].classList.toggle('em')
                e[0].textContent = errors[0]
            }
        }
}     else if (value2<=0|value2>12|inputArr[1].value.replaceAll(' ', '').length!==2){
        divArr[1].classList.toggle('error')
        e[1].classList.toggle('em')
        e[1].textContent =errors[1];
}     else if (value3>date.getFullYear()|value3<=0) {
    divArr[2].classList.toggle('error')
    e[2].classList.toggle('em')
    e[2].textContent =errors[2];
}     else if (inputArr[2].value.replaceAll(' ', '').length!==4) {
    divArr[2].classList.toggle('error')
    e[2].classList.toggle('em')
    e[2].textContent ='Must be a valid year';
}
if (divArr[0].classList.length===1&&divArr[1].classList.length===1&&divArr[2].classList.length===1) calculateAge()
}

function calculateAge() {
    const yearNow = date.getFullYear()
    const monthNow = date.getMonth()+1
    const dateNow = date.getDate()
    value1 = Number(inputArr[0].value.replaceAll(' ', ''));
    value2 = Number(inputArr[1].value.replaceAll(' ', ''));
    value3 = Number(inputArr[2].value.replaceAll(' ', ''));
    const yearOutput = document.getElementById('year-age');
    const monthOutput = document.getElementById('month-age');
    const dayOutput = document.getElementById('day-age');
    let ageInYears=yearNow-value3;
    let ageInMonths=monthNow-value2;
    let ageInDays=dateNow-value1;
    if (value3<yearNow) {
    if (value2<monthNow) {
        if (value1<=dateNow) {
            yearOutput.textContent = ageInYears
            monthOutput.textContent = ageInMonths
            dayOutput.textContent = ageInDays
        }
        else {
            yearOutput.textContent = ageInYears
            monthOutput.textContent = ageInMonths
            dayOutput.textContent = 30 + ageInDays 
        }
    } else if (value2===monthNow) {
        if (value1<=dateNow) {
            yearOutput.textContent = ageInYears
            monthOutput.textContent = ageInMonths
            dayOutput.textContent = ageInDays
        }
       else {
        yearOutput.textContent = ageInYears-1
        monthOutput.textContent = 11
        dayOutput.textContent = 30-(value1 - dateNow)
    }
}     else if (value2>monthNow){
        if (value1<dateNow) {
            yearOutput.textContent = ageInYears -1
            monthOutput.textContent = 12 + ageInMonths
            dayOutput.textContent = ageInDays
        } else {
            yearOutput.textContent = ageInYears - 1
            monthOutput.textContent = 11 + ageInMonths
            dayOutput.textContent = 30 + ageInDays
        }
    }} else {
        if (value2<monthNow) {
            if (value1 <= dateNow ) {
                yearOutput.textContent = 0
                monthOutput.textContent = ageInMonths
                dayOutput.textContent = ageInDays
        }   else {
                yearOutput.textContent = 0
                monthOutput.textContent = ageInMonths-1
                dayOutput.textContent = 30 + ageInDays
        }
    }   else if (value2===monthNow) {
            if( value1 <= dateNow ){
                yearOutput.textContent = 0
                monthOutput.textContent = 0
                dayOutput.textContent = ageInDays      
            } else {
                for (let d=0;d<inputArr.length;d++) {
                    divArr[d].classList.toggle('error')
                    e[d].classList.toggle('em')
                    e[d].textContent = 'Date must be in past'
                }
            }
}       else {
            for (let d=0;d<inputArr.length;d++) {
                divArr[d].classList.toggle('error')
                e[d].classList.toggle('em')
                e[d].textContent = 'Date must be in past'
            }
}
}}