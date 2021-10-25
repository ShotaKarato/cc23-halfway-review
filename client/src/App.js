import Console from "./console/Console";
import Header from "./header/Header";
import Log from "./log/Log";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Log />
        <Console />
      </div>
    </div>
  );
}

export default App;
