import { useState } from "react";
import classes from "./Form.module.css";

  function Form(){
    const [data, setData] = useState({
      name: "",
      email: "",
      address: "",
      gender: "",
      language: "",
      isChecked: false
    });

    function handleChange(e){
      const name = e.target.name;
      const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

      setData({
        ...data,
        [name]: value
      })
    }

    function submitData(event){
      event.preventDefault();
      console.log(data);
    }

    return (
      <form onSubmit={submitData}>
        <div className={classes.container}>
          <div className={classes.row1}>
            <div className={classes.input_field}>
              <label>Name*</label>
              <input type="text" name='name' onChange={handleChange} />
            </div>
            <div className={classes.input_field}>
              <label>Email*</label>
              <input type="email" name='email' onChange={handleChange}  />
            </div>
          </div>
  
          <div className={classes.row2}>
            <div className={classes.textarea_field}>
              <label>Address*</label>
              <textarea rows={5} name='address' onChange={handleChange}  />
            </div>
          </div>
  
          <div className={classes.row3}>
            <div className={classes.input_field}>
              <label>Gender*</label>
              <div>
                <label>Male</label>
                <input type="radio" name='gender' value='male' onChange={handleChange}  />
              </div>
              <div>
                <label>Female</label>
                <input type="radio" name='gender' value='female' onChange={handleChange}  />
              </div>
            </div>
          </div>
  
          <div className={classes.row4}>
            <div className={classes.select_field1}>
              <label>Language*</label>
              <select name='language' onChange={handleChange}>
                <option value="java">Java</option>
                <option value="javaScript">JavaScript</option>
                <option value="python">Python</option>
                <option value="php">PHP</option>
                <option value="c++">C++</option>
              </select>
            </div>
            <div className={classes.select_field}>
              <label>Is Checked*</label>
              <input type='checkbox' name='isChecked' onChange={handleChange} />
            </div>
          </div>
          <br />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }


export default Form