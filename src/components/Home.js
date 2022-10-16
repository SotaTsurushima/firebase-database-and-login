import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { SignInButton } from './login/SignInButton'
import { SignOutButton } from './login/SignOutButton'
import { UserInfo } from './login/UserInfo'
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
        <UserInfo />
        <SignOutButton />
      </>
      ) : 
        <SignInButton />
      }
    </div>
  )
}

export default Home