import React from 'react'
import './Newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <h1>Get exclusive Offers On Your Mail</h1>
        <p>Subscribe to stay updated</p>
        <div>
            <input type="email" placeholder='Your email id' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default Newsletter