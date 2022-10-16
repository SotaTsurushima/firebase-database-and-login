import React from 'react'
import { auth } from '../../firebase'

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Sign Out</p>
    </button>
  )
}

export { SignOutButton }