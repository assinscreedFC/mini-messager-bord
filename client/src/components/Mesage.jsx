import { useEffect, useState } from "react"




function Mesage({tab,settab}){

return (
    <>
        <div className="w-full m-4 gap-2 flex flex-col">
            {tab.map((element) => {
                // Format the date
                let dateTimeString = element.created_at;
                let datePart = dateTimeString.split("T")[0];
                let timePart = dateTimeString.split("T")[1].slice(0, 5);
                let formattedDateTime = `${datePart} ${timePart}`;

                return (
                    <div key={element.id} className="p-4 rounded-md bg-zinc-300 font-medium border-l-emerald-500 border-s-8">
                        <h1>User: {element.use}</h1>
                        <h2>Title: {element.title}</h2>
                        <h3>Description: {element.des}</h3>
                        <h4>Created at: {formattedDateTime}</h4>
                    </div>
                );
            })}
        </div>
    </>
);



}
export default Mesage