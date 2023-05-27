import React from 'react';

const Contact = () => {
    return (
        <section>
            <h2>Contact</h2>
            <form>
                <input type="text" name="name" required placeholder="Name" />
                <input type="email" name="email" required placeholder="Email" />
                <textarea name="message" required placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}

export default Contact;
