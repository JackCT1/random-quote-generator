import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
  }

  fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice");
  };

  render() {
    return <h1>APP</h1>;
  }
}

export default App;
