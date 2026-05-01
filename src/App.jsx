import "./App.css";
import{ Footer} from "./components/footer";
import { Navbar,NavbarItem } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarItem />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;