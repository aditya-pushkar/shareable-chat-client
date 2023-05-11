import React from 'react'

const RootLayout = ({children}) => {
  return (
    <div className='flex justify-center'>
        {children}
    </div>
  )
}

export default RootLayout