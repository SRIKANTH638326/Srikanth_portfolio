import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);

      const response = await fetch('https://your-backend-url/contact', {
        method: 'POST',
        body: form
      });

      const result = await response.json();
      alert(result.message);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Error sending message: ' + error.message);
    }
  };

  return (
    <section className='contact'>
      <header>
        <h2 className='h2 article-title'>Contact</h2>
      </header>

      <section className='mapbox'>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.429138387615!2d77.64790028792096!3d12.964986258414601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13fe983abe4b%3A0x10b5643b3f5c96ec!2sJeevan%20Bima%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1722809918571!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </figure>
      </section>

      <section className='contact-form'>
        <h3 className='h3 form-title'>Contact Form</h3>
        <form className='form' onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <input
              type="text"
              name='name'
              className='form-input'
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name='email'
              className='form-input'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            className='form-input'
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className='form-btn' type='submit'>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
