import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import MainPage from './ui/page1';
// import VideoDetail from './ui/page2';
// import { VideoDetail } from './ui/page2';  // Use curly braces for named exports
import { VideoDetail } from './ui/page2';

function App() {
 
  return (
  <>
     <Router>
     <Routes>
     <Route path="/" element={<MainPage/>} />
     <Route path="/videos/:id" element={<VideoDetail />} /> 
     </Routes>
     </Router></>
      
  )
}

export default App