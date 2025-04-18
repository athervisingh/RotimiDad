import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil } from 'lucide-react';

const AdminSliderPanel = () => {
  const [selectedSlider, setSelectedSlider] = useState('');
  const [sliderData, setSliderData] = useState([]);
  const [editingSlideIndex, setEditingSlideIndex] = useState(null);
  const [formData, setFormData] = useState({ text: '', color: '' });
  const [imageFile, setImageFile] = useState(null);
  const [iconFile, setIconFile] = useState(null);

  useEffect(() => {
    if (selectedSlider) {
      axios
        .get(`/api/sliders/${selectedSlider.toLowerCase()}`)
        .then(res => {
          setSliderData(res.data?.slides || []);
        })
        .catch(err => {
          console.error('Error fetching slider data:', err);
          setSliderData([]);
        });
    } else {
      setSliderData([]);
    }
  }, [selectedSlider]);

  const openEditForm = (slide, idx) => {
    setEditingSlideIndex(idx);
    setFormData({ text: slide.text, color: slide.color });
    setImageFile(null);
    setIconFile(null);
  };

  const handleFormChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e, type) => {
    if (type === 'src') setImageFile(e.target.files[0]);
    else if (type === 'src2') setIconFile(e.target.files[0]);
  };

  const handleSave = async () => {
    try {
      const form = new FormData();
      form.append('text', formData.text);
      form.append('color', formData.color);
      if (imageFile) form.append('src', imageFile);
      if (iconFile) form.append('src2', iconFile);
  
      // Change PUT to POST here:
      const putUrl = `/api/sliders/${selectedSlider.toLowerCase()}/${editingSlideIndex}`;
      const res = await axios.post(putUrl, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      const updatedSlide = res.data;
      const updatedSlides = [...sliderData];
      updatedSlides[editingSlideIndex] = updatedSlide;
      setSliderData(updatedSlides);
      setEditingSlideIndex(null);
    } catch (err) {
      console.error('Failed to update slide:', err);
    }
  };
  

  return (
    <div className="p-4 mt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Admin Panel</h2>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
          <img src="/admin-avatar.png" alt="Admin" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Dropdown */}
      <select
        value={selectedSlider}
        onChange={(e) => setSelectedSlider(e.target.value)}
        className="p-2 border rounded mb-4"
      >
        <option value="">Select a Slider</option>
        <option value="slider1">Slider 1</option>
        <option value="slider2">Slider 2</option>
      </select>

      {/* Slides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {sliderData.map((slide, idx) => (
          <div key={idx} className="border p-3 rounded shadow bg-white relative">
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => openEditForm(slide, idx)}
            >
              <Pencil size={18} />
            </div>
            <div className="h-32 w-full bg-gray-100 flex items-center justify-center mb-2">
              <img src={slide.src} alt={slide.text} className="h-full object-contain" />
            </div>
            <p className="text-sm"><strong>Title:</strong> {slide.text}</p>
            <p className="text-sm"><strong>Color:</strong> {slide.color}</p>
            <div className="h-16 w-full mt-2">
              <img src={slide.src2} alt="Icon" className="h-full object-contain" />
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingSlideIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-lg">
            <h3 className="text-xl font-bold mb-4">Edit Slide</h3>
            <input
              type="text"
              name="text"
              placeholder="Title"
              value={formData.text}
              onChange={handleFormChange}
              className="w-full p-2 border mb-2"
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={formData.color}
              onChange={handleFormChange}
              className="w-full p-2 border mb-2"
            />
            <label className="block mb-1 text-sm font-medium">Main Image</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 'src')}
              className="w-full mb-3"
            />

            <label className="block mb-1 text-sm font-medium">Icon Image</label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, 'src2')}
              className="w-full mb-4"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingSlideIndex(null)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSliderPanel;
