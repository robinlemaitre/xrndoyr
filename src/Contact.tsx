import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { CheckCircle } from 'lucide-react'; // Import the checkmark icon

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<null | string>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        'service_remil3u',
        'template_82ta5hl',
        templateParams,
        '99iw6FinCgMewWQ8u'
      );

      if (response.status === 200) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error('Failed to send email', error);
      setStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === 'SUCCESS') {
    return (
      <div className="bg-green-100 p-8 rounded-lg shadow-lg max-w-lg mx-auto flex flex-col items-center">
        <CheckCircle size={48} className="text-green-600 mb-4" />
        <p className="text-green-700 text-lg font-semibold">Votre message a été envoyé avec succès !</p>
      </div>
    );
  }

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
        <button
          type="submit"
          className={`w-full bg-[#073763] text-white py-2 hover:bg-blue-800 transition duration-300 inline-flex items-center justify-center ${isSubmitting && 'cursor-not-allowed opacity-50'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
              <path d="M4 12a8 8 0 018-8" stroke="white" strokeWidth="4" fill="none" />
            </svg>
          ) : (
            'Envoyer'
          )}
        </button>
      </form>
      {status === 'ERROR' && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
          <p>Une erreur est survenue. Veuillez réessayer.</p>
        </div>
      )}
      <div className="text-center my-4">ou</div>
      <div className="text-center">
        <a
          href="https://calendly.com/robin-lemaitre/introductory-call"
          className="w-full bg-gray-300 text-black py-2 rounded-lg hover:bg-gray-400 transition duration-300 inline-block"
        >
          Prendre RDV
        </a>
      </div>
    </div>
  );
};

export default Contact;
