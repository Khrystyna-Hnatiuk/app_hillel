import React from "react";
import { Component } from "react";

class ErrorBoundary extends Component{
    constructor (props){
        super(props);
        this.state= {hasError:false};
    }

    static getDerivedStateFromError(){
        return {hasError:true}
    }

    componentDidCatch(error,errorInfo){
        console.log(error, 'error');
        console.log("details:" ,errorInfo)
    }
    render(){
        if(this.state.hasError){
            return (
                <div className=" p-8 text-[#de8266] flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold">🚨Something went wrong</h2>
                    <p>Try refreshing page or come back later</p>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundary;