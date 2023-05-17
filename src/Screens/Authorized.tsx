import { BaseSyntheticEvent, useEffect } from "react";
import Navbar from "../components/Navbar";
import '../components/modal.css'
import PopupForm from "../components/PopupForm";
import Card from "../components/Card";
import { Client, Databases, ID } from "appwrite";

export default function Authorized(props: any) {
    let modal: any;
    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("643f8a2cb1139b2566be")
    useEffect(() => {
        modal = document.querySelector("#modal");
    });
    const submitPopupForm = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        console.log(payload);
    }
    const deleteCard = (e: BaseSyntheticEvent) => {
        e.currentTarget.parentElement?.remove()
    }
    const fetch = () => {
        const databases = new Databases(client);

        // let promise = databases.listDocuments(
        //     "646483bb9e833bbe04a7",
        //     "6464840e5c84b9faab38"
        // );

        // promise.then(function (response) {
        //     console.log(response);
        // }, function (error) {
        //     console.log(error);
        // });

        // const promise = databases.createDocument('646483bb9e833bbe04a7', '6464840e5c84b9faab38', ID.unique(), {
        //     Pickup: "jslkdjfsjfksdjf",
        //     Dropoff: "kjdsflksjdlkfjsadf",
        //     Date: "04/05/2023",
        //     Time: "09:00 AM",
        //     Fare: 500,
        //     AC: true
        // });

        // promise.then(function (response) {
        //     console.log(response); // Success
        // }, function (error) {
        //     console.log(error); // Failure
        // });

        const promise = databases.deleteDocument('646483bb9e833bbe04a7', '6464840e5c84b9faab38', '6464966954538010ab1f');

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }
    return (
        <div className="text-white">
            <Navbar logout={props.logout} />
            {/* <Card deleteCard={deleteCard}/>
            <Card deleteCard={deleteCard}/>
            <Card deleteCard={deleteCard}/>
            <Card deleteCard={deleteCard}/>
            <Card deleteCard={deleteCard}/>
            <Card deleteCard={deleteCard}/>
            <Card deleteCard={deleteCard}/>
            <Card deleteCard={deleteCard}/> */}
            <button onClick={fetch}>Fetch documents</button>
            <button id="fab" onClick={() =>
                modal.showModal()}
                className="fixed bottom-0 right-0 m-10 w-30 p-5 text-white bg-blue-600 hover:bg-blue-700 rounded-full dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-900">
                <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6 mx-auto">
                    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z" />
                </svg>
            </button>
            <dialog className="w-4/5 p-10 rounded-lg" id="modal">
                <button onClick={() => {
                    modal.close()
                }} className="close-button w-30 text-white font-medium hover:text-slate-500 rounded-lg text-sm px-5 py-2.5 text-center absolute top-3 right-1">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <PopupForm submitPopupForm={submitPopupForm} />
            </dialog>
        </div>
    )
}