import React from 'react'

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

function Footer({ ...props }: FooterProps) {
  return (
    <footer {...props} className='pt-10'>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </footer>
  )
}

export default Footer
