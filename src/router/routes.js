import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from './paths';
import { StoresPage } from '../pages/StoresPage';
import { StorePage } from '../pages/StorePage';
import { EditStorePAge } from '../pages/EditStorePage';
import { CreateStorePage } from '../pages/CreateStorePage';
import { H1 } from '../components/Typography';

export const routes = [
  {
    index: true,
    element: <H1>Welcome in stores</H1>,
  },
  {
    path: PATHS.STORES.ROOT,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <StoresPage />,
      },
      {
        path: PATHS.STORES.VIEW,
        element: <StorePage />,
      },
      {
        path: PATHS.STORES.EDIT,
        element: <EditStorePAge />,
      },
      {
        path: PATHS.STORES.CREATE,
        element: <CreateStorePage />,
      },
    ],
  },

  {
    path: PATHS.ERRORS.NOT_FOUND,
    element: <H1>Page not found 404</H1>,
  },
  {
    path: '*',
    element: <Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />,
  },
];
