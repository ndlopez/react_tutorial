/* REsponsive mode hook */

import React from "react";

export default function useWindowSize(){
    /*if (typeof window !== "undefined"){
        return {width:1200,height:800};
    }*/
    const isSSR = typeof window !== "undefined";
    const [windowSize, setWindowSize] = React.useState({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight,
    });
    
    function changedWindowSize(){
        setWindowSize({width:window.innerWidth,height:window.innerHeight});
    }
    React.useEffect(()=>{
        window.addEventListener("resize",changedWindowSize);
        return () => {
            window.removeEventListener("resize",changedWindowSize);
        };
    },[]);
    return windowSize;
}