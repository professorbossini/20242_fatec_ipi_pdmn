import React from 'react'

const PexelsLogo = () => {
  return (
    <div>
      {/* a[href="https://www.pexels.com" target="_blank"] */}
      <a href='https://www.pexels.com' target='_blank'>
        {/* img[width=75 src="https://images.pexels.com/lib/api/pexels.png"] */}
        <img 
          src='https://images.pexels.com/lib/api/pexels.png' 
          alt='Logo da Pexels' 
          width='75'
        />
      </a>
    </div>
  )
}

export default PexelsLogo