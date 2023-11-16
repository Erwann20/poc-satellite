import { Link } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
      <h2>App2</h2>
      <a href='/app1/'>Go to App1</a>
      <div>
         <Link to='test'>Test</Link>
      </div>
    </>
  )
}

export default App
