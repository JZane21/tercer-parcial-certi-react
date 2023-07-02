import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AppProvider } from './context/AppProvider'
import { AppTheme } from './theme/AppTheme'

function App() {

  return (
    <>
      <AppTheme>
        <AppProvider>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </AppProvider>
      </AppTheme>
      
    </>
  )
}

export default App
