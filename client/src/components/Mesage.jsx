import { useEffect, useState } from "react"




function Mesage(){
    const [tab,settab]=useState([])
useEffect(()=>{
    const tqb=[];
    fetch('/api/msg')
  .then(response => response.json())
  .then(json => {
    console.log(json)
        json.forEach(element => {
            tqb.push(element)
        });
  })
  .then(()=>settab(tqb))
},[])
return (
    <>
        <div className="w-72 m-4 gap-2 flex flex-col">
            {tab.map((element) => {
                // Format the date
                let dateTimeString = element.created_at;
                let datePart = dateTimeString.split("T")[0];
                let timePart = dateTimeString.split("T")[1].slice(0, 5);
                let formattedDateTime = `${datePart} ${timePart}`;

                return (
                    <div key={element.id} className="p-4 rounded-sm bg-yellow-100">
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