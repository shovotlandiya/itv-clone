import Header from "./components/Header/Header";
import Footer from "./Page/Footer";
import Home from "./Page/Home";
import {Routes,Route} from 'react-router-dom'
import Details from "./Page/Details";
import NotWorkedPage from "./Page/NotworkedPage";





function App() {
  return (
    <div className="bg-slate-600">
      <Header/>
      
      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/films" element={<NotWorkedPage/>}/>
        <Route path="/serials" element={<NotWorkedPage/>}/>
        <Route path="/cartoons" element={<NotWorkedPage/>}/>
        <Route path="/anime" element={<NotWorkedPage/>}/>
      </Routes>

      <Footer/>


      
    </div>
  );
}

export default App;
