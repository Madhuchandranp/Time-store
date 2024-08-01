import { useContext } from "react";
import { mycontext } from "../user_watch/context";

export default function Usersadmin() {
  const { user } = useContext(mycontext);
  

  return (
    <div>
      <h2>Logged Users <i class="bi bi-people-fill"></i></h2>
      {user.map((data, index) => (
        <div>
          <p>
            {data.email} {data.password}
          </p>
        </div>
      ))}
    </div>
  );
}
