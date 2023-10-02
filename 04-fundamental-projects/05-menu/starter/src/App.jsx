import { useState } from 'react';
import menu from './data';
import Menu from './Menu';
import AllMenu from './AllMenu';
import Breakfast from './BreakFast';
import Lunch from './Lunch';
import Shakes from './Shakes';

const App = () => {
  const [menuType, setMenuType] = useState('all');

  function getMenu(category) {
    switch (category) {
      case 'breakfast':
        setMenuType('breakfast');

        break;

      case 'lunch':
        setMenuType('lunch');
        break;
      case 'shakes':
        setMenuType('shakes');
        break;

      default:
        setMenuType('all');
        break;
    }
  }

  if (menuType === 'all') {
    return (
      <main>
        <Menu getMenu={getMenu}/>
        <AllMenu menuItems={menu} />
      </main>
    );
  }else if(menuType === 'breakfast'){
    return (
      <main>
        <Menu getMenu={getMenu}/>
        <Breakfast menuItems={menu} />
      </main>
    );
  }else if(menuType === 'lunch'){
    return (
      <main>
        <Menu getMenu={getMenu}/>
        <Lunch menuItems={menu} />
      </main>
    );
  }else if(menuType === 'shakes'){
    return (
      <main>
        <Menu getMenu={getMenu}/>
        <Shakes menuItems={menu} />
      </main>
    );
  }
};
export default App;
