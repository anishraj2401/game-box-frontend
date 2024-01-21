import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './RootLayout';
import Home from './components/Home';
import About from './components/About';
import RootLogin from './components/RootLogin';
import Games from './components/Games';
import Players from './components/Players';
import Login from './components/Login';
import Register from './components/Register';
import Games01 from './components/GamesList/Games01';
import BuyVirtualCard from './components/Wallet/BuyVirtualCard';

export default function App() {
  let router = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/register',
          element: <RootLogin />
        },
        {
          path: '/games',
          element: <Games />,
        }, {
          path: 'games/games01',
          element: <Games01 />
        },
        {
          path: '/top-up',
          element: <BuyVirtualCard />
        },
        {
          path: '/players',
          element: <Players />,
        },
        {
          path: '/login',
          element: <Login />
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
