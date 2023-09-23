import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import { Login } from './components/Login';

function App() {
  

  return (
    <>
      <h1>ThesisSync</h1>
    <BrowserRouter>
      <Route>
        <Route exactpath="/"component={Login} />
      </Route>
      </BrowserRouter>
    </>
  )
}

export default App
