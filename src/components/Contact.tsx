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
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-center">
            Interested in collaborating or have a question? Reach out and let's connect!
          </p>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="mb-6">
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Name"
              />
            </div>
            
            <div className="mb-6">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Email"
              />
            </div>
            
            <div className="mb-6">
              <label 
                htmlFor="subject" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Subject"
              />
            </div>
            
            <div className="mb-6">
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="px-4 py-2 rounded-lg border border-green-200 dark:border-green-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 px-6 py-2 bg-gradient-to-r from-green-600 to-blue-500 text-white rounded-lg font-bold shadow-lg hover:from-green-700 hover:to-blue-600 transition-all flex items-center gap-2 justify-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
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
                  <Send size={20} className="mr-2" /> Send Message
                </>
              )}
            </button>
            
            {submitStatus && (
              <div className={`mt-4 p-3 rounded-lg ${
                submitStatus.success 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;