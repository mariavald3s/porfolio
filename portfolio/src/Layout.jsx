import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
        <div class="h-screen bg-indigo-950">
            <div class="p-4">
                <Navbar/>

            </div>
            <main>
                <Outlet/>
            </main>

        </div>

        </>
    )
}