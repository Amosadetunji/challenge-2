function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;


        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dayElement = document.querySelector('#days')
        const hourElement = document.querySelector('#hours')
        const minuteElement = document.querySelector('#minutes')
        const secondElement = document.querySelector('#seconds')

        dayElement.textContent = days;
        hourElement.textContent = hours;
        minuteElement.textContent = minutes;
        secondElement.textContent = seconds;

    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

const targetDate = new Date().getTime() + (47 * 24 * 60 * 60 * 1000);
startCountdown(targetDate);






const form = document.querySelector('#form');
const email = document.querySelector('#email')
const fullName = document.querySelector('#fullName')
const number = document.querySelector('#number')
const company = document.querySelector('#company' )

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

function formValidation (e){
   
    // e.preventDefault()
    const nameValue = fullName.value.trim()
    console.log(nameValue);
    const emailValue = email.value.trim()
    const numberValue = number.value.trim ()
    const companyValue = company.value.trim()

    if(nameValue === '') {
        const nameControl = fullName.parentElement
        const span = nameControl.querySelector('span')
        nameControl.classList.add('error')
        span.textContent = 'Input a name'
    } else if(nameValue.length <= 4) {
        const nameControl = fullName.parentElement
        const span = nameControl.querySelector('span')
        nameControl.classList.add('error')
        span.textContent = 'Username cannot be less than 4 characters'
    } else {
        const nameControl = fullName.parentElement
        nameControl.classList.add('success')
    }

    if(emailValue === '') {
        const emailControl = email.parentElement
        const span = emailControl.querySelector('span')
        emailControl. classList. add ('error')
        span.textContent = 'input an email'
        } else if(emailRegex.test(emailValue)) {
        const emailControl = email.parentElement
        emailControl.classList.add('success')
        }else{
        const emailControl = email.parentElement
        const span = emailControl.querySelector( 'span')
        emailControl.classList.add('error')
        span.textContent = 'Enter a valid email'
        }

        if(numberValue === '') {
            const numberControl = number.parentElement
            const span = numberControl.querySelector('span')
            numberControl.classList.add('error')
            span.textContent = 'input your number'
           } else if(numberValue.length <= 10) {
            const numberControl = number.parentElement
            const span = numberControl.querySelector('span')
            numberControl.classList.add('error')
            span.textContent = 'input a valid number'
            }
            else{
                const numberControl = number.parentElement
                numberControl.classList.add('success')
            }
            if(companyValue === '') {
                const companyControl = company.parentElement
                const span = companyControl.querySelector('span')
                companyControl.classList.add('error')
                span.textContent = 'Input your company name'
            } else if(companyValue.length <= 4) {
                const companyControl = company.parentElement
                const span = companyControl.querySelector('span')
                companyControl.classList.add('error')
                span.textContent = 'enter a valid company name'
            } else {
                const companyControl = company.parentElement
                companyControl.classList.add('success')
                alert('Form submitted')
            }
        
    
    }
       

    form.addEventListener('submit', formValidation)

    
    