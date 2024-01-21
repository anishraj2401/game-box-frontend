import Header from "./routing/Header";
import Footer from "./routing/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}