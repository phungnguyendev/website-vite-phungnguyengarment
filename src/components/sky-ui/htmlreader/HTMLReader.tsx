// import 'froala-editor/css/froala_editor.pkgd.min.css'
// import 'froala-editor/css/froala_style.min.css'
// import 'froala-editor/js/plugins.pkgd.min.js'
import React from 'react'
import './style.css'

export interface HTMLReaderProps {
  htmlString: string
}

const HTMLReader: React.FC<HTMLReaderProps> = ({ htmlString }) => {
  return (
    <>
      <div className='fr-view' dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  )
}

export default HTMLReader
