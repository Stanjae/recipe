import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider} from 'react-query'

const newQuery = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, }, // default: true
}})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={newQuery}>
        <App />
    </QueryClientProvider>
  </React.StrictMode>
)
