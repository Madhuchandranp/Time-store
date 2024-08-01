import { useContext } from "react";
import { mycontext } from "./context";
import "../user_styles/Home.css";

export default function Casualwatch() {
  const { watch } = useContext(mycontext);
  console.log(watch);
  const Casualwatch = watch.filter((p) => p.Category === "casual");
  console.log(Casualwatch);

  return (
    <div>
      <u>
        <h1>Casualwatch</h1>
      </u>
      <div className="watchs">
        {
        Casualwatch.map((data, index) => (
          <div className="Watch-list">
            <img width="300px" src={data.img} alt="img"></img>
            <p>{data.Name}</p>
            <p>{data.Category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
