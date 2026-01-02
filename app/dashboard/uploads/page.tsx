import React from 'react'
import Fileuploads from './sections/Fileuploads'
import Cards from './sections/Cards'
import UploadsList from './sections/UploadsList'

export default function page() {
  return (
    <div className='flex flex-col gap-10'>
      <div className='container m-auto'>
        <h1 className='text-4xl font-bold'>Upload Offline Data</h1>
        <p>Upload conversion data for processing and attribution</p>
      </div>
      <div>
        <Fileuploads />
        <Cards />
        <UploadsList />
      </div>
    </div>
  )
}
