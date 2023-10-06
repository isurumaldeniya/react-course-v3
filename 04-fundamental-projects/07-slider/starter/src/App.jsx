import { useEffect, useState } from 'react';
import { list } from './data';
import User from './User';

const App = () => {
  const [state, setState] = useState({
    user: list[0],
    currentIndex: 0,
  });

  function nextPerson() {
    if (state.currentIndex < list.length - 1) {
      // setUser(state.user[currentIndex + 1]);
      // setCurrentIndex(currentIndex + 1);
      setState({
        user: list[state.currentIndex + 1],
        currentIndex: state.currentIndex + 1,
      });
    } else {
      // setUser(list[0]);
      // setCurrentIndex(0);
      setState({ user: list[0], currentIndex: 0 });
    }
  }

  useEffect(() => {
    const silderId = setTimeout(() => {
      nextPerson();
    }, 3000);

    return () => {
      clearTimeout(silderId);
    };
  }, [state]);

  function previousPerson() {
    if (state.currentIndex > 0) {
      // setUser(state.user[currentIndex + 1]);
      // setCurrentIndex(currentIndex + 1);
      setState({
        user: list[state.currentIndex - 1],
        currentIndex: state.currentIndex - 1,
      });
    } else {
      // setUser(list[0]);
      // setCurrentIndex(0);
      setState({ user: list[list.length - 1], currentIndex: list.length - 1 });
    }
  }
  // setTimeout(changeUser, 5000);

  return (
    <div>
      <main className="section">
        <User user={state.user} nextPerson={nextPerson} previousPerson={previousPerson}/>
      </main>
    </div>
  );
};
export default App;
