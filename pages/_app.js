import { useState } from 'react'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css';
import Layout from '../components/layouts/Layout';
import { ProductProvider } from '../contexts/ProductProvider'
import FavoriteProvider from '../contexts/FavoriteProvider'
import CartProvider from '../contexts/CartProvider'

export default function App({ Component, pageProps }) {
    // Get data via getServerSideProps in `pageProps`.
    const { products } = pageProps

    // Store data as state for the Providers.
    const [ProductList] = useState(products)

    return (
        <ProductProvider value={{ products: ProductList }}>
            <CartProvider>
                <FavoriteProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </FavoriteProvider>
            </CartProvider>
        </ProductProvider>
    )
}