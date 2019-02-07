import React, { Component } from 'react';
import Author from './components/Author';
import './App.css';
import './styles/section-1.css';
import './styles/section-2.css';
import './styles/section-3.css';
import './styles/section-4.css';
import witcherLogo from './images/witcher/logo.png';

const catGangArray = [
  "/images/cat_gang/1.jpg",
  "/images/cat_gang/2.jpg",
  "/images/cat_gang/3.jpg"
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

const authorsArray = [{
  id: 1,
  source: "/images/authors/1.jpg"
},
  {
  id: 2,
  source: "/images/authors/2.jpg"
},
  {
  id: 3,
  source: "/images/authors/3.png"
}]

const bookInfo = [
  { id: 1,
    author:"Haruki Murakami",
    title: "1Q84",
    cover: "/images/books/1.jpg",
    description: [<div className="section-2-description-text">
      <p>The year is 1984 and the city is Tokyo.</p>
      <p>A young woman named Aomame follows a taxi driver’s enigmatic suggestion and begins to notice puzzling discrepancies in the world around her. She has entered, she realizes, a parallel existence, which she calls 1Q84 —“Q is for ‘question mark.’ A world that bears a question.” Meanwhile, an aspiring writer named Tengo takes on a suspect ghostwriting project. He becomes so wrapped up with the work and its unusual author that, soon, his previously placid life begins to come unraveled.</p>
      <p>As Aomame’s and Tengo’s narratives converge over the course of this single year, we learn of the profound and tangled connections that bind them ever closer: a beautiful, dyslexic teenage girl with a unique vision; a mysterious religious cult that instigated a shoot-out with the metropolitan police; a reclusive, wealthy dowager who runs a shelter for abused women; a hideously ugly private investigator; a mild-mannered yet ruthlessly efficient bodyguard; and a peculiarly insistent television-fee collector.</p>
      <p>A love story, a mystery, a fantasy, a novel of self-discovery, a dystopia to rival George Orwell’s — 1Q84 is Haruki Murakami’s most ambitious undertaking yet: an instant best seller in his native Japan, and a tremendous feat of imagination from one of our most revered contemporary writers.</p>
      </div>]
    },
  { id: 2,
    author:"Donna Tartt",
    title: "The Goldfinch",
    cover: "/images/books/2.jpg",
    description: [<div className="section-2-description-text">
      <p>It begins with a boy. Theo Decker, a thirteen-year-old New Yorker, miraculously survives an accident that kills his mother. Abandoned by his father, Theo is taken in by the family of a wealthy friend. Bewildered by his strange new home on Park Avenue, disturbed by schoolmates who don't know how to talk to him, and tormented above all by his unbearable longing for his mother, he clings to one thing that reminds him of her: a small, mysteriously captivating painting that ultimately draws Theo into the underworld of art.</p>
      <p>As an adult, Theo moves silkily between the drawing rooms of the rich and the dusty labyrinth of an antiques store where he works. He is alienated and in love-and at the center of a narrowing, ever more dangerous circle.</p>
      <p>The Goldfinch combines vivid characters, mesmerizing language, and suspense, while plumbing with a philosopher's calm the deepest mysteries of love, identity, and art. It is an old-fashioned story of loss and obsession, survival and self-invention, and the ruthless machinations of fate.</p>
      </div>]
    },
  { id: 3,
    author:"Irvine D. Yalom",
    title: "When Nietzsche Wept",
    cover: "/images/books/3.jpg",
    description: [<div className="section-2-description-text">
      <p>A richly evocative novel set in 19th-century Vienna on the eve of the birth of psychoanalysis.</p>
      <p>The eminent physician Josef Breuer is asked to treat Friedrich Nietzsche's suicidal despair after the end of a love affair - without his knowing it. The doctor devises an ingenious plan, which ultimately involves a young intern named Sigmund Freud.</p>
      </div>]
  }
]
class App extends Component {
  state={
    pictureNumber: 0,
    bookAuthor: null,
    bookTitle: null,
    bookDescription: null,
    bookCover: null,
    recommendationLayerVisibility: 'hidden',
    recommendationLayerOpacity: '0',
    subscriptionScreen: 0,
    subscriptionFirstNameFilled: false,
    subscriptionLastNameFilled: false,
    subscriptionEmailFilled: false,
    subscribeClickable: false
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

  showClickedBook = (event) => {
    console.log(event.target.id)
    bookInfo.forEach(element => {
      if (element.id.toString() === event.target.id) {
        this.setState({
          bookAuthor: element.author,
          bookTitle: element.title,
          bookDescription: element.description,
          bookCover: element.cover,
          recommendationLayerVisibility: 'visible',
          recommendationLayerOpacity: '1'
        })
      }
    });
  }

  returnToAuthors = () => {
    this.setState({
      recommendationLayerOpacity: '0',
      recommendationLayerVisibility: 'hidden'
    })
  }

  subscribeButtonStateSwitch = () => {
    if (this.state.subscriptionFirstNameFilled &&
      this.state.subscriptionLastNameFilled &&
      this.state.subscriptionEmailFilled) {
        this.setState({ subscribeClickable: true })
    } else {
      this.setState({ subscribeClickable: false })
    }
  }

  checkIfAreaIsFilled = (event) => {
    let targetIsFilled = false;
    if (event.target.value !== "") {
      targetIsFilled = true;
    }

    switch(event.target.name) {
      case 'FirstName':
        this.setState({subscriptionFirstNameFilled: targetIsFilled}, () => {
          this.subscribeButtonStateSwitch();
        });
        break;
      case 'LastName':
        this.setState({subscriptionLastNameFilled: targetIsFilled}, () => {
          this.subscribeButtonStateSwitch();
        });
        break;
      case 'E-MailAddress':
        this.setState({subscriptionEmailFilled: targetIsFilled}, () => {
          this.subscribeButtonStateSwitch();
        });
        break;
      default:
        break;
    }
  }

  renderSubscribeButton = (clickable) => {
    if (clickable) {
      return (
        <div className="section-4-form-submit enabled"
          onClick={this.subscribeButtonOnClick}
          style={{ width:"30%"}}
          >
          <span style={{ opacity: '1' }}>I want to receive cool news!</span>
        </div>
      )
    }
    return (
      <div className="section-4-form-submit disabled"
        style={{ width:"20px", transitionDelay: '0.2s'}}
        >
        <span style={{ opacity: '0', transitionDelay: '0s' }}>I want to receive cool news!</span>
      </div>
    )
  }

  subscribeButtonOnClick = () => {
    this.setState({subscriptionScreen: 1});
    setTimeout(this.finalizeSubscription, 2400)
  }

  finalizeSubscription = () => {
    this.setState({subscriptionScreen: 2})
  }

  returnToSubscription = () => {
    this.setState({subscriptionScreen: 0,
      subscriptionFirstNameFilled: false,
      subscriptionLastNameFilled: false,
      subscriptionEmailFilled: false,
      subscribeClickable: false})
  }

  renderSubscriptionScreen = (screen) => {
    switch(screen) {
      case 0:
        return ( <div className="section-4-form-container">
          <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
          <form className="section-4-form">
            <input type="text" name="FirstName" placeholder="First Name" onChange={this.checkIfAreaIsFilled}  />
            <input type="text" name="LastName" placeholder="Last Name" onChange={this.checkIfAreaIsFilled} />
            <input type="text" name="E-MailAddress" placeholder="E-mail Address" onChange={this.checkIfAreaIsFilled} />
          </form>
          {this.renderSubscribeButton(this.state.subscribeClickable)}
        </div>
        );
      case 1:
        return ( <div className="section-4-form-container">
          <p>We are signing you up!</p>
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
        );
      case 2:
        return ( <div className="section-4-form-container">
          <h2 className="section-4-form-container-subscribed-h2">You have successfully subscribed to our newsletter!</h2>
          <p className="section-4-form-container-subscribed-p">From now on, you will be up-to-date about the hottest products and builds, inspiring design ideas to include in the your paludarium!</p>
          <div className="section-4-form-container-subscribed-return" onClick={this.returnToSubscription}>Cool!</div>
        </div>
        );
      default:
        return ( <div className="section-4-form-container">
          <p>Welcome to the Paludarium Club!</p>
        </div>
        );
    }
  }

  render() {
    return (
      <div className="App">

        <div className="section-1">
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
        </div>

        <div className="separator"></div>

        <div className="section-2">

          <div className="section-2-recommendation-layer"
            style={{ visibility: this.state.recommendationLayerVisibility, opacity: this.state.recommendationLayerOpacity }}>
            <div className="section-2-return-button" onClick={this.returnToAuthors} ></div>
            <div className="section-2-book-image">
              <img
                src={this.state.bookCover}
                alt="book"
                style={{ width: '285px', height: '400px' }}
                />
            </div>
            <div className="section-2-book-description">
              <h2>{this.state.bookTitle} by {this.state.bookAuthor}</h2>
              {this.state.bookDescription}
            </div>
          </div>

          <div className="section-2-author-layer">
            <div className="section-2-title">Choose an Author:</div>
            <div className="section-2-portrait-container">
              {authorsArray.map((element =>
                  <Author src={element.source} key={element.id} id={element.id} showClickedBook={this.showClickedBook}/>
                  ))}
            </div>
          </div>


        </div>

        <div className="separator"></div>

        <div className="section-3">
          <div className="section-3-background">
            <div className="section-3-filter-video">
              <video autoPlay={true} muted={true} loop={true} id="section-3-video">
                <source src="/images/filter.mp4" type="video/mp4" />
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

        <div className="separator"></div>

        <div className="section-4">

          {this.renderSubscriptionScreen(this.state.subscriptionScreen)}

          <div className="section-4-banner-container">
            <div className="section-4-banner-filter"></div>
            <div className="section-4-banner-text-container">
                <div className="section-4-banner-line"></div>
                <div className="section-4-banner-text">THE PALUDARIUM CLUB</div>
                <div className="section-4-banner-line"></div>
            </div>
          </div>
        </div>

        <div className="separator"></div>

      </div>
    );
  }
}

export default App;
