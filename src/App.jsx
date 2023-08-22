import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
  }
  render() {
    return <h1>APP</h1>;
  }
}

export default App;
