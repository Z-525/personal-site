import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

// 根组件：路由 + 首页
function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

export default App
