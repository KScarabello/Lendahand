import React, {Component} from 'react';
import "./TopNav.css";
import {Button} from 'react-bootstrap';
import axios from 'axios';


class TopNav extends Component{
    constructor(props){
        super(props)
        
        this.state = {

        }
        this.getUser = this.getUser.bind(this);
    }

    getUser(){
        console.log('getuser')
    axios.get('/api/users')
       .then((response) => {
           console.log(response)
       })
}



render(){
    return(
        <div className="top-nav-bar">
            <div className ="left-nav-links" >
                <ul>
                    <li>Request Help</li>
                    <li>Help Someone</li> 
                    <li>About</li>

                </ul>    
                
            </div>
            <div className="main-logo">
            LendAHand
            </div>
            <div className="login-div">
                <ul>
                    <div >
                        <a href="http://localhost:3001/auth" class="btn btn-success">Log in</a>
                    <button onClick={this.getUser}>hello</button>
                    </div>
                </ul>

            </div> 
        </div>        
    )


}

} export default TopNav;