import { Footer ,Navbar, NavbarItem,Products} from './components'
import { Badge } from "flowbite-react";
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarItem />
      <main>
        <Products/>
      <div className="flex-gap-3">
      <Badge className='lime'><b>documentation</b></Badge>
      <Badge color="purple">help wanted</Badge>
      <Badge color="rose">bug</Badge>
    </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
