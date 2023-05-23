import './App.css';
import Read from './components/Read';
import Edit from './components/Edit';
import Create from './components/Create';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
  
    <h1>Hello World</h1>

    <BrowserRouter>
   
        <Route path='/' exact component={Read}></Route>
        <Route path='/edit/:id' exact component={Edit}></Route>
        <Route path='/create' exact component={Create}></Route>
    </BrowserRouter>

 
    </div>
  );
}

export default App;
