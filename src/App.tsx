import { useState } from 'react';
import './App.css';
//@ts-ignore
import { Client, Account } from 'appwrite';
import LoginForm from './components/LoginForm';
import Authorized from "./Screens/Authorized";
import Spinner from './components/Spinner';

function App() {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("643f8a2cb1139b2566be");
  const account = new Account(client);
  const [userLoggedIn, setUserLoggedIn] = useState("true");

  const submitForm = (e: any) => {
    setUserLoggedIn("loading");
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    const promise = account.createEmailSession(`${payload.email}`, `${payload.password}`);
    promise.then(
      (res) => {
        console.log(res);
        setUserLoggedIn("true");
      },
      (err) => {
        console.log(err);
        setUserLoggedIn("false");
        alert("Wrong Email or Password");
      }
    );
  }

  // const session = () => {
  //   const promise = account.listSessions();
  //   sessionsId = [];

  //   promise.then(
  //     function (response: any) {
  //       console.log(response); // Success
  //       response.sessions.forEach((session: any) => {
  //         sessionsId.push(session.$id);
  //       });
  //       console.log(sessionsId);
  //     },
  //     function (error) {
  //       console.log(error); // Failure
  //     }
  //   );
  //   return sessionsId;
  // };

  const logout = async () => {
    setUserLoggedIn("signingOut");
    let sessionsId: Array<string> = [];
    const promise = account.listSessions();
    promise.then(
      function (response: any) {
        response.sessions.forEach((session: any) => {
          sessionsId.push(session);
          const promise = account.deleteSession(session.$id);
          promise.then(function (response: any) {
            // console.log(response);
            console.log(session.$id, " - terminated");
            const promise = account.listSessions();
            promise.then(function (response: any) {
              console.log("Sessions remaining: ", response);
            }, function (error) {
              console.log("All sessions terminated");
              setUserLoggedIn("false");
            })
          }, function (error) {
            alert("User session doesn't exit");
            setUserLoggedIn("false");
          })
        })
      }, function (error) {
        console.log("User has no active sessions");
        setUserLoggedIn("false");
      }
    )
    // console.log(sessionsId);
  };

  const OAuth = () => {
    account.createOAuth2Session('google');
  }

  let mainComponent: any;
  if (userLoggedIn == "true") mainComponent = <Authorized logout={logout} />
  else if (userLoggedIn == "loading") mainComponent = <Spinner />
  else if (userLoggedIn == "signingOut") mainComponent = <Spinner />
  else mainComponent = <LoginForm submitForm={submitForm} OAuth={OAuth} />

  return (
    mainComponent
  )
}

export default App
