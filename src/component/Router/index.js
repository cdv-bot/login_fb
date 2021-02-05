import { lazy } from 'react';
const BuyInfo = lazy(() => import('./../Buy_info'));
const Home = lazy(() => import('./../Content'));
// const 


const Page = [
  {
    path: '/',
    exact: true,
    main: Home
  },
  {
    path: '/products/:id',
    exact: true,
    main: BuyInfo
  }
]

export default Page;