import { useState } from "react";
import axios from "axios";

function AddNewCard() {
  const [display, setDisplay] = useState(true);
  const [title, setTitle] = useState("");
  const [des, setDesc] = useState("");

  const sub = async (e) => {
    e.preventDefault();

    if (!title || !des) {
      
      return;
    }

    const workout = { use: 'anis', title, des: des};

    try {
      const res = await axios.post('/', workout, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

    
      
      setTitle('');
      setDesc('');
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
            className="bg-zinc-200 p-4 rounded-sm ring-2 text-zinc-800 ring-green-400 ring-offset-2 ring-offset-current"
          >
            Add New Card
          </button>
        </div>
      ) : (
        <div className="bg-zinc-700/45 w-full min-h-svh fixed inset-0 flex justify-center items-center">
          <div className="bg-black/10 w-3/6 aspect-[16/8] rounded-md">
            <div className="w-full flex justify-end p-4">
              <button
                onClick={() => setDisplay(true)}
                className="bg-zinc-200 w-6 aspect-square rounded-md ring-2 ring-offset-2 ring-red-600 ring-offset-current"
              >
                X
              </button>
            </div>
            <form className="w-full min-h-full flex justify-center items-center flex-col gap-3" onSubmit={sub}>
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
              <button className="p-3 bg-white rounded-md ring-green-400 ring-offset-2 ring-offset-current ring-2"
                 
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
