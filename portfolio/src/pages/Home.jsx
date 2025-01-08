import { Link } from "react-router-dom"

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
                    <div class="bg-stone-200 m-2 rounded-md shadow-md col-span-4">
                        p
                    </div>
                    <div class="bg-stone-200 m-2 rounded-md shadow-md col-span-4">
                        p 
                    </div>

                </div>
                <div>
                    <div class="bg-stone-200 mx-2 mb-4 mt-2 rounded-md shadow-md">
                        p
                    </div>
                    <div class="bg-stone-200 mx-2 mt-4 rounded-md shadow-md">
                        p 
                    </div>

                </div>

                
            </div>


        </>
    )

}