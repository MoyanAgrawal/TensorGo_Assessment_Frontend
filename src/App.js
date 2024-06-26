import { useEffect } from 'react';
import Fbportal from './feedback_portal';
import Login from './login';
import { gapi } from 'gapi-script';

const clientId =
  "654606948073-0r05k4qmucqpsti540ierkr58gc7ome4.apps.googleusercontent.com";

function App() {
  useEffect(() =>{
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });
  
  let userid = localStorage.getItem("fullname");
  if(userid == null)
   return (<Login/>)
  else
  return (<Fbportal/>)
}

export default App;
