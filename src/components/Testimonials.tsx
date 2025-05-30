import React, { useState, useEffect } from 'react';
import { CheckCircle, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({
    name: '',
    role: '',
    feedback: '',
    photo: '', // base64 or URL
    linkedin: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Fetch testimonials from backend (only approved)
  const API_URL = import.meta.env.VITE_API_URL;
  const fetchApprovedTestimonials = () => {
    setLoading(true);
    fetch(`${API_URL}/api/testimonials/approved`)
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchApprovedTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  // Add testimonial to the backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.role || !form.feedback) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/testimonials`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, photo: form.photo || '/dummy-profile-pic-300x300.jpg' })
      });
      if (!res.ok) throw new Error('Failed to submit testimonial');
      fetchApprovedTestimonials();
      setCurrent(0);
      setForm({ name: '', role: '', feedback: '', photo: '', linkedin: '' });
      setShowModal(false);
      setSuccessMsg('Successfully submitted and waiting for approval.');
      setTimeout(() => setSuccessMsg(''), 5000);
    } catch (err) {
      setError('Submission failed. Please try again.');
    }
    setSubmitting(false);
  };

  // Handle photo upload (base64 preview)
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Filter testimonials to only show approved ones
  const approvedTestimonials = testimonials.filter(t => t.approved);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white dark:from-green-950 dark:via-blue-950 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-green-100 dark:border-green-900 p-10">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-extrabold text-green-800 dark:text-green-300 font-mono flex items-center gap-2">
              Testimonials <CheckCircle className="inline-block text-green-500 dark:text-green-300" size={28} />
            </h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
              onClick={() => setShowModal(true)}
            >
              Submit
            </button>
          </div>
          <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-blue-400 dark:from-green-400 dark:to-blue-300 mb-8 rounded-full"></div>
          <div className="flex justify-center items-center min-h-[350px]">
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-blue-100 via-green-100 to-white dark:from-blue-900 dark:via-green-900 dark:to-gray-900 rounded-3xl shadow-2xl border-4 border-white dark:border-gray-800 p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
              {/* Placeholder for user image */}
              {loading ? (
                <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse flex-shrink-0 mb-4 md:mb-0 md:mr-8 border-4 border-white dark:border-gray-800"></div>
              ) : approvedTestimonials.length > 0 && approvedTestimonials[current].photo ? (
                <img
                  src={approvedTestimonials[current].photo}
                  alt={approvedTestimonials[current].name}
                  className="w-32 h-32 rounded-full object-cover bg-gray-200 dark:bg-gray-700 flex-shrink-0 mb-4 md:mb-0 md:mr-8 border-4 border-white dark:border-gray-800"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 mb-4 md:mb-0 md:mr-8 border-4 border-white dark:border-gray-800"></div>
              )}
              <div className="flex-1">
                {loading ? (
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2 animate-pulse"></div>
                ) : approvedTestimonials.length > 0 ? (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl text-teal-400">“</span>
                      <span className="font-bold text-blue-800 dark:text-blue-200 text-lg">{approvedTestimonials[current].name}</span>
                      <span className="text-blue-600/70 dark:text-blue-300/70 text-base">- {approvedTestimonials[current].role}</span>
                      {approvedTestimonials[current].linkedin && (
                        <a href={approvedTestimonials[current].linkedin} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 underline text-sm">LinkedIn</a>
                      )}
                      <span className="flex ml-auto text-yellow-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-blue-800 dark:text-blue-200 mb-2">AMAZING EXPERIENCE</h3>
                    <p className="text-blue-900 dark:text-blue-100 text-base mb-4">{approvedTestimonials[current].feedback}</p>
                    <div className="flex gap-2 justify-center mt-4">
                      {approvedTestimonials.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-8 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-blue-600' : 'bg-blue-200 dark:bg-blue-800'}`}
                          onClick={() => setCurrent(idx)}
                          aria-label={`Go to testimonial ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <span className="absolute bottom-6 right-8 text-4xl text-teal-400 opacity-80">”</span>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                      <button onClick={prevTestimonial} aria-label="Previous testimonial" className="text-blue-600 dark:text-blue-300 hover:scale-125 transition-transform duration-200">&#8592;</button>
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                      <button onClick={nextTestimonial} aria-label="Next testimonial" className="text-blue-600 dark:text-blue-300 hover:scale-125 transition-transform duration-200">&#8594;</button>
                    </div>
                  </>
                ) : (
                  <div className="text-gray-500 dark:text-gray-300">No testimonials yet.</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {successMsg && (
          <div className="max-w-2xl mx-auto mt-6 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-xl shadow p-4 text-center font-semibold">
            {successMsg}
          </div>
        )}
      </div>
      {/* Modal for Submit Testimonial Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-blue-100 dark:border-blue-900 p-8 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Submit Your Testimonial</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  className="flex-1 p-2 rounded border border-blue-200 dark:bg-gray-800 dark:text-white"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
                <input
                  type="text"
                  placeholder="Title/Company*"
                  className="flex-1 p-2 rounded border border-blue-200 dark:bg-gray-800 dark:text-white"
                  value={form.role}
                  onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                  required
                />
              </div>
              <textarea
                placeholder="Testimonial*"
                className="p-2 rounded border border-blue-200 dark:bg-gray-800 dark:text-white"
                value={form.feedback}
                onChange={e => setForm(f => ({ ...f, feedback: e.target.value }))}
                required
                rows={3}
              />
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="flex-1"
                />
                {form.photo && (
                  <img src={form.photo} alt="Preview" className="w-16 h-16 rounded-full object-cover border-2 border-blue-300" />
                )}
                <input
                  type="url"
                  placeholder="LinkedIn profile (optional)"
                  className="flex-1 min-w-0 p-2 rounded border border-blue-200 dark:bg-gray-800 dark:text-white"
                  value={form.linkedin}
                  onChange={e => setForm(f => ({ ...f, linkedin: e.target.value }))}
                  style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
                />
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit Testimonial'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;