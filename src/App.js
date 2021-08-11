import { Header } from "./components/Header/Header";
import { Container, Snackbar } from '@material-ui/core';
import { SendTweet } from "./components/SendTweet/SendTweet";
import { useState } from "react";
import { useEffect } from "react";
import {TWEETS_STORAGE} from './utils/Constants';
import ListTweets from "./components/ListTweets";
function App() {

  const [toastProps,setToatsProps] = useState({
    open: false,
    text:null,
  });

  const [allTweets, setAllTweets] = useState([]);
  const[reloadTweets,setReloadTweets] = useState(false);

  useEffect(() => {
   const allTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
   const allTweetsArray = JSON.parse(allTweetsStorage);
   setAllTweets(allTweetsArray);
   setReloadTweets(false);
  },[reloadTweets]);


  const deleteTweet = (index) => {

    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(TWEETS_STORAGE,JSON.stringify(allTweets));
    setReloadTweets(true);

  }

  
  return (
    <Container className="tweets-simulator" maxWidth={false}>

      <Header />

      <SendTweet setToatsProps={setToatsProps} allTweets={allTweets}/>
      <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>

      <Snackbar 
      anchorOrigin={{ 
        vertical: 'top',
        horizontal: 'right',

       }}
       open={toastProps.open}
       autoHideDuration={1000}
       message={<span id='messageId'>{toastProps.text}</span>}
      />

    </Container>
  );
}

export default App;
