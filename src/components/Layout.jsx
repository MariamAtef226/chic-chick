import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./footer"

export default function Layout(props) {
    return (
        <>
        <div className="h-100">
        <NavBar cart={props.cart} add={props.add} dec={props.dec} delete={props.delete} total={props.total} tprice = {props.tprice}/>
        <div className="reactapp">
            <Outlet />
            <Footer />
            </div>
        </div>
        </>
    )
}
