import React from 'react';
import {AddQuestions} from '../redux/actions/questions.js';
import { connect } from "react-redux";

const ShowResult = (props) => { 
    let questions = props.Quiz.Questions;
    return(     
        <ul>
            {questions.map( (item, index) => {
                return (
                    <li key={index}> {item.QuestionText} </li>             
                )
            })}
        </ul>
    )
}

class App extends React.Component  { 
    async componentWillMount() {
        let req = await fetch("https://gtiw.gtinvest.com:44300/api/QuizPassings/GetById?passingId=D4FCA825-9E5C-400E-B653-E37581262524")    
        let result = await req.json();
        this.props.AddQuestions(result); 
    }

    render() {
        let result = this.props.github_Reducer.Questions;
        return (
            <div className="wrap">
                {result != null ? <ShowResult {...result} /> : 
                    <>
                        <div className="loader"><span> {"loading"} </span></div>
                        <ul><li> {"Нет вопросов"} </li></ul>
                    </>
                }        
            </div>                 
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
  
export default connect(mapStateToProps, { AddQuestions })(App);