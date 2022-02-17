import React from 'react';
import cheerio from 'cheerio';
import SpellingBee from './SpellingBee'
import ManualHydrateForm from './ManualHydrateForm';
import { findUnique } from '../helpers';
import '../css/App.scss';


class App extends React.Component {
  state = {
    centerLetter: 'a',
    otherLetters: 'aaaaaa',
    words: {},
    panagramCount: null,
    maxPuzzleScore: null,
    answerCount: null,
  };

  addWords = newWords => {
    const words = { ...this.state.words };
    let merged = {...words, ...newWords};
    this.setState({ words : merged });
    //lazy implementation, fix this
    setTimeout(this.generateLetters, 5000);
  }

  componentDidUpdate(prevProps){
    if (this.props.words !== prevProps.words) {
      this.generateLetters()
    }
  }

  generateLetters = () => {
    var letters='';
    var allWords='';
    Object.keys(this.state.words).map(key => {
      allWords+=key;
    });
    letters=findUnique(allWords);
    console.log(letters);


    var workingLetters=letters;
    Object.keys(this.state.words).map(key => {
      letters.split("").forEach(character => {
        if(key.indexOf(character) === -1){
          workingLetters=workingLetters.replace(character,'');
        }
      })
      if(workingLetters.length === 1){
        this.setState({ centerLetter : workingLetters });
        var letters = this.state.otherLetters;
        letters=letters.replace(workingLetters,'');
        this.setState({ otherLetters: letters })
        // break;
      }
    });

  }

  // findCenterLetter = () =>{
    
  // }

  addStats = stats => {
    this.addPanagramCount(stats.panagramCount);
    this.addmaxPuzzleScore(stats.maxPuzzleScore)
    this.addAnswerCount(stats.answerCount)
  }

  addPanagramCount = panagramCount => {
    this.setState({panagramCount})
  }

  addmaxPuzzleScore = maxPuzzleScore => {
    this.setState({maxPuzzleScore})
  }

  addAnswerCount = answerCount => {
    this.setState({answerCount})
  }


  loadWords = async () => {
       // const nytBeeRawData = await fetchWords();
       const searchUrl = 'https://nytbee.com/';
        const response = await fetch(searchUrl);   // fetch page

        const htmlString = await response.text();
        const $ = cheerio.load(htmlString);           // parse HTML string

        const words=[];

        $('div.answer-list > ul > li').each((_idx, el) => {
          const word = $(el).text()
          words.push(word)
        });
        // return words;
        console.log(words);
  }
  

  render() {
    return(
      <div className="parent-container">
        <ManualHydrateForm addWords={this.addWords} addStats={this.addStats}/>
        <SpellingBee mainLetter='a' otherLetters='aaaaaa' />
      </div>
    )
  }
}

export default App;
