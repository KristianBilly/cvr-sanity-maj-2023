import Head from 'next/head'
import { Footer } from './footer/footer'
import { Header } from './header/header'
import { MainContainer } from './main-container/main-container'
import { Navbar } from './navbar/navbar'
import { ThemeWrapper } from './theme-wrapper/theme-wrapper'

export const Layout = ({ children }) => (
  <ThemeWrapper>
    <Head>
      <title>Virk.dk</title>
      <link
        rel="shortcut icon"
        href="virk-dk.ico"
      />
    </Head>
    <Navbar />
    <MainContainer>
      <Header />
      {children}
    </MainContainer>
    <Footer />
  </ThemeWrapper>
)
