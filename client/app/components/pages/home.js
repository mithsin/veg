import React, {Component} from 'react';
// import Carousel from 'nuka-carousel';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      img1: "../assets/img/SS006.jpg",
      img2: "../assets/img/SS007.jpg",
      img3: "../assets/img/SS008.jpg",
    }
  }


  render(){

    return(
      <div className="body_container">
        <img className="col-12" src={this.state.img1} />
        <div className="g-font">
          <p className="s-col-12 iCol-10">"Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty"</p>
          <p className="float-right">Albert Einstein</p>
        </div>
      </div>
    )
  }
};

export default Home;