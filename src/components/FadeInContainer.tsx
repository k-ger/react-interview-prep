import React from 'react'
import {useSpring, animated} from 'react-spring'

interface FadeInContainerProps { 
    className?: string,
    children?: any
}

function FadeInContainer(props:FadeInContainerProps) {
    //const props = useSpring({opacity: 1, from: {opacity: 0}})
    return (
        <animated.div className={props.className} style={useSpring({opacity: 1, from: {opacity: 0}})}>
            {props.children}
        </animated.div>
    );
}

export default FadeInContainer;