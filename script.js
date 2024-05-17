let slider = document.querySelectorAll('.reviews .flex .sliders-container .slider');

let index = 0;

function next() {
    slider[index].classList.remove('active');
    index = (index + 1) % slider.length;
    slider[index].classList.add('active');
}


function prev() {
    slider[index].classList.remove('active');
    index = (index - 1 + slider.length) % slider.length;
    slider[index].classList.add('active');
}

let monthBtn = document.querySelector('.pricing .toggle-buttons .button .month-btn'); 

let yearBtn = document.querySelector('.pricing .toggle-buttons .button .year-btn'); 

let monhtlyPlan = document.querySelectorAll('.pricing .box-container .box .month'); 

let yearlyPlan = document.querySelectorAll('.pricing .box-container .box .year'); 

yaerBtn.onclick = () =>{
    yearBtn.classList.remove('active');
    monthBtn.classList.add('active');

    monthlyPlan.forEach(mo => {mo.style.display = 'none'});

    yaerlyPlan.forEach(ye => {   ye.style.display = 'block'});

}

monthBtn.onclick = () =>{
    yearBtn.classList.remove('active');
    monthBtn.classList.add('active');

    yaerlyPlan.forEach(ye => {ye.style.display = 'none'});

    monthlyPlan.forEach(mo => {mo.style.display = 'block'});

}