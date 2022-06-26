// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import "./Contact.css";
const Contact = (value) => {
    return (
        <div className="contact-card">
            <img className='contact-img' src={value.data.photo} alt={value.data.name} />
            <div className='container'>
                <h1>{value.data.name}</h1>
                <h4>{value.data.phone}</h4>
                <h4>{value.data.email}</h4>
            </div>
    </div>
    )
}

export default Contact;