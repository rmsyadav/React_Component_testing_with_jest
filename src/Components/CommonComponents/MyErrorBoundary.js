import { Component } from "react";


class MyErrorBoundary extends Component {

    constructor(props){
        super(props);
        this.logErrorToServices = console.log;
        

    }
    state = { hasError: false };
    static getDerivedStateFromError(error){
        // Update state so the next render will show the fallback UI
        return { hasError: true };
   }

   componentDidCatch(error, info) {
       
       this.logErrorToServices(error.toString(), info.componentStack);
     }
    
     render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1 data-testid="errorBoundary">Something went wrong.</h1>;
          }
      
          return this.props.children; 
     } 
   
}

export default MyErrorBoundary;