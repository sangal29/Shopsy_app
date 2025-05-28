import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import NotFound from './components/NotFound.jsx';

const Cart = lazy(() => import('./components/Cart.jsx'));
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx'));
const Checkout = lazy(() => import('./components/Checkout.jsx'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/product-details/:productId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductDetails />
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Cart />
          </Suspense>
        )
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Checkout />
          </Suspense>
        )
      }
    ],
    errorElement: <NotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
