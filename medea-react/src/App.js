import Header from './MyWebsite/Header'
import Footer from './MyWebsite/Footer'
import MainSection from './MyWebsite/MainSection'
import Navigation from './MyWebsite/Navigation'

function App() {
  return (
    <div>
        <Header title="My Website!">
        </Header>
        <Navigation></Navigation>
        <MainSection>
          <p></p>
        </MainSection>
        <Footer footerText="my website footer text">
        </Footer>
    </div>
  );
}

export default App;
