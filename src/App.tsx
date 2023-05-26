import { useState } from 'react';
import './App.css';
//@ts-ignore
import { Client, Account } from 'appwrite';
import LoginForm from './components/LoginForm';
import Authorized from "./Screens/Authorized";
import Spinner from './components/Spinner';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("643f8a2cb1139b2566be");
  const account = new Account(client);
  const [userLoggedIn, setUserLoggedIn] = useState("false");
  const loadingToastOptions: ToastOptions<any> = {
    theme: "dark",
    closeButton: true
}

  const submitForm = (e: any) => {
    setUserLoggedIn("loading");
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

    const tl = toast.loading("Please wait...", loadingToastOptions)
    const promise = account.createEmailSession(`${payload.email}`, `${payload.password}`);
    promise.then(
      (res) => {
        console.log(res);
        toast.update(tl, { render: "User Login Successfull", type: "success", isLoading: false, autoClose: 3000 })
        setUserLoggedIn("true");
      },
      (err) => {
        console.log(err);
        toast.update(tl, { render: err.message, type: "error", isLoading: false, autoClose: 3000 })
        setUserLoggedIn("false");
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
    const promise = account.listSessions();
    const tl = toast.loading("Please wait...", loadingToastOptions)
    promise.then(
      function (response: any) {
        response.sessions.forEach((session: any) => {
          const promise = account.deleteSession(session.$id);
          promise.then(function (response: any) {
            const promise = account.listSessions();
            promise.then(function (response: any) {
              console.log("Sessions remaining: ", response);
            }, function (error) {
              toast.update(tl, { render: "User Logout successfull", type: "success", isLoading: false, autoClose: 3000 })
              setUserLoggedIn("false");
            })
          }, function (error) {
            toast.update(tl, { render: error.message, type: "error", isLoading: false, autoClose: 3000 })
            setUserLoggedIn("false");
          })
        })
      }, function (error) {
        console.log("User has no active sessions");
        toast.update(tl, { render: error.message, type: "error", isLoading: false, autoClose: 3000 })
        setUserLoggedIn("false");
      }
    )
    // console.log(sessionsId);
  };

  const OAuth = () => {
    account.createOAuth2Session('google');
  }

  let mainComponent: any;
  if (userLoggedIn == "true") mainComponent = [<Authorized logout={logout} />, <ToastContainer />]
  else if (userLoggedIn == "loading") mainComponent = [<Spinner />, <ToastContainer />]
  else if (userLoggedIn == "signingOut") mainComponent = [<Spinner />, <ToastContainer />]
  else mainComponent = [<LoginForm submitForm={submitForm} OAuth={OAuth} />, <ToastContainer />]

  return (
    mainComponent
  )
}

export default App
