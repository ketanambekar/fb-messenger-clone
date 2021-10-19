import { useState, useEffect } from 'react';
import './App.css';
import { FormControl, IconButton, InputLabel, Input } from '@mui/material';
import Message from './components/message/Message';
import { db, collection, getDocs, getFirestore, addDoc, serverTimestamp } from './config/firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  const sendMessage = async (event) => {
    event.preventDefault();
    setMessage([...messages, { username: username, text: input }])
    const msgCol = collection(getFirestore(db), 'messages');
    var time = serverTimestamp()
    const msgSnapshot = await addDoc(msgCol, { username: username, text: input, timestamp: time });
    setInput('')
  }

  useEffect(() => {
    const name = prompt('Please enter your name');
    setUsername(name)
    return () => {
      // cleanup
    }
  }, [])

  useEffect(() => {
    getMsgs()
  })

  async function getMsgs() {
    const msgCol = collection(getFirestore(db), 'messages');
    const msgSnapshot = await getDocs(msgCol);
    const msgList = msgSnapshot.docs.map(doc => doc.data());
    setMessage(msgList)
  }

  return (
    <div className="App">
      <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c526.png" width="100" height="100" />
      <h1>Hi {username} Man!</h1>
      <form className="app__form">
        <FormControl className="app__formControl">
           <Input className="app__input" placeholder="Enter the message..." value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton className="app_iconButton" disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
          <SendIcon   />
          {/* <Button>Send Message</Button> */}
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map((message, index) => (
          // <p key={index}>{message}</p>
          <Message message={message} username={username} key={index} />
        )
        )
        }
      </FlipMove>
    </div>
  );
}

export default App;
