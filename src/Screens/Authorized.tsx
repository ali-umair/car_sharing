import { BaseSyntheticEvent, MouseEventHandler, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import '../components/modal.css'
import PopupForm from "../components/PopupForm";
import { Client, Databases, ID } from "appwrite";
import Spinner from "../components/Spinner";
import { ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardNew from "../components/CardNew";

export default function Authorized(props: any) {

    // Popup Form Modal
    let modal: any;
    useEffect(() => {
        modal = document.querySelector("#modal");
    })

    // Appwrite boilerplate
    const client = new Client()
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("643f8a2cb1139b2566be");

    const databases = new Databases(client);

    // Fetching data on App load
    useEffect(() => {
        let promise = databases.listDocuments(
            "646483bb9e833bbe04a7",
            "6464c72c42d713406988"
        );

        promise.then(function (response: any) {
            console.log(response);
            setData(response.documents);
            // response.documents.forEach(document => {
            //     //@ts-ignore
            //     // setCards((current: any) => [...current, <Card />]);
            // });

        }, function (error) {
            console.log(error);
        });
    }, []);

    // Toaster options
    const loadingToastOptions: ToastOptions<any> = {
        theme: "dark",
        closeButton: true
    }



    // Interfaces and Objects
    interface payload {
        pickup_location: string,
        dropoff_location: string,
        date: string,
        time: string,
        fare: number,
        carType?: string,
        AC: string,
        comments?: string
    }
    const colors = {
        error: "#ef4444",
        success: "#22c55e",
    }

    // States
    const [Data, setData] = useState();
    const data: any = Data;

    // Methods
    // Method for submitting popup form data
    const submitPopupForm = (e: any) => {
        // Preventing default action
        e.preventDefault();
        const formData: FormData = new FormData(e.target);
        const payload: any = Object.fromEntries(formData);

        // Creatin Promise
        const promise = databases.createDocument('646483bb9e833bbe04a7', '6464c72c42d713406988', ID.unique(), payload);

        // Loading toaster
        const tl = toast.loading("Please wait...", loadingToastOptions)

        // Fetching data (Promise)
        // Promise Chaining
        // First promise for adding record in DB (Appwrite)
        promise.then(function (response) {
            console.log(response); // Success for first promise
            toast.update(tl, { render: "Record added successfully", type: "success", isLoading: false, autoClose: 3000 })
            let promise = databases.listDocuments(
                "646483bb9e833bbe04a7",
                "6464c72c42d713406988"
            );

            //Second promise for loading updated documents in app
            promise.then(function (response: any) {
                console.log(response); // Success for second promise
                toast.update(tl, { render: "List updated successfully", type: "success", isLoading: false })
                setData(response.documents);
                // response.documents.forEach(document => {
                //     //@ts-ignore
                //     // setCards((current: any) => [...current, <Card />]);
                // });

            }, function (error) {
                console.log(error); // Failure for second promise
                toast.update(tl, { render: error.message, type: "error", isLoading: false })
            });
        }, function (error) {
            console.log(error); // Failure for first promise
            toast.update(tl, { render: error.message, type: "error", isLoading: false })
        });

        // Closing popup form after successful submission
        modal.close();

    }

    // Method for deleting entry
    const deleteCard = (e: BaseSyntheticEvent) => {
        let card = e.currentTarget.parentElement;
        let cardId = card.querySelector("#id").textContent;
        const promise = databases.deleteDocument('646483bb9e833bbe04a7', '6464c72c42d713406988', cardId);
        const tl = toast.loading("Please wait...", loadingToastOptions)
        promise.then(function (response) {
            console.log(response); // Success
            // Remove card if delete request is successful
            card.remove();
            toast.update(tl, { render: "Card deleted successfully", type: "success", isLoading: false, autoClose: 3000 })
        }, function (error) {
            console.log(error); // Failure
            toast.update(tl, { render: error.message, type: "error", isLoading: false, autoClose: 3000, })
        });
    }
    
    return (
        <div className="">
            <Navbar logout={props.logout} />
            <div className="flex justify-center gap-5 flex-wrap px-2">
                {/* Using map to generate components iteratively */}
                {
                    data.map((item: any, index: number) => (
                        <CardNew doc={item} deleteCard={deleteCard} />
                    ))
                }
            </div>
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