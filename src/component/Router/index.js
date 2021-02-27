import { lazy } from 'react';
const PayLoad = lazy(() => import('../Payload'));
const BuyInfo = lazy(() => import('./../Buy_info'));
const Home = lazy(() => import('./../Content'));
const HomeLoad = lazy(() => import("./../loading/homeload.js"));
// const 

export const API_ENDPOINT = 'http://localhost:3000';
export const STATUSES = [
  {
    value: 0,
    label: "READY"
  },
  {
    value: 1,
    label: "IN PROGRESS"
  },
  {
    value: 2,
    label: "COMPLETED"
  },
];


export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202
};


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
  },
  {
    path: 'loading',
    exact: true,
    main: HomeLoad
  },
]

export default Page;