import { useEffect, useState } from 'react';
import './App.css';
import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore"
import Home from "./components/Home"

function App() {
  const [posts, setPosts] = useState([])
  // reload時の挙動
  useEffect(() => {
    const postData = collection(db, "posts")
    getDocs(postData).then((snapShot) => {
      setPosts(snapShot.docs.map((doc) => ({  ...doc.data()  })))
    })
  }, [])
  return (
    <div className="App">
      <h1>firebaseでログインをしよう</h1>
      <Home />
      {posts.map((post) => (
        <div key={post.title} style={{marginTop: '300px'}}>
          <h1>Firestoreを使ってみる</h1>
          <p>{post.title}</p>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
