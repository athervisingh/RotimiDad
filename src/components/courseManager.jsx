import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, Trash2, PlusCircle } from 'lucide-react';

const API = '/api/courses';

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ category: '', courses: [{ name: '', duration: '' }] });
  const [editingId, setEditingId] = useState(null);

  const fetchCourses = async () => {
    const res = await axios.get(API);
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleChange = (e, index) => {
    const newCourses = [...form.courses];
    newCourses[index][e.target.name] = e.target.value;
    setForm({ ...form, courses: newCourses });
  };

  const handleAddCourseField = () => {
    setForm({ ...form, courses: [...form.courses, { name: '', duration: '' }] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`${API}/${editingId}`, form);
    } else {
      await axios.post(API, form);
    }
    setForm({ category: '', courses: [{ name: '', duration: '' }] });
    setEditingId(null);
    fetchCourses();
  };

  const handleEdit = (course) => {
    setForm(course);
    setEditingId(course._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchCourses();
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Course Management Panel</h1>

      <div className="bg-white shadow-md rounded-xl p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">{editingId ? 'Edit Course' : 'Add New Course'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Category"
            className="w-full p-2 border rounded-md"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
          />
          {form.courses.map((c, idx) => (
            <div key={idx} className="flex gap-2">
              <input
                type="text"
                name="name"
                placeholder="Sub Course Name"
                className="flex-1 p-2 border rounded-md"
                value={c.name}
                onChange={(e) => handleChange(e, idx)}
                required
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                className="w-1/3 p-2 border rounded-md"
                value={c.duration}
                onChange={(e) => handleChange(e, idx)}
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddCourseField}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <PlusCircle size={20} /> Add Sub Course
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {editingId ? 'Update Course' : 'Add Course'}
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">All Courses</h2>
        {courses.map(course => (
          <div key={course._id} className="mb-4 border-b pb-2">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{course.category}</h3>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(course)} className="text-blue-600 hover:text-blue-800">
                  <Pencil size={18} />
                </button>
                <button onClick={() => handleDelete(course._id)} className="text-red-600 hover:text-red-800">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <ul className="list-disc list-inside ml-4 space-y-1">
  {course.courses.map((sub, i) => (
    <li key={i} className="items-center pr-2">
      <span>{sub.name} - {sub.duration}</span>
      <button
        onClick={async () => {
          await axios.delete(`${API}/${course._id}/subcourse/${i}`);
          fetchCourses();
        }}
        className="text-red-600 hover:text-red-800 ml-2"
        title="Delete Sub-Course"
      >
        <Trash2 size={16} />
      </button>
    </li>
  ))}
</ul>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManager;