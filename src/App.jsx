import React from 'react';
// import './App.css';
import defaultDataset from "./dataset";
import './assets/styles/style.css'
import {AnswersList, Chats} from './components/index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      cuurentId: "init",
      dataset: defaultDataset,
      open: false
    }
    this.selectAnswer = this.selectAnswer.bind(this)
  }

  displayNextQuestion = (nextQestionId) => {
    const chats = this.state.chats;
    chats.push({
      text: this.state.dataset[nextQestionId].question,
      type: 'question'
    })
    this.setState({
      answers: this.state.dataset[nextQestionId].answers,
      chats: chats,
      currentId: nextQestionId
    })
  }
  selectAnswer = (selectedAnswer, nextQestionId) => {
    switch(true) {
      case (nextQestionId === 'init'):
        this.displayNextQuestion(nextQestionId)
        break;
      default:
        const chats = this.state.chats; 
        chats.push({
            text: selectedAnswer,
            type: 'answer'
        })
    
        this.setState({
          chats: chats
        })

        this.displayNextQuestion(nextQestionId)
        break;
    }
  }

  componentDidMount() {
    const initAnswer = "";
    this.selectAnswer(initAnswer, this.state.cuurentId)
  }

  render () {
    return (
      <>
        <section className="c-section">
          <div className="c-box">
            <Chats chat={this.state.chats}/>
            <AnswersList 
              answers={this.state.answers}
              select={this.selectAnswer}
            />
          </div>
        </section>
      </>
    );
  }
}
