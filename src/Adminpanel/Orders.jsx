import { useState } from "react";
// import {watchfaces} from "../user_watch/watchfaces.jsx";

export default function Orders() {
  const [watch, setWatch] = useState();
  const [edit, setEdit] = useState(-1);

  function deleteTask(index) {
    const updatedTask = [...watch];
    updatedTask.splice(index, 1);
    setWatch(updatedTask);
  }
  return (
    <div>
      <h1>delete</h1>
      {watch.map((data, index) => (
        <li key={index}>
          {edit === index ? (
            < div className="photo">
              <img
                src={data.img}
                width={200}
                height={250}
                alt="img"
                onChange={(ev) => {
                  const updatedTask = [...watch];
                  updatedTask[index].img = ev.target.src;
                  setWatch(updatedTask);
                }}
              />

              <button
                onClick={() => {
                  setEdit(-1);
                }}
              >
                save
              </button>
            </div>
          ) : (
            <div className="edit">
               <div className="photo"><img src={data.img} width={200} height={250} alt="img" /></div>
              <p>{data.Name}</p>
              <button
                className="editbtn"
                onClick={() => {
                  setEdit(index);
                }}
              >
                edit
              </button>
              <button className="btndelete" onClick={() => deleteTask(index)}>
                delete
              </button>
            </div>
          )}
        </li>
      ))}
    </div>
  );
}
