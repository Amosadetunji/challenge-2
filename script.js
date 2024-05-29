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