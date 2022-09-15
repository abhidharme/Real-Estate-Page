import React from 'react'
import "./Navbar.css"
import { SiHomeadvisor } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='navbar_box'>

       <div  id="IconName">
        <div  className='IconBox'>
          <div onClick={()=>navigate('/')} className='homeIcon' >
            <SiHomeadvisor fontSize={'40px'} />
          </div>
          <div>
            <h4>Rental Home</h4>
          </div>
          </div>

          <div className='names'>
        <div onClick={()=>navigate('/')}>
          <h5>Rents</h5>
        </div>
        <div onClick={()=>navigate('/favourite')} >
          <h5>My Favourite's</h5>
        </div>
      </div>
     
        </div>

        <div className='buttonBox'>
        <div>
          <button>Login</button>
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </div>

      </div>
    </>
  )
}
