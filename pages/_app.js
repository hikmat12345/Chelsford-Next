import '../styles/globals.css'
import Script from "next/script";
import Head from "next/head"; 
import ErrorBoundary from '../components/ErrorHandler.js/ErrorBoundary';
function MyApp({ Component, pageProps }) {
  return (
      <> 
         <Head> 
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"  />
         </Head> 
            <link href="https://chelsford.com/public/css/chelsfordcourses.css" rel="stylesheet" /> 
            <ErrorBoundary>
             <Component {...pageProps} />
         </ErrorBoundary>
      </> 
    );
  }

export default MyApp
