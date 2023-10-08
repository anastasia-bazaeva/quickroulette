import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from 'react-router-dom';
import { Layout } from 'pages/layout/layout';
import { Roulette } from 'pages/roulette/roulette';
import { Filter } from 'pages/filter/filter';
import { MyRoulette } from 'pages/my-roulette/my-roulette';

  export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path='/' element={<Layout />}>
            <Route index element={<Roulette />} />
            <Route path='/roulette' element={<Roulette />} />
            <Route path='/filter' element={<Filter />} />
            <Route path='/my-roulette' element={<MyRoulette />} />
          </Route>
        </>
    )
  )