import React, { useRef, useState } from 'react';
import './App.css';

// user authentication - firebase sdk
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDENdlwyW1NSKYLtjIuKEbdw42w7K1l8bw",
    authDomain: "superchat-c5489.firebaseapp.com",
    projectId: "superchat-c5489",
    storageBucket: "superchat-c5489.appspot.com",
    messagingSenderId: "349703311020",
    appId: "1:349703311020:web:ef7a6e904892130df21909",
    measurementId: "G-7L2ZSDDWHY"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth); //(signed in) -> user is an object (signed out) -> user is null
  return (
    <div className="App">
      <header>
        
      </header>
      <section>
        {/* if user: showChatroom else: show SignIn */}
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}> Sign in with Google </button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={()=> auth.signOut()}> Sign Out </button>
  )
}


function ChatRoom() {

  const ex = useRef()
  
  // references a firestore collection
  const messagesRef = firestore.collection('messages');

  //query docs. in a collection
  const query = messagesRef.orderBy('createdAt').limit(25);

  //listen to data w/ hook
  const [messages] = useCollectionData(query, { idField: 'id' });
  //reacts to changes in rta

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    // create new doc in firestore
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });
    setFormValue('');

    ex.current.scrollIntoView({behavior:"smooth"});
  }

  return (
    <>
      <main>
        {/* loops over each doc */}
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <div ref={ex}></div>
      </main>
      {/* write value to firestore */}
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

        <button type="submit"> 🕊 </button>
</form>


      <div>
      </div>
    </>
  )
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'recieved';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL}/>
    <p>{text}</p>
</div>
  )
}

export default App;
