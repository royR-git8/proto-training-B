import "./App.css";
import { getPicUrl } from "./imageurl";
import "./index.css";
import "./NavBar.css";

function App() {
  return (
    <>
      <body>
        <h1>this is my title hello </h1>
        <div>
          this is my react application this app is about doing my first react
          application and here is a photo of the logo of ofek
        </div>
        <br />
        <img
          className="imgStyles"
          src={getPicUrl}
        />
      </body>
    </>
  );
}

export default App;
