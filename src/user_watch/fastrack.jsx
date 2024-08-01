import { useContext } from "react";
import { mycontext } from "./context";

export default function Fastrack(){
    const {watch} = useContext(mycontext);
    console.log(watch);
    const fastrack = watch.filter((p)=> p.category ===" fashion ");

    console.log(fastrack);
    
    return(
      <div>
          <u><h1>fastrack</h1></u>
          <div className="Watchs">
          {
              fastrack.map((data,index)=>
                 <div className="Watch-list">
                  <img width="300px" src={ data.img } alt="img" ></img>
                  <p>{data.Name}</p>
                   <p>{data.category}</p>  
              </div>
                  )
          }
      </div>
         </div> 
   
    // const { watch } = useContext(mycontext)
    // console.log(watch);
    // const Casualwatch = watch.filter((p) => p.Category === "fastrack");
    // console.log(Casualwatch);
    // return(
    //     <div>
   
    //     <div className="watchs">
    //       {
    //       Fastrack.map((data, index) => 
    //         <div className="Watch-list">
    //           <img width="300px" src={data.img} alt="img"></img>
    //           <p>{data.Name}</p>
    //           <p>{data.Category}</p>
    //         </div>
          
    //       )}
    //     </div>
    //   </div>
    );
    
}
