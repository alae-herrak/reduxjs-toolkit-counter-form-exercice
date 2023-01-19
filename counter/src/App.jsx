import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "./redux/isLoggedSlice";
import { incrementCount, decrementCount, resetCount } from "./redux/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.counter);
  const isLogged = useSelector((state) => state.isLogged.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {isLogged ? (
        <div className="loggedIn">
          <h3>Count: {count}</h3>
          <div>
            <button onClick={() => dispatch(incrementCount(1))}>+</button>
            <button onClick={() => dispatch(decrementCount(1))}>-</button>
            <button onClick={() => dispatch(resetCount())}>reset</button>
          </div>
          <button onClick={() => dispatch(logOut())}>Logout</button>
        </div>
      ) : (
        <div className="loggedOut">
          <button onClick={() => dispatch(logIn())}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
