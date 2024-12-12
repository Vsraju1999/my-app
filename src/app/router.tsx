import React from 'react';
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const ErrorPage = () => (
  <div style={{ textAlign: 'center', fontSize: '30px' }}>
    404 Page Not Found.
  </div>
);

export const createAppRouter = () => {
  return createBrowserRouter(
    [
      {
        path: '/',
        element: (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px',
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/users">Users</Link>
            </div>
            <br />
            <Outlet />
          </>
        ),
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <div>Home</div> },
          { path: 'about', element: <div>About</div> },
          { path: 'users', element: <div>Users</div> },
        ],
      },
    ],
    { basename: '/my-app' }
  );
};

export const AppRouter = () => {
  const router = React.useMemo(() => createAppRouter(), []);
  return <RouterProvider router={router} />;
};
