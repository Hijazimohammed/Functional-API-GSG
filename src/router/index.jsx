import { Navigate, Outlet, Route, Routes, useRoutes } from 'react-router-dom';
import { H1 } from '../components/Typography';
import { PATHS } from './paths';
import { StoresPage } from '../pages/StoresPage';
import { StorePage } from '../pages/StorePage';
import { EditStorePAge } from '../pages/EditStorePage';
import { CreateStorePage } from '../pages/CreateStorePage';
import { routes } from './routes';

const Router = () => {
  const router = useRoutes(routes);

  return router;

  //( <Routes>
  //   <Route path={PATHS.HOME} element={<H1>Welcome in stores</H1>} />
  //   <Route path={PATHS.STORES.ROOT} element={<Outlet />}>
  //     <Route index element={<StoresPage />} />
  //     <Route path={PATHS.STORES.VIEW} element={<StorePage />} />
  //     <Route path={PATHS.STORES.EDIT} element={<EditStorePAge />} />
  //     <Route path={PATHS.STORES.CREATE} element={<CreateStorePage />} />
  //   </Route>
  //   <Route
  //     path={PATHS.ERRORS.NOT_FOUND}
  //     element={<H1>Page not found 404</H1>}
  //   />

  //   <Route
  //     path='*'
  //     element={<Navigate to={PATHS.ERRORS.NOT_FOUND} replace={true} />}
  //   />
  // </Routes> );
};

export default Router;
