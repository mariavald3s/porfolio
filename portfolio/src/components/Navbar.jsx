import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <>
            <nav class="flex flex-row bg-stone-200 p-4 rounded-md justify-between shadow-md">
                <div>
                    <Link to="/">Maria Angelica Valdes</Link>
                </div>
                <div>
                    <Link class="pl-2" to="/projects">Projects</Link>
                    <Link class="pl-2" to="/certifications">Certifications</Link>
                    <Link class="pl-2" to="/contact">Contact Me</Link>
                </div>
                    
            </nav>
        </>
    )

}