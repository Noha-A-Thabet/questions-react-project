import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {

  const [showQuestion, setShowQuestion] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>

        <section className="info">
          {
            showQuestion.map((question) => {
              return <Question key={question.id} title={question.title} info={question.info} />
            })};
        </section>
      </div>
    </main>
  )
}

export default App;
