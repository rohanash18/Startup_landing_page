const scriptURL = 'https://script.google.com/macros/s/AKfycbwHysTgDLp0S_-Sjg_28NCSlaT-PNWA2ksqIGj6ZJPe1wRS8kUI87zICaPEhgTModSCfw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");
const emailInput = form.querySelector('input[name="email"]');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!isValidEmail(emailInput.value)) {
        msg.innerHTML = "Please enter a valid email address.";
        return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank you for subscribing!";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 3000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
