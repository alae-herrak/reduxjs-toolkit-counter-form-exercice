import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "./redux/isLoggedSlice";
import { saveInfo, resetInfo } from "./redux/infoPersonSlice";

const App = () => {
  const isLogged = useSelector((state) => state.isLogged.isLogged);
  const infoPerson = useSelector((state) => state.infoPerson.infoPerson);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {isLogged ? (
        <div>
          <h3>Personal information:</h3>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => dispatch(logIn())}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
