import ExtrimBlock from "./components/extrimBlock/ExtrimBlock";
import Footer from "./components/footer/Footer";
import HeaderOne from "./components/headerOne/HeaderOne";
import HeaderTwo from "./components/headerTwo/HeaderTwo";
import LastNewsBlock from "./components/lastNewsBlock/LastNewsBlock";
import LastNewsThree from "./components/lastnewsBlockThree/LastNewsThree";
import LastNewsTwo from "./components/lastNewsBlockTwo/LastNewsTwo";
import SocialNetworks from "./components/scialNetworks/SocialNetworks";
import Trainers from "./components/trainers/Trainers";
import TrainPage from "./components/trainPage/trainPage";
import './media/Media.css'

function App() {
  return (
    <div className="App">
      <HeaderOne />
      <HeaderTwo />
      <LastNewsBlock />
      <Trainers />
      <LastNewsTwo />
      <LastNewsThree />
      <SocialNetworks />
      <ExtrimBlock />
      <Footer />
      {/* <TrainPage /> */}
    </div>
  );
}

export default App;
