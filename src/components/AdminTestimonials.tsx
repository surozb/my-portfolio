import React, { useEffect, useState } from 'react';

const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const API_URL = import.meta.env.VITE_API_URL;

  // Fetch all testimonials (approved and unapproved)
  const fetchTestimonials = () => {
    setLoading(true);
    fetch(`${API_URL}/api/testimonials`)
      .then(res => res.json())
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch testimonials');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const approveTestimonial = async (id: string) => {
    await fetch(`${API_URL}/api/testimonials/${id}/approve`, { method: 'PATCH' });
    fetchTestimonials();
  };

  const deleteTestimonial = async (id: string) => {
    await fetch(`${API_URL}/api/testimonials/${id}`, { method: 'DELETE' });
    fetchTestimonials();
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Admin: Manage Testimonials</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : testimonials.length === 0 ? (
          <div>No testimonials found.</div>
        ) : (
          <div className="space-y-6">
            {testimonials.map((t, idx) => (
              <div key={t.id || idx} className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-6 items-center border border-gray-200">
                <img src={t.photo || '/dummy-profile-pic-300x300.jpg'} alt={t.name} className="w-20 h-20 rounded-full object-cover border-2 border-blue-300" />
                <div className="flex-1">
                  <div className="font-bold text-lg">{t.name} <span className="text-gray-500 font-normal">- {t.role}</span></div>
                  <div className="text-gray-700 mb-2">{t.feedback}</div>
                  {t.linkedin && <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">LinkedIn</a>}
                  <div className="mt-2">
                    {t.approved ? (
                      <span className="text-green-600 font-semibold">Approved</span>
                    ) : (
                      <button onClick={() => approveTestimonial(t.id)} className="bg-green-600 text-white px-4 py-1 rounded mr-2">Approve</button>
                    )}
                    <button onClick={() => deleteTestimonial(t.id)} className="bg-red-600 text-white px-4 py-1 rounded">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminTestimonials;
