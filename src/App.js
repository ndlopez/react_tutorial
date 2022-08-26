import React, {Component} from 'react';
import './App.css';
import Table from './Table';
import Form from './Form';

class App extends Component{
  state = {
    members : [
      {name:'Richard Hendricks',job:'CEO PiedPiper',email:'richard@piedpiper.com'},
      {name:'Bertram Gilfoyle',job:'System Architect',email:'gilfoyle@piedpiper.com'},
      {name:'Dinesh Chugtai',job:'Java Programmer',email:'dinesh@piedpiper.com'},
    ]
  }
  removeMember = (index) =>{
    const {members} = this.state
    this.setState({
      members: members.filter((member,idx)=>{
        return idx !== index
      }),
    })
  }
  handleSubmit = (member) => {
    this.setState({members: [...this.state.members,member]})
  }
  render(){
    const {members} = this.state
    return(
      <div className='container'>
        <Table characterData={members} removeMember = {this.removeMember} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
/*Continue tutorial from State
https://www.taniarascia.com/getting-started-with-react/
*/
export default App;
