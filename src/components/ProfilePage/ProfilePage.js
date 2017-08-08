import React,  {Component} from 'react';
import './ProfilePage.css';
import image from './IMG_2178.JPG';

class ProfilePage extends Component{

        render(){
            return(

                
 <div >
    <div className="card hovercard">
        <div className="card-background">
            <img className="card-bkimg" alt="" src="http://i.imgur.com/zVP8AD8.jpg" />
            
        </div>
        <div className="useravatar">
            <img alt="" src="http://i.imgur.com/zVP8AD8.jpg" />
        </div>
        <div className="card-info"> <span className="card-title">Kimberly Scarabello</span>

        </div>
    </div>
    <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
        <div className="btn-group" role="group">
            <button type="button" id="stars" className="btn btn-primary" href="#tab1" data-toggle="tab"><span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                <div className="hidden-xs">About</div>
            </button>
        </div>
        <div className="btn-group" role="group">
            <button type="button" id="favorites" className="btn btn-default" href="#tab2" data-toggle="tab"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                <div className="hidden-xs">Events Completed</div>
            </button>
        </div>
        <div className="btn-group" role="group">
            <button type="button" id="following" className="btn btn-default" href="#tab3" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                <div className="hidden-xs">Events Created</div>
            </button>
        </div>
    </div>

        <div className="well">
      <div className="tab-content">
        <div className="tab-pane fade in active" id="tab1">
          <h3>Location</h3>
        </div>
        <div className="tab-pane fade in" id="tab2">
          <h3>This is tab 2</h3>
        </div>
        <div className="tab-pane fade in" id="tab3">
          <h3>This is tab 3</h3>
        </div>
      </div>
    </div>
    
    </div>
            
         



                       



            )


        }




} export default ProfilePage;