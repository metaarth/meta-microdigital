import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/index.css'

// Load jQuery and Owl Carousel scripts
const loadScripts = () => {
  return new Promise((resolve) => {
    if (window.$ && window.$.fn.owlCarousel) {
      resolve()
      return
    }

    // Load jQuery
    if (!window.$) {
      const jqueryScript = document.createElement('script')
      jqueryScript.src = 'https://code.jquery.com/jquery-3.4.1.min.js'
      jqueryScript.onload = () => {
        // Load Owl Carousel
        const owlScript = document.createElement('script')
        owlScript.src = '/assets/libs/owlcarousel/owl.carousel.min.js'
        owlScript.onload = () => {
          // Load Owl Carousel CSS
          const owlCSS = document.createElement('link')
          owlCSS.rel = 'stylesheet'
          owlCSS.href = '/assets/libs/owlcarousel/assets/owl.carousel.min.css'
          document.head.appendChild(owlCSS)
          
          const owlThemeCSS = document.createElement('link')
          owlThemeCSS.rel = 'stylesheet'
          owlThemeCSS.href = '/assets/libs/owlcarousel/assets/owl.theme.default.min.css'
          document.head.appendChild(owlThemeCSS)
          
          resolve()
        }
        document.body.appendChild(owlScript)
      }
      document.body.appendChild(jqueryScript)
    } else {
      resolve()
    }
  })
}

loadScripts().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
})
