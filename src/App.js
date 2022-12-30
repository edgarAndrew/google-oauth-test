import "./styles/App.scss"
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Test from "./components/Test";
import freshTopicImg from './assets/academy.png'
import freshTopic2Img from './assets/story.png'
import data from './data/data.json'

// const {freshTopic,freshTopic2} = data

// const yellow = "#fff100",
// pink = "#ed1e79",
// red = "#d20120",
// white = "#fff",
// brown = "#6d3d0f";

function App() {
  return (
    <>
    {/* <IntroVideo/>
    <Section
      h3={freshTopic.heading} 
      text={freshTopic.text} 
      btnTxt={freshTopic.btn} 
      imgSrc={freshTopicImg} 
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink}
    />
    <Section
      h3={freshTopic2.heading} 
      text={freshTopic2.text} 
      btnTxt={freshTopic2.btn} 
      imgSrc={freshTopic2Img} 
      backgroundColor={pink}
      headingColor={yellow}
      textColor={yellow}
      btnBgColor={yellow}
      btnColor={pink}
    /> */}
    <Test/>
    </>
  );
}

export default App;
