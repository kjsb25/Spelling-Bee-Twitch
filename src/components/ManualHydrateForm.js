import React from 'react';
import cheerio from 'cheerio';
import { getScore } from "../helpers"



class ManualHydrateForm extends React.Component {

	answerHtmlRef = React.createRef();

	manualHydrate = event => {
		event.preventDefault();
		const htmlString = this.answerHtmlRef.current.value;


		const $ = cheerio.load(htmlString); 

		//words
    const newWords={};
    $('div#main-answer-list > ul > li').each((_idx, el) => {
      const wordText = $(el).text().replace(/[^a-zA-Z]/, "").trim();
      const isPanagram = $(el).find( "strong" ).length > 0;
      const word = {
        isPanagram: isPanagram,
        score: getScore(wordText.length,isPanagram)
      }
      newWords[wordText]=word;
      // console.log(word);
    });

    this.props.addWords(newWords);
	}

  render() {
    return(
      <form onSubmit={this.manualHydrate}>
      	<input type="password" name="answerHtmlRef" placeholder="Gimme dat main-answer-list div" ref={this.answerHtmlRef}></input>
      	<button type="submit">Hydrate</button>
      </form>
    )
  }
}

export default ManualHydrateForm;
