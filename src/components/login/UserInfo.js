import React from 'react'
import { auth } from '../../firebase'

function UserInfo() {
  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt="" style={{borderRadius: '50px'}} />
      <h2>{auth.currentUser.displayName}</h2>
    </div>
  )
}

export { UserInfo }