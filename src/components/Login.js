import React, {Component} from 'react'
import logo from '../assets/logo.png';


class ClassComponent extends Component{

	constructor(){
        super()
        this.state={
			username: '',
            password:''
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

	clickHandler(){
		alert('user:'+this.state.username + 'Password:'+ this.state.password);
	}

	handleChangeUser=(event)=>{
		this.setState({
            username: event.target.value
		})
	}

	handleChangeUserPass=(event)=>{
		this.setState({
            password: event.target.value
		})
	}


	render(){

		return(
		<div>
		
		 <img src={logo} className="App-logo" alt="logo" />

		<div className='divCenter'>
		 <form>
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">User</label>
				<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.handleChangeUser}/>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" className="form-label">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChangeUserPass}/>
			</div>
			<button type="submit" class="btn btn-primary" onClick={this.clickHandler}>Submit</button>
		</form>
		</div>





		</div>
		)
	}
}

export default ClassComponent