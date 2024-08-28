/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    //serviceID-templateID-#form-publicKey
    emailjs.sendForm('', '', '', '')
    .then(() => {
        contactMessage.textContent = 'Mensaje enviado exitosamente  ✅';
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
        contactForm.reset();
    }, () => {
        contactMessage.textContent = 'Mensaje NO enviado con éxito (error de servicio) ❌';
    });
}

contactForm.addEventListener('submit', sendEmail);