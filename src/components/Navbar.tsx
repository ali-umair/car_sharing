export default function Navbar(props: any) {
  return (
    <nav className="p-4 bg-gray-800 flex justify-between items-center border-b border-gray-700">
        <h1 className="hover:text-slate-300 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Car Sharing</h1>
        <button type="submit" onClick={props.logout} className="w-30 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign out</button>
    </nav>
  )
}
