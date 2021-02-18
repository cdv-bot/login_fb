import { lazy } from 'react';
const PayLoad = lazy(() => import('../Payload'));
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
  },
  {
    path: '/checkouts/:id',
    exact: true,
    main: PayLoad
  }
]

export default Page;