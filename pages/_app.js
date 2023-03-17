import '@/styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
const progress = new ProgressBar({
  size: 4,
  color: "#1e3a8a",
  className: 'z-50',
  delay: 100 //even if our website is too fast we still want to show the progress bar
})

Router.events.on('routeChangeStart', progress.start) //telling to next js that when we start a route, fire this progress bar
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
