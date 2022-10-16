import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SignInButton } from './login/SignInButton'
import { SignOutButton } from './login/SignOutButton'
import { auth } from '../firebase'

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

function UserInfo() {
  return (
    <div className="userInfo">
      <img src={auth.currentUser.photoURL} alt="" style={{borderRadius: '50px'}} />
      <h2>{auth.currentUser.displayName}</h2>
    </div>
  )
}