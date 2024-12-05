document.getElementById('subscribeButton').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    if (email) {
        message.textContent = `Thank you for subscribing, ${email}!`;
        message.classList.remove('hidden');
        document.getElementById('email').value = ''; // Clear the input field
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.classList.remove('hidden');
    }
});
