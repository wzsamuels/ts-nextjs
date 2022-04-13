import '../styles/normalize.css'
import darkTheme from '../styles/darkTheme';
import GlobalStyles from '../components/atoms/ui/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import PageContainer from '../components/atoms/ui/PageContainer';
import NavBar from '../components/NavBar';
import FooterContent from '../components/FooterContent';
import ContentContainer from '../components/atoms/ui/ContentContainer';

const links = [
  {text: 'Get Started', url: 'getstarted'},
  {text: 'Features', url: 'features'},
  {text: 'Contact', url: 'contact'},
]

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles/>
        <PageContainer>
          <ContentContainer>
            <NavBar links={links}/>
            <Component {...pageProps} />
          </ContentContainer>
          <FooterContent links={links}/>
        </PageContainer>
      </ThemeProvider>
    </>
  )
}

export default MyApp
