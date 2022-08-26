import React, {Component} from "react";

class Form extends Component{
    initialState = {
        name:'',
        job: '',
        email:'',
    }
    state = this.initialState

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]: value,
        })
    }
    submitForm = () =>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render(){
        const {name,job,email} = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                value={name} onChange={this.handleChange} placeholder="Name" />
                <br/>
                <label htmlFor="job">Job</label>
                <input type="text" name="job"
                value={job} onChange={this.handleChange} placeholder="Job"/>
                <br/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email"
                value={email} onChange={this.handleChange} placeholder="Email"/>
                <br/>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }

}

export default Form;