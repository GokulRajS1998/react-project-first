import React, { Component } from "react";    
import axios from "axios";
import './Form.css'    
    
class Form extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
               
            dob: '',    
           standard: 'select',    
            division: 'select',    
            gender: '',    
            formErrors: {}    
        };    
    
        this.initialState = this.state;  
        this.onValueChange = this.onValueChange.bind(this);  
    }    

    onValueChange(event) {
        this.setState({
          selectedOption: event.target.value
        });
      }
    
    handleFormValidation() {    
        const { studName,  dob, standard , division, gender } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
        //Student name     
        if (!studName) {    
            formIsValid = false;    
            formErrors["studNameErr"] = "Name is required.";    
        }    
    
       
    
        //DOB    
        if (!dob  ) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        
    
        //standard    
        if (standard === '' || standard === "select") {    
            formIsValid = false;    
            formErrors["standardErr"] = "Select class.";    
        }    
    
        //division   
        if (division === '' || division === "select") {    
            formIsValid = false;    
            formErrors["divisionErr"] = "Select division.";    
        }    
    
        console.log(gender)
        //gender  
        if (gender === '') {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }    
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {   
            axios.post('/', {
                studentName: this.state.studName,
                standard: this.state.standard,
                dob: this.state.dob,
                division: this.state.division,
                gender: this.state.gender  
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
               
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { studNameErr,  dobErr, standardErr, divisionErr, genderErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h3 style={{ textAlign: "center" }} >Student Details Form</ h3>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label htmlFor="studName">Name</label>    
                            <input type="text" name="studName"    
                                value={this.state.studName}    
                                onChange={this.handleChange}    
                                placeholder="Your name.."    
                                className={studNameErr ? ' showError' : ''} />    
                            {studNameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{studNameErr}</div>    
                            }    
    
                        </div>    
                          
                        <div>    
                            <label htmlFor="text">Date of Birth </label>    
                            <input type="date" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="standard">Class</label>    
                            <select name="standard" onChange={this.handleChange}    
                                className={standardErr ? ' showError' : ''}    
                                value={this.state.standard} >    
                                <option value="select">--Select--</option>    
                                <option value="I">I</option>    
                                <option value="II">II</option>    
                                <option value="III">III</option>    
                                <option value="IV">IV</option>    
                                <option value="V">V</option>    
                                <option value="VI">VI</option>    
                                <option value="VII">VII</option>    
                                <option value="VIII">VIII</option>    
                                <option value="IX">IX</option>    
                                <option value="X">X</option>    
                                <option value="XI">XI</option>    
                                <option value="XII">XII</option>    
                            </select>    
                            {standardErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{standardErr}</div>    
                            }    
                        </div>    
                        <div>    
                        <label htmlFor="division">Division</label>    
                            <select name="division" onChange={this.handleChange}    
                                className={divisionErr ? ' showError' : ''}    
                                value={this.state.division} >    
                                <option value="select">--Select--</option>    
                                <option value="A">A</option>    
                                <option value="B">B</option>    
                                <option value="C">C</option>    
                                   
                            </select>      
                            {divisionErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{divisionErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender</label>  
                              
                           
                            <input type="radio" value="Male" name="gender" onChange={this.handleChange} /> Male  
                            <input type="radio" value="Female" name="gender" onChange={this.handleChange} /> Female 
                            <input type="radio" value="Other" name="gender"  onChange={this.handleChange} /> Other  
                             
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Form;