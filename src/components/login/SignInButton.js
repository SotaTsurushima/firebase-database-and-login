import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../../firebase'


function SignInButton() {
  const signInWithGoogle = () => {
    // firebaseを使ってgoogleでログイン
    signInWithPopup( auth, provider )
  }

  return (
    <button onClick={signInWithGoogle}>
      <p>Sign In</p>
    </button>
  )
}

export { SignInButton }