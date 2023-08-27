import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';

import CreatePortfolio from '../components/Portfolio/CreatePortfolio';
import PortfolioDetails from '../components/Portfolio/PortfolioDetails';
import Home from '../components/pages/Home/Home';
import Contact from '../components/pages/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/portfolio/:id',
        element: <PortfolioDetails />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/create',
        element: <CreatePortfolio />,
      },
    ],
  },
]);
export default router;
