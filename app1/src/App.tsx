import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <h2>App1</h2>
      <a href='/app2/'>Go to App2</a>
      <div>
         <Link to='test'>Test</Link>
      </div>
    </>
  )
}

export default App
