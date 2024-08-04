import { Outlet } from 'react-router-dom';
import Product from './product/product';
import Tabs from './../compoments/Nabar'

const Root = () => {
  return (
    <div>
      <Tabs/>
      <Outlet />
    </div>
  );
};

export default Root;