import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Catalog, Contacts, Profile, Orders, Certificates, Sending, Cart, Product, Password, Login, Register, Address, AddAddress, PasswordReset } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Catalog /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/profile', element: <Profile /> },
      { path: '/account/orders', element: <Orders /> },
      { path: '/account/certificates', element: <Certificates /> },
      { path: '/sending', element: <Sending /> },
      { path: '/cart', element: <Cart /> },
      { path: '/product/:id', element: <Product /> },
      { path: '/account', element: <Profile /> },
      { path: '/account/password', element: <Password /> },
      { path: '/login', element: <Login /> },
      {
        path: '/register',
        element: <Register />,
        handle: { back: '/login' },
      },
      { path: '/account/address', element: <Address /> },
      {
        path: '/account/address/add',
        element: <AddAddress />,
        handle: { back: '/account/address' },
      },
      {
        path: '/login/password-reset',
        element: <PasswordReset />,
        handle: { back: '/login' },
      },
    ],
  },
]);