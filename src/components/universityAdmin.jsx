import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Trash2, Edit, ChevronLeft, ChevronRight } from 'lucide-react';

const API = '/api/universities';

const UniversityAdmin = () => {
  const [universities, setUniversities] = useState([]);
  const [form, setForm] = useState({
    country: '',
    name: '',
    address: '',
    description: '',
    image: null,
  });
  const [editing, setEditing] = useState({ country: '', id: '' });
  const sliderRefs = useRef({});
  const fileInputRef = useRef(null);

  const fetchData = async () => {
    const res = await axios.get(API);
    setUniversities(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const resetForm = () => {
    setForm({ country: '', name: '', address: '', description: '', image: null });
    setEditing({ country: '', id: '' });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('address', form.address);
    formData.append('description', form.description);
    if (form.image) formData.append('image', form.image);

    try {
      if (editing.id) {
        await axios.put(`${API}/${editing.country}/${editing.id}`, formData);
      } else {
        await axios.post(`${API}/${form.country}`, formData);
      }

      resetForm();
      fetchData();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while saving the university");
    }
  };

  const handleEdit = (country, uni) => {
    resetForm();
    setForm({
      country,
      name: uni.name,
      address: uni.address,
      description: uni.description,
      image: null,
    });
    setEditing({ country, id: uni._id });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (country, id) => {
    try {
      await axios.delete(`${API}/${country}/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting university:", error);
      alert("An error occurred while deleting the university");
    }
  };

  const handleDeleteCountry = async (country) => {
    const confirmed = window.confirm(`Are you sure you want to delete all universities in ${country}?`);
    if (!confirmed) return;

    try {
      await axios.delete(`${API}/${country}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting country:", error);
      alert("An error occurred while deleting the country");
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const scroll = (country, direction) => {
    const container = sliderRefs.current[country];
    if (container) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">University Admin Panel</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input 
              type="text" 
              name="country" 
              placeholder="Country" 
              value={form.country} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              required={!editing.id} 
              disabled={editing.id}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">University Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="University Name" 
              value={form.name} 
              onChange={handleChange} 
              className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
              required 
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input 
            type="text" 
            name="address" 
            placeholder="Address" 
            value={form.address} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea 
            name="description" 
            placeholder="Description" 
            value={form.description} 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-2 rounded-md h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            required 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">University Image</label>
          <input 
            type="file" 
            name="image" 
            onChange={handleChange} 
            className="w-full border border-gray-300 p-2 rounded-md" 
            accept="image/*" 
            ref={fileInputRef}
          />
          {form.image && (
            <p className="mt-1 text-sm text-green-600">
              Selected file: {form.image.name}
            </p>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium flex items-center justify-center"
          >
            {editing.id ? 'Update' : 'Add'} University
          </button>
          {editing.id && (
            <button 
              type="button" 
              onClick={handleCancel}
              className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors duration-300 font-medium"
            >
              Cancel Editing
            </button>
          )}
        </div>
      </form>

      {/* Display Universities */}
      <div className="mt-12 space-y-12">
        {universities.map((item) => (
          <div key={item._id} className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-blue-800">{item.country}</h2>
              <div className="flex space-x-2 items-center">
                {item.universities.length > 3 && (
                  <>
                    <button 
                      onClick={() => scroll(item._id, 'left')}
                      className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-colors"
                      aria-label="Scroll left"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => scroll(item._id, 'right')}
                      className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition-colors"
                      aria-label="Scroll right"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleDeleteCountry(item.country)}
                  className="ml-4 bg-red-100 text-red-700 px-3 py-1 text-sm rounded hover:bg-red-200 transition"
                >
                  Delete Country
                </button>
              </div>
            </div>

            <div 
              ref={el => sliderRefs.current[item._id] = el}
              className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 snap-x"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {item.universities.map((uni) => (
                <div 
                  key={uni._id} 
                  className="bg-white shadow-lg rounded-lg overflow-hidden flex-shrink-0 w-full sm:w-64 md:w-80 snap-start border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={uni.image || '/api/placeholder/400/320'} 
                      alt={uni.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-blue-800">{uni.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{uni.address}</p>
                    <p className="text-sm mt-2 text-gray-700 line-clamp-3">{uni.description}</p>
                    <div className="flex gap-3 mt-4 justify-end">
                      <button 
                        onClick={() => handleEdit(item.country, uni)} 
                        className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-100 rounded-full transition-colors"
                        aria-label={`Edit ${uni.name}`}
                      >
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.country, uni._id)} 
                        className="text-red-600 hover:text-red-800 p-1 hover:bg-red-100 rounded-full transition-colors"
                        aria-label={`Delete ${uni.name}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityAdmin;
