import Input from './Input'

export default function PopupForm() {
  return (
    <dialog className="modal" id="modal">
                <h2>An interesting title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse nisi, laboriosam illum temporibus ipsam?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.</p>
                <button className="close-button w-30 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">close modal</button>
                <form className="form" method="dialog">
                    <Input />
                    <label>Your email <input type="email" /></label>
                    <button className="w-30 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">submit form</button>
                </form>
            </dialog>
  )
}
