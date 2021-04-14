import { useEffect } from 'react'
import '../styles/index.css'

function App({ Component, pageProps }) {
  useEffect(tryRegisterServiceWorker, [])
  return <Component {...pageProps} />
}

function tryRegisterServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', registerServiceWorker)
  }
}

function registerServiceWorker() {
  navigator.serviceWorker
    .register('/sw.js')
    .then(onServiceWorkerRegistrationSuccess)
    .catch(onServiceWorkerRegistrationError)
}

function onServiceWorkerRegistrationSuccess(event) {
  console.debug('ServiceWorker registration successful', event)
}

function onServiceWorkerRegistrationError(error) {
  console.debug('ServiceWorker registration failed ', error)
}

export default App
