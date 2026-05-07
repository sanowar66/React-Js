import { Footer ,Navbar, NavbarItem,Products} from './components'
 


import './App.css'
const App=()=>{
  return (
    <div className="App">
      <Navbar />
      <NavbarItem />
      <main>
        <Products/>

      </main>
      <Footer />
    </div>
  );
}

export default App;
