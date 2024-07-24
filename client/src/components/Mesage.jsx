import { useEffect, useState } from "react"




function Mesage(){
    const [tab,settab]=useState([])
useEffect(()=>{
    const tqb=[];
    fetch('/api/msg')
  .then(response => response.json())
  .then(json => {
        json.forEach(element => {
            tqb.push(element)
        });
  })
  .then(()=>settab(tqb))
},[])
return (
    <>
        <div className="w-52   gap-2 flex flex-col">
            {tab.map((element) => (
                <div key={element.id} className="p-4 rounded-sm bg-yellow-100">
                    <h1>{element.use}</h1>
                    <h3>{element.des}</h3>
                </div>
            ))}
        </div>
    </>
);


}
export default Mesage