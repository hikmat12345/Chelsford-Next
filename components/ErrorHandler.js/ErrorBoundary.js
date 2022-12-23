import Image from "next/image"
import React from "react"
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
  
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
  
      return { hasError: true }
    }
    componentDidCatch(error, errorInfo) {
      // You can use your own error logging service here
      console.log({ error, errorInfo })
    }
    render() {
      // Check if the error is thrown
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
            <div class="not-found-main-container">
              <div class="fae--page-not-found-main-container">
                <Image width="50%" height="auto" src="/assets/images/not_found.png" alt="/assets/images/not_found.png" />
                  <p class="fae--text  heading   undefined">Page Not Found! </p>
                  <p class="fae--text     undefined" style="cursor: pointer;">&lt; Return To Home </p></div></div>
          </div>
        )
      }
  
      // Return children components in case of no error
  
      return this.props.children
    }
  }
  
  export default ErrorBoundary