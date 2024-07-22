import { useState } from "react"

function AddNewCard(){
    const [display,setdisplay]=useState(true)



        return(
            <>
            {display ? 
                
                <div>
                    <button onClick={()=>setdisplay(false)}  className="bg-zinc-200 p-4 rounded-sm ring-2 text-zinc-800 ring-green-400 ring-offset-2 ring-offset-current">Add New Card</button>
                </div>
                        
                      

                : 
                
                    <div className="bg-zinc-700/45 w-full min-h-svh fixed inset-0 flex justify-center items-center">
                        
                        <div className="bg-black/10 w-3/6 aspect-[16/8] rounded-md"><div className="  w-full flex justify-end p-4">
                            <button onClick={()=>setdisplay(true)} className="bg-zinc-200 w-6 aspect-square rounded-md ring-2 ring-offset-2 ring-red-600 ring-offset-current"> X</button>
                            
                        </div>
                        <form className="w-full min-h-full flex justify-center items-center flex-col gap-3" >
                            <label htmlFor="title"  className="text-white">title:</label>
                            <input type="text" name="title" id="title" className="p-1 rounded-md"/>
                            <label htmlFor="desc" className="text-white">desc:</label>
                            <input type="text" name="desc" id="desc" className="p-1 rounded-md"/>
                            <button className="p-3  bg-white rounded-md  ring-green-400 ring-offset-2 ring-offset-current ring-2"> submite</button>
                            
                        </form>

                        </div>
                    </div>
                
                }
            </>
            

        )
}
export default AddNewCard