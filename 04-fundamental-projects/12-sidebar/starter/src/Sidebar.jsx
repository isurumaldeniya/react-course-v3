import { useGlobalContext } from './AppContext';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AiFillHome } from 'react-icons/ai';
import { AiFillRedditCircle } from 'react-icons/ai';
import { AiFillProfile } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <Offcanvas show={isSidebarOpen} onHide={() => setIsSidebarOpen(false)}>
      <ButtonGroup vertical>
        <Button variant="secondary">
          <AiFillHome style={{ marginRight: '16px' }} />
          Home
        </Button>
        <br />
        <Button variant="secondary">
          {' '}
          <AiFillRedditCircle style={{ marginRight: '16px' }} /> About
        </Button>
        <br />
        <Button variant="secondary">
          {' '}
          <AiFillProfile style={{ marginRight: '16px' }} /> Profile
        </Button>
        <br />
        <Button variant="secondary">
          <AiOutlineShoppingCart style={{ marginRight: '16px' }} />
          Shop
        </Button>
      </ButtonGroup>
    </Offcanvas>
  );
};

export default Sidebar;
