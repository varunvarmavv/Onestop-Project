document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById('name');
    const organization = document.getElementById('organization');
    const email = document.getElementById('email');
    const contact = document.getElementById('contact');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const organizationError = document.getElementById('organizationError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');
    const messageError = document.getElementById('messageError');

    if (!name.value) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (!organization.value) {
        organizationError.textContent = 'Please enter your organization name.';
        isValid = false;
    } else {
        organizationError.textContent = '';
    }

    if (!email.value) {
        emailError.textContent = 'Please enter your email.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!contact.value) {
        contactError.textContent = 'Please enter your contact number.';
        isValid = false;
    } else {
        contactError.textContent = '';
    }

    if (!message.value) {
        messageError.textContent = 'Please enter your message.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    if (isValid) {
        document.getElementById('successMessage').classList.remove('d-none');
        setTimeout(() => {
            document.getElementById('successMessage').classList.add('d-none');
        }, 5000);
    }
});
