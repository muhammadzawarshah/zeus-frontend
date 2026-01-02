import React from 'react'
import TargetFields from './sections/targetFields'
import ValidationReport from './sections/validationReport'

export default function page() {
  return (
    <div>
      <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Mapping Editor & Validation</h1>
      <TargetFields />
      <ValidationReport />
    </div>
  )
}
