import React, { Component } from 'react';
import '../../styles/css/section-1.css';
import cat1 from '../../images/cat_gang/1.jpg';
import cat2 from '../../images/cat_gang/2.jpg';
import cat3 from '../../images/cat_gang/3.jpg';

const catGangArray = [
  cat1,
  cat2,
  cat3
];

const catIpsumTitle = [
  "Pee in human's bed until he cleans the litter box",
  "Sleeps on my head when in doubt",
  "Terrorize the hundred-and-twenty-pound rottweiler and steal his bed"
]

const catIpsumBase = [
  "Annoy kitten brother with poking purr for destroy the blinds kitty poochy. Meow to be let in chew on cable lick human with sandpaper tongue. You call this cat food.",
  "Loved it, hated it, loved it, hated it. Stare at wall turn and meow stare at wall some more meow again.",
  "Run outside as soon as door open ignore the human until she needs to get up, then climb on her lap and sprawl knock over christmas tree. Intently stare at the same spot throwup on your pillow."
]

class SectionOne extends Component {
  state={
    pictureNumber: 0,
    color1: '#c94b4b',
    color2: '#4b134f'
  }

  changeImage = () => {
    if (this.state.pictureNumber === catGangArray.length - 1) {
      this.setState({
        pictureNumber: 0
      })
    } else {
      this.setState({
        pictureNumber: this.state.pictureNumber + 1
      })
    }
  };

  changeColor1 = (e) => {
    this.setState({
      color1: e.target.value
    })
  };

  changeColor2 = (e) => {
    this.setState({
      color2: e.target.value
    })
  };

  render() {
    return (
      <div className="section-1" style={{ '--color-1': this.state.color1, '--color-2': this.state.color2}}>
          <div className="section-1-A">
            <div className="section-1-ipsums">
              <p className="section-1-ipsum-title">"{catIpsumTitle[this.state.pictureNumber]}"</p>
              <p>{catIpsumBase[this.state.pictureNumber]}</p>
              <p className="section-1-ipsum-trademark">www.catipsum.com ®</p>
            </div>
            <div className="section-1-image">
              <img
                src={catGangArray[this.state.pictureNumber]}
                alt="cat"
                style={{width: '290px', height: '290px'}}
                />
            </div>
            <div className='section-1-introduction-container'>
              <div className="section-1-title">Meet the Cat Gang</div>
              <div className="section-1-button-container">
                <div className="section-1-button-base"></div>
                <div className="section-1-button" onClick={this.changeImage}>
                  Show More!
                </div>
              </div>
            </div>
          </div>
          <div className="section-1-color-box">
            <input type="color" value={this.state.color1} onChange={this.changeColor1}/>
            <input type="color" value={this.state.color2} onChange={this.changeColor2}/>
          </div>
        </div>
    )
  }
}

export default SectionOne;
