import Navbar from "../components/Navbar";

export default function Authorized(props: any) {
    return (
        <Navbar logout={props.logout}/>
    )
}
