import Header from '../components/Header'
import Footer from '../components/Footer'

//import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global_style'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
          <>
          <div className="container">
            <GlobalStyle />
              <Header />
                <main>
                      <Component {...pageProps} />
                </main>
              <Footer />
            </div>
          </>
        )
}

export default MyApp
