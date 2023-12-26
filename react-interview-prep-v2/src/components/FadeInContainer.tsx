import {useSpring, animated} from 'react-spring'

interface IFadeInContainerProps { 
    className?: string,
    children?: any
}

const FadeInContainer = (props: IFadeInContainerProps) => {
    return (
        <animated.div className={props.className} style={useSpring({
                opacity: 1, from: {opacity: 0}
                // from: {filter: 'blur(16px)'},
                // to: {filter: 'blur(0px)'}
            })}>
            {props.children}
        </animated.div>
    );
}

export default FadeInContainer;