import "./App.css";
import Form from "./Form.js";

function App() {
  return (
    <div className="container">
      {/* <form>
        <h1>Registration form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div className="field">
            <label>DOB</label>
            <input type="date" name="DOB" placeholder="DOB" />
          </div>

          <div className="field">
            <label>Class</label>
            <select id="class" name="class">
              <option value=""></option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
              
            </select>
          </div>

          <div className="field">
            <label>Division</label>
            <input type="dvision" name="division" placeholder="division" />
          </div>

          <div className="field">
            <label>Gender</label>
            <input type="gender" name="gender" placeholder="gender" />
          </div>
          <button className="fluid ui button">Submit</button>
        </div>
      </form> */}
      <Form>

      </Form>
    </div>
  );
}

export default App;
