import { useState } from 'react';
import './App.css';
//@ts-ignore
import Input from './components/Input.js'
import { Client, Account, ID } from 'appwrite';
import LoginForm from './components/LoginForm';

function App() {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("643f8a2cb1139b2566be");
  const account = new Account(client);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  let sessionsId: Array<string> = [];

  const submitForm = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    const promise = account.createEmailSession(`${payload.email}`, `${payload.password}`);
    promise.then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  const check = async () => {
    let log = await account.get();
    console.log(log);
  }

  const session = () => {
    const promise = account.listSessions();
    sessionsId = [];

    promise.then(
      function (response: any) {
        console.log(response); // Success
        response.sessions.forEach((session: any) => {
          sessionsId.push(session.$id);
        });
        console.log(sessionsId);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  const logout = () => {
    console.log(sessionsId);
    sessionsId.forEach(id => {
      const promise = account.deleteSession(id);

      promise.then(
        function (response) {
          console.log(response); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    });
  };

  let mainComponent = <LoginForm submitForm={submitForm} check={check} session={session} logout={logout} />

  return (
    mainComponent
  )
}

export default App
