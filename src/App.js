// import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  // const [state, setState] = useState({
  //   fname: "",
  //   lname: "",
  //   message: "",
  //   carBrand: "",
  //   isChecked: false,
  //   gender: "",
  //   price: 0,
  // });

  // const handleChange = e => {
  //   console.log(e);
  //   const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
  //   setState({
  //     ...state,
  //     [e.target.name]: value,
  //   })
  // }

  // function handleSubmit(event){
  //   event.preventDefault();
  //   console.log(state);
  // }

  return (
    <div className="App">
      <div className="form_div">
        <Form />
      </div>
      {/* <div className="inner_div">
        <form onSubmit={handleSubmit}>
          <div className="form_div">
            <div>
              <label>
                First Name:{" "}
                <input
                  type="text"
                  name="fname"
                  value={state.fname}
                  onChange={handleChange}
                />
              </label>{" "}
              <label>
                Last Name:{" "}
                <input
                  type="text"
                  name="lname"
                  value={state.lname}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Your Message:{" "}
                <textarea
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                />
              </label>

              <label>
                Pick your favorite car brand:
                <select
                  name="carBrand"
                  value={state.carBrand}
                  onChange={handleChange}
                >
                  <option value="mercedes">Mercedes</option>
                  <option value="bmw">BMW</option>
                  <option value="maserati">Maserati</option>
                  <option value="infinity">Infinity</option>
                  <option value="audi">Audi</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="isChecked"
                  checked={state.isChecked}
                  onChange={handleChange}
                />{" "}
                Is Checked?
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={state.gender === "male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={state.gender === "female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
            <label>
              Price (between 0 and 50):
              <input
                type="range"
                name="price"
                min="0"
                max="50"
                value={state.price}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div> */}
    </div>
  );
}
export default App;
