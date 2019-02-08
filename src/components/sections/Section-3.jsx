import React, { Component } from 'react';
import witcherLogo from '../../images/witcher/logo.png';
import witcherVideo from '../../images/witcher/filter.mp4';
import '../../styles/css/section-3.css';

class SectionThree extends Component {

  render() {
    return (
      <div className="section-3">
          <div className="section-3-background">
            <div className="section-3-filter-video">
              <video autoPlay={true} muted={true} loop={true} id="section-3-video">
                <source src={witcherVideo} type="video/mp4" />
              </video>
            </div>
            <div className="section-3-left-container">
              <div className="section-3-menu">
                <div className="section-3-menu-item">HOME</div>
                <div className="section-3-menu-item">STORE</div>
                <div className="section-3-menu-item">SUPPORT</div>
                <div className="section-3-menu-item">MEDIA</div>
              </div>
              <div className="section-3-logo">
                <img src={witcherLogo} alt="logo" />
              </div>
              <div className="section-3-buynow-button">BUY NOW</div>
            </div>
          </div>
        </div>
    )
  }
}

export default SectionThree;
