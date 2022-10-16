import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth,provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'


function Home() {
  const [user] = useAuthState(auth)

  return (
    <div>
      {/* 
        ユーザー情報が存在する場合: ユーザー情報画面、ログアウトボタンを表示
        ユーザー情報が存在しない場合: ログインボタンを表示
      */}
      {user ? (
      <>
        <div>
          <UserInfo />
        </div>
        <div>
          <SignOutButton />
        </div>
      </>
      ) : 
        <SignInButton />
      }
    </div>
  )
}

export default Home

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

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Sign Out</p>
    </button>
  )
}

function UserInfo() {

  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt="" style={{borderRadius: '50px'}} />
      <h2>{auth.currentUser.displayName}</h2>
    </div>
  )
}