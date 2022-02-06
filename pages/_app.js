import Header from '../components/Header'
import Footer from '../components/Footer'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global_style'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
          <>
          <GlobalStyle />
            <Header />
              <main>
                    <Component {...pageProps} />
              </main>
            <Footer />
          </>
        )
  
}

export default MyApp
