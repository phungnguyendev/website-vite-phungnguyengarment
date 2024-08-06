import React from 'react'

const useTitle = (title: string) => {
  const _title = title + ' - Phung Nguyen'
  const documentDefined = typeof document !== 'undefined'
  const originalTitle = React.useRef(documentDefined ? document.title : null)

  React.useEffect(() => {
    if (!documentDefined) return

    if (document.title !== _title) document.title = _title

    return () => {
      document.title = originalTitle.current ?? ''
    }
  }, [])
}

export default useTitle
