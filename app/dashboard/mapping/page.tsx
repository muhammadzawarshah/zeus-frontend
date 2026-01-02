import React from 'react'
import CreateTemp from './section/createTemplate'
import SearchTemp from './section/searchTemplates'
import MappingCardList from './section/MappingCardList'
import MappingCanvasPreview from './section/MappingCanvasPreview'

export default function mapping() {
  return (
    <div className='bg-bgDark'>
        <CreateTemp />
        <SearchTemp />
        <MappingCardList />
        <MappingCanvasPreview />
    </div>
  )
}
