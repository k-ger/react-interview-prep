// import {animated, useTransition} from 'react-spring'

// interface TextAnimationProps { 
//     text?: string
// }

// function TextAnimationContainer(props: TextAnimationProps) {
//     return (
//         <div>
//             {useTransition(props.text, null, {
//                 from: { opacity: 0 },
//                 enter: { opacity: 1 },
//                 leave: { display: 'none' }
//             }).map(({ item, key, props }) => (
//                 <animated.div key={key} style={props}>{item}</animated.div>
//             ))}
//         </div>
//     )
// }

// export default TextAnimationContainer;