let contactForm = document.querySelector('.contact-form');
let contactInputText = document.querySelector('.contact-input-text');
let contactInputEmail = document.querySelector('.contact-input-email');
let contactInputCheckbox =document.querySelector('.contact_input-checkbox');
let contactBtn = document.querySelector('.contact-btn');
let contactSpan = document.querySelector('.contact-span');
let contactspan = document.querySelector('.contact_span');


contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (contactInputText.value === '') {
        contactInputText.classList.add('error1');
        contactspan.textContent = 'Пожалуйста введите имя!'
    } else {
        contactInputText.classList.add('error2');
        contactspan.textContent = ''
    }
    if (contactInputEmail.value === '') {
        contactInputEmail.classList.add('error1');
        contactSpan.textContent = 'Пожалуйста введите электронную почту!!!'
    } else {
        contactInputEmail.classList.add('error2');
        contactSpan.textContent = ''
    }
})

let serviseForm = document.querySelector('.servise-form');
let serviseInputText = document.querySelector('.servise_input-text');
let serviseInputEmail = document.querySelector('.servise_input-email');
let serviseInputCheckbox =document.querySelector('.servise_input-checkbox');
let serviseBtn = document.querySelector('.servise-btn');
let serviseSpan = document.querySelector('.span__mail');
let serviseSSpan = document.querySelector('.servise_span');
let btnS = document.querySelector('.btn')


serviseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (serviseInputText.value === '') {
        serviseInputText.classList.add('error3');
        serviseSSpan.textContent = 'Пожалуйста введите имя!'
    } else {
        serviseInputText.classList.add('error4');
        serviseSSpan.textContent = ''
    }
    if (serviseInputEmail.value === '') {
        serviseInputEmail.classList.add('error3');
        serviseSpan.textContent = 'Пожалуйста введите электронную почту!!!'
    } else {
        serviseInputEmail.classList.add('error4');
        serviseSpan.textContent = ''
    }
    
})







// let serviseForm = document.querySelector('.servise-form');
// let serviseInputText = document.querySelector('.servise-input-text');
// let serviseInputEmail = document.querySelector('.servise-input-email');
// let serviseInputCheckbox =document.querySelector('.servise_input-checkbox');
// let serviseBtn = document.querySelector('.servise-btn');
// let serviseSpan = document.querySelector('.servise-span');
// let servisespan = document.querySelector('.servise_span');

// serviseForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if (serviseInputText.value === '') {
//         serviseInputText.classList.add('error1');
//         serviseSpan.textContent = 'Пожалуйста введите имя!'
//     } else {
//         serviseInputText.classList.add('error2');
//         serviseSpan.textContent = ''
//     }
//     if (serviseInputEmail.value === '') {
//         serviseInputEmail.classList.add('error1');
//         serviseSpan.textContent = 'Пожалуйста введите электронную почту!!!'
//     } else {
//         serviseInputEmail.classList.add('error2');
//         serviseSpan.textContent = ''
//     }
// })