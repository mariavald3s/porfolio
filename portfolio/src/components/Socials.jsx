import resume from "../assets/MariaValdes_ResumeSD.pdf"

export function Socials() {
    return (
        <>
        <div class="flex justify-evenly uppercase">
            <a href="https://www.linkedin.com/in/maria-valdes-a35800212/" target="_blank">LinkedIn</a>
            <a href="https://github.com/mariavald3s" target="_blank">GitHub</a>
            <a href={resume} id="pdfLink" target="_blank">CV</a>
        </div>
        </> 
    ) 
}