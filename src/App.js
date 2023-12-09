import logo from './logo.svg';
import './App.css';
import NavbarCont from './components/navbarBlock/NavbarCont';
import TopContent from './components/topCotent/TopContent';
import DiscriptBlock from './components/discript/DiscriptBlock';
import StufBlock from './components/stuf/StufBlock';
import InfoBlock from './components/infoB/InfoBlock';
import UserBlock from './components/usersB/UserBlock';
import PredBottom from './components/predBot/PredBottom';
import FooterBlock from './components/footB/FooterBlock';

function App() {
  return (
    <div className="App">
      <NavbarCont/>
      <TopContent/>
      <img className="img-bot-abs" src="./assests/bot.jpg"/>
      <DiscriptBlock/>
      <StufBlock/>
      <InfoBlock/>
      <UserBlock/>
      <PredBottom/>
      <FooterBlock/>
    </div>
  );
}

export default App;
