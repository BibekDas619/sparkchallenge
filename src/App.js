import './App.css';
import Home from './pages/home/home'
import AddJob from './pages/addJob/addJob'
import EditJob from './pages/editJob/editjob'
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addjob" element={<AddJob />} />
        <Route exact path="/editjob/:id" element={<EditJob />} />
      </Routes>
    </div>
  )
}

export default App;
