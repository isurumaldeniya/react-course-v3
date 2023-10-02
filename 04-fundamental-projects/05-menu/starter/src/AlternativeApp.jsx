import { useState } from 'react';
import menu from './data';
import Menu from './Menu';
import AllMenu from './AllMenu';

const App = () => {
  const [menuType, setMenuType] = useState('all');
  const [menuArray, setMenuArray] = useState(menu);

  function getMenu(category) {
    switch (category) {
      case 'breakfast':
        setMenuType('breakfast');
        setMenuArray(menu.filter(menuItem => {
          return menuItem.category == 'breakfast'
        }))
        break;

      case 'lunch':
        setMenuType('lunch');
        setMenuArray(menu.filter(menuItem => {
          return menuItem.category == 'lunch'
        }))
        break;
      case 'shakes':
        setMenuType('shakes');
        setMenuArray(menu.filter(menuItem => {
          return menuItem.category == 'shakes'
        }))
        break;

      default:
        setMenuType('all');
        setMenuArray(menu)
        break;
    }
  }

  return (
    <main>
      <Menu getMenu={getMenu}/>
      <AllMenu menuItems={menuArray} />
    </main>
  )
}


export default App;