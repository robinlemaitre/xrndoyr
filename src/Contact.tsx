import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxjoilHpN75dQ7rlEvLRaGtV8qkzeWUrpLT30xPCRGrSPYlQqJkt0dGsJ0pDFw-8ip8nA/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      console.log("Response received:", response);

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', phone: '', message: '' });
        console.log("Form submission successful");
      } else {
        setStatus('ERROR');
        console.log("Form submission failed");
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('ERROR');
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-black">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-black">Numéro de téléphone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-black">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-black"
          />
        </div>
        <button type="submit" className="w-full bg-[#073763] text-white py-2 hover:bg-blue-800 transition duration-300">Envoyer</button>
      </form>
      <div className="text-center my-4">ou</div>
      <div className="text-center">
        <a href="https://calendly.com/robin-lemaitre/introductory-call" className="w-full bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400 transition duration-300 inline-block">
          Prendre RDV
        </a>
      </div>
      {status === 'SUCCESS' && <p className="text-green-500 mt-4">Votre message a été envoyé avec succès.</p>}
      {status === 'ERROR' && <p className="text-red-500 mt-4">Une erreur est survenue. Veuillez réessayer.</p>}
    </div>
  );
};

export default Contact;
