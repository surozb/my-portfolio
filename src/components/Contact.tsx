import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Bug, CheckCircle, Code2, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-white dark:from-blue-950 dark:via-green-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-green-100 dark:border-green-900 p-10 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-green-800 dark:text-green-300 mb-2 text-center font-mono flex items-center gap-2">
            Contact <ShieldCheck className="inline-block text-green-500 dark:text-green-300" size={28} />
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-blue-400 dark:from-green-400 dark:to-blue-300 mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-center">
            Interested in collaborating or have a question? Reach out and let's connect!
          </p>
          <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-200">Your Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-200">Your Email</label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-200">Subject</label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-lg font-bold shadow-lg hover:from-green-700 hover:to-blue-600 transition-all flex items-center gap-2 w-full md:w-auto justify-center md:justify-end"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;