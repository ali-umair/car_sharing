import './App.css';
//@ts-ignore
import Input from './components/Input.jsx'
import { Client, Account, ID } from 'appwrite';

function App() {
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("643f8a2cb1139b2566be");
  const account = new Account(client);

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
    console.log(payload.email);
  }
  return (
    <form className='bg-gray-800 w-1/3 m-auto mt-10 p-10 rounded-md flex flex-col gap-6' onSubmit={submitForm}>
      <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Sign in to your account</h1>
      <Input type="email" name="email" labelText="Email" placeholder="Your Email" />
      <Input type="password" name="password" labelText="Password" placeholder="Your Password" />
      <button type="submit" className="w-full mt-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
      <button
        className="px-4 py-2 border flex gap-4 justify-center border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:text-slate-400 duration-150">
        <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
        <span>Login with Google</span>
      </button>
    </form>
  )
}

export default App
