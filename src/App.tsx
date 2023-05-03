import './App.css';
//@ts-ignore
import Input from './components/Input.jsx'

function App() {
  const submitForm = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    console.log(payload);
  }
  return (
    <form className='bg-gray-800 w-1/3 m-auto mt-10 p-10 rounded-md flex flex-col gap-6' onSubmit={submitForm}>
      <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Sign in to your account</h1>
      <Input type="email" name="email" labelText="Email" placeholder="Your Email" />
      <Input type="password" name="password" labelText="Password" placeholder="Your Password" />
      <button type="submit" className="w-full mt-5 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
    </form>
  )
}

export default App
