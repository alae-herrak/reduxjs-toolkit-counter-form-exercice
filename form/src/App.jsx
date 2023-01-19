import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "./redux/isLoggedSlice";
import { saveInfo, resetInfo } from "./redux/infoPersonSlice";

const App = () => {
  const isLogged = useSelector((state) => state.isLogged.isLogged);
  const infoPerson = useSelector((state) => state.infoPerson.infoPerson);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    let fullName = e.target[0].value;
    let email = e.target[1].value;
    let phoneNumber = e.target[2].value;
    if (fullName != "" && email != "" && phoneNumber != "") {
      dispatch(
        saveInfo({
          fullName: fullName,
          email: email,
          phoneNumber: phoneNumber,
        })
      );
      dispatch(logIn());
    }
  };

  return (
    <div className="app">
      {isLogged ? (
        <div className="container">
          <h1>Personal information</h1>
          <div>
            <div className="row">
              <div className="label">Full Name</div>
              <div className="info">{infoPerson.fullName}</div>
            </div>
            <div className="row">
              <div className="label">Email</div>
              <div className="info">{infoPerson.email}</div>
            </div>
            <div className="row">
              <div className="label">Phone Number</div>
              <div className="info">{infoPerson.phoneNumber}</div>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(resetInfo());
              dispatch(logOut());
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="container">
          <form onSubmit={handleForm}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
