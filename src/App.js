import './App.css';
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import Stories from './Components/Stories';


function App() {
  return (

    <div className='App'>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
