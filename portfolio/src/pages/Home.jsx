import { Link } from "react-router-dom"
import { Socials } from "../components/Socials.Jsx"
import topRightArrow from "../assets/top-right.png"

export function Home() {
    return (
        <>
            <h1>
                This is the Home page.
            </h1>
            <div class="grid grid-cols-4 px-2">
                <div class="grid grid-cols-8 col-span-3">
                    <div class="bg-stone-200 m-2 rounded-md shadow-md col-span-5">
                        p
                    </div>
                    <div class="bg-stone-200 m-2 rounded-md shadow-md col-span-3">
                    p  
                    </div>
                    <div class="bg-stone-200 m-2 rounded-md shadow-md col-span-4 px-4 pb-4 pt-20">
                        <p class="text-sm">
                        Enthusiastic Computer Science professional with foundational experience in software development.
Proficient in technologies such as Python, PHP, Java, TypeScript, HTML, CSS, JavaScript, Vue.js, and
Firebase. Skilled in developing WordPress plugins, creating dynamic web applications, and optimizing
workflows. Experienced in leveraging Microsoft 365 tools such as Word, Excel, PowerPoint, and
SharePoint to support collaborative and efficient work environments. Passionate about solving complex
problems and contributing to innovative technological solutions. 
                        </p>
                    </div>
                    <div class="bg-stone-200 m-2 rounded-md shadow-md col-span-4">
                        <div class="grid grid-cols-2 p-4">
                            <p>Feel free to</p>
                            <img class="size-3 justify-self-end" src={topRightArrow} alt="Arrow" />
                            
                            <h1 class="pt-4 font-bold text-xl">Contact Me!</h1>
                        </div> 
                    </div>

                </div>
                <div>
                    <div class="bg-stone-200 mx-2 mb-4 mt-2 rounded-md shadow-md">
                        p
                    </div>
                    <div class="bg-stone-200 mx-2 mt-4 p-6 rounded-md shadow-md">
                        <Socials /> 
                    </div>

                </div>

                
            </div>


        </>
    )

}