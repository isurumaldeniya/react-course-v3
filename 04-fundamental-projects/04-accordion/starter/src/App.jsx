import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);

  return <main>
    <title>Questions</title>
    <Questions questions = {questions}/>
  </main>;
};
export default App;
