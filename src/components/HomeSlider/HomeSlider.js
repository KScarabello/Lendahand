import React, {Component} from 'react';
// import {Carousel} from 'react-bootstrap';
// import {Carousel} from 'react-responsive-carousel';
import {Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import './HomeSlider.css';

class HomeSlider extends Component{


// _onChange() {
//  console.log('onChange', arguments);
// }

//  _onClickItem() {
//  console.log('onClickItem', arguments);
// }

//  _onClickThumb() {
//  console.log('onClickThumb', arguments);
// }

    render(){
        return(
  <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:500,
            width:"100vw",
            backgroundImage:'url("http://www.standard.net/image/2017/02/20/800x_a16-9_b0_q80_p1_ca5,0,1822,1033/BZ-Box-Elder-flooding.jpg")', 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>              
                {/* <img src="http://www.standard.net/image/2017/02/20/800x_a16-9_b0_q80_p1_ca5,0,1822,1033/BZ-Box-Elder-flooding.jpg" />   */}
              <h1>Box Elder County Flooding </h1>
              <p>17 Lenders Requesting Help</p>
              <button>Lend A Hand</button>
            
            </div>
            <div style={{height:500,
            width:"100vw",
            backgroundImage:'url()',
            backgroundColor:"aqua",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            
            }}>
              <h1>SarahBearUh1 wants to make Christmas cards for the elderly.</h1>
              <p>3 Lenders Still Needed</p>
              <button>Lend A Hand</button>
            </div>
            <div style={{height:500,width:"100vw",backgroundColor:"lightpink"}}>
              <h1>City of Provo needs staffing for _____ Festival</h1>
              <p>13 Lenders Still Needed</p>
              <button>Lend A Hand</button>              
            </div>
            <div style={{height:500,width:"100vw",backgroundColor:"orange"}}>
              789
            </div>
          </React_Bootstrap_Carousel>




    //         <Carousel
    // showArrows
    // infiniteLoop={false}
    // autoPlay
    // emulateTouch={false}
    // showThumbs={false}
    // interval={5000}
    // width="100vw"
    // onClickItem={this._onClickItem}
    // onChange={this._onChange}
    // onClickThumb={this._onClickThumb} 
    // stopOnHover={true}  >
    // <div>
    //   <div className="carousel-inner">
    //     <div>
    //         <div class="item">
    //           <img src="http://www.standard.net/image/2017/02/20/800x_a16-9_b0_q80_p1/BZ-Box-Elder-flooding.jpg" />
    //             <div className="absolute-div">
    //               <div className="carousel-caption">
    //                 <h1 className="legend">Box Elder County Flooding</h1>
    //                   <p className="small-hook">17 Individuals Requesting Help</p>
    //                     <button className="help">Help Now!</button>
    //               </div>
    //             </div>
    //         </div> 
    //     </div>
    
    //     <div>
    //       <div className="item">
    //         <img src="https://images.pexels.com/photos/220625/pexels-photo-220625.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
    //             <div className="absolute-div">
    //               <div className="carousel-caption">  
    //                 <h1 className="legend">SarahBearuh1 wants to make Christmas cards for the local elderly.</h1>
    //                  <p>Meetup at Orem Starbucks Tonight</p>
    //                 <button className="help">Help Now!</button>
    //               </div>
    //           </div> 
    //         </div>
    //       </div>
        
    //         <div>
    //           <div className="item">
    //           <img src="https://images.pexels.com/photos/410395/pexels-photo-410395.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" />
    //             <div className="absolute-div">
    //               <div className="carousel-caption"> 
    //                   <h1 className="legend">The Road Home needs to repaint their mural.</h1>
    //                     <p>Meetup is Saturday</p>
    //                     <button className="help">Help Now!</button>
    //                </div>
    //             </div> 
    //            </div> 
    //         </div>
    //       </div>
    //     </div>
  
    
    // </Carousel>
        )


    }

} export default HomeSlider;