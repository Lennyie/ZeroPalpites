document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                showMessage('Todos os campos são obrigatórios!', 'error');
                return;
            }

            // Simulação de envio de formulário
            showMessage('Mensagem enviada com sucesso!', 'success');
            contactForm.reset();
        });
    }

    function showMessage(message, type) {
        contactMessage.textContent = message;
        contactMessage.className = type;
    }
});