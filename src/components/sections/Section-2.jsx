import React, { Component } from 'react';
import Author from '../Author';
import '../../styles/css/section-2.css';
import author1 from '../../images/authors/1.jpg';
import author2 from '../../images/authors/2.jpg';
import author3 from '../../images/authors/3.png';
import bookCover1 from '../../images/books/1.jpg';
import bookCover2 from '../../images/books/2.jpg';
import bookCover3 from '../../images/books/3.jpg';

const authorsArray = [{
  id: 1,
  source: author1
},
  {
  id: 2,
  source: author2
},
  {
  id: 3,
  source: author3
}]

const bookInfo = [
  { id: 1,
    author:"Haruki Murakami",
    title: "1Q84",
    cover: bookCover1,
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
    cover: bookCover2,
    description: [<div className="section-2-description-text">
      <p>It begins with a boy. Theo Decker, a thirteen-year-old New Yorker, miraculously survives an accident that kills his mother. Abandoned by his father, Theo is taken in by the family of a wealthy friend. Bewildered by his strange new home on Park Avenue, disturbed by schoolmates who don't know how to talk to him, and tormented above all by his unbearable longing for his mother, he clings to one thing that reminds him of her: a small, mysteriously captivating painting that ultimately draws Theo into the underworld of art.</p>
      <p>As an adult, Theo moves silkily between the drawing rooms of the rich and the dusty labyrinth of an antiques store where he works. He is alienated and in love-and at the center of a narrowing, ever more dangerous circle.</p>
      <p>The Goldfinch combines vivid characters, mesmerizing language, and suspense, while plumbing with a philosopher's calm the deepest mysteries of love, identity, and art. It is an old-fashioned story of loss and obsession, survival and self-invention, and the ruthless machinations of fate.</p>
      </div>]
    },
  { id: 3,
    author:"Irvine D. Yalom",
    title: "When Nietzsche Wept",
    cover: bookCover3,
    description: [<div className="section-2-description-text">
      <p>A richly evocative novel set in 19th-century Vienna on the eve of the birth of psychoanalysis.</p>
      <p>The eminent physician Josef Breuer is asked to treat Friedrich Nietzsche's suicidal despair after the end of a love affair - without his knowing it. The doctor devises an ingenious plan, which ultimately involves a young intern named Sigmund Freud.</p>
      </div>]
  }
]

class SectionTwo extends Component {
  state = {
    bookAuthor: null,
    bookTitle: null,
    bookDescription: null,
    bookCover: null,
    recommendationLayerVisibility: 'hidden',
    recommendationLayerOpacity: '0',
  };

  showClickedBook = (event) => {
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

  render() {
    return(
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
    )
  }
}

export default SectionTwo;
