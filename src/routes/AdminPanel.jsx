import React from 'react'
import AdminSliderPanel from '../components/AdminSliderPanel'
import CourseManager from '../components/courseManager'
import UniversityAdmin from '../components/universityAdmin'

const AdminPanel = () => {
  return (
    <div className='bg-blue-200'>
      <AdminSliderPanel/>
      <CourseManager/>
      <UniversityAdmin/>
    </div>
  )
}

export default AdminPanel
