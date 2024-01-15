$(document).ready(function() {
    const feedbackForm = $('#feedbackForm');
    const messagesContainer = $('#messages');
    const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];
    displayMessages(existingMessages);

    feedbackForm.submit(function(event) {
        event.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (name && email && message) {
            const newMessage = { name, email, message };
            existingMessages.push(newMessage);
            localStorage.setItem('messages', JSON.stringify(existingMessages));

            feedbackForm[0].reset();

            displayMessages(existingMessages);
        }
    });

    function displayMessages(messages) {
        messagesContainer.empty();

        if (messages.length > 0) {
            messages.forEach(function(message) {
                const messageElement = `<div class="message">
                    <p><strong>${message.name}</strong></p>
                    <p>Email: ${message.email}</p>
                    <p>${message.message}</p>
                </div>`;
                messagesContainer.append(messageElement);
            });
        } else {
            messagesContainer.append('<p>No messages yet.</p>');
        }
    }
});
