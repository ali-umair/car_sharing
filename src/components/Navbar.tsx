export default function Navbar(props: any) {
  return (
    <nav className="p-4 bg-gray-800 flex justify-between items-center border-b border-gray-700">
        <h1 className="hover:text-slate-300 text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">Car Sharing</h1>
        <button type="submit" onClick={props.logout} className="w-30 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Sign out</button>
    </nav>
  )
}
