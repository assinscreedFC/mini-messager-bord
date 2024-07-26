import { useState,useEffect } from "react";
import axios from "axios";



function AddNewCard({tab,settab}) {
  const [display, setDisplay] = useState(true);
  const [title, setTitle] = useState("");
  const [des, setDesc] = useState("");
  const [use,setUser]=useState("");
  

  const sub = async (e) => {
    e.preventDefault();
fetch('/api/msg')
  .then(response => response.json())
  .then(json => console.log(json))
    if (!title || !des) {
      
      return;
    }

    const workout = { use, title, des};

    try {
      const res = await axios.post('/api/env', workout, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(res);
      const br=[...tab,res.data];
      settab(br);
    
      
      setTitle('');
      setDesc('');
      setUser("");
      setDisplay(true);
    } catch (err) {
      console.error('Axios error:', err);
      
    }
  };
  
    
   
    

  

  return (
    <>
      {display ? (
        <div>
          <button
            onClick={() => setDisplay(false)}
            className="bg-zinc-300 p-4 rounded-sm ring-2 font-semibold ring-green-400 ring-offset-2 ring-offset-current"
          >
            Add New Card
          </button>
        </div>
      ) : (
        <div className="bg-zinc-900/75 w-full min-h-svh fixed inset-0 flex justify-center items-center">
          <div className="bg-black/50  w-3/6 aspect-[16/8] rounded-md">
            <div className="w-full flex justify-end p-4">
              <button
                onClick={() => setDisplay(true)}
                className="bg-zinc-200 w-6 aspect-square rounded-md ring-2 ring-offset-2 ring-red-600 ring-offset-current"
              >
                X
              </button>
            </div>
            <form className="w-full min-h-full flex justify-center items-center  flex-col gap-3" onSubmit={sub}>
            <label htmlFor="title" className="text-white">
                user:
              </label>
              <input
                type="text"
                name="user"
                id="user"
                className="p-1 rounded-md"
                value={use}
                onChange={(e) => setUser(e.target.value)}
              />
              <label htmlFor="title" className="text-white">
                Title:
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="p-1 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="des" className="text-white">
                Description:
              </label>
              <input
                type="text"
                name="des"
                id="des"
                className="p-1 rounded-md"
                value={des}
                onChange={(e) => setDesc(e.target.value)}
              />
              <button className="p-4 my-9 bg-zinc-100 rounded-md ring-green-500 font-semibold text-zinc-950 text-lg ring-offset-2 ring-offset-current ring-2"
                   
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AddNewCard;
