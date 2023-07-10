import React,{useState} from 'react'
import Question from '../Questions/Question'
import quizData from '../../StaticData/Data'
function Home() {
    const [Questions, setQuestions] = useState(quizData);
  return (
   <main>
    <div className="container">
        <h3>Quiz App</h3>
        <section>
           {
             Questions.map((question)=>(
                <Question key={question.id} {...question}/>
             ))

           }
        </section>
    </div>
   </main>
  )
}

export default Home