import React from 'react'
import '../WhyeruLogo/Whyerulogo.scss'
function Whyerulogo({logo,name}) {
  return (
    <>
    <div className="logo-container">
     <div className="logo">
        <img src={logo} alt="LOGOs" />
     </div>
     <div className="text-logo">
        <span>{name}</span>
     </div>
     </div>
    </>
  )
}

export default Whyerulogo