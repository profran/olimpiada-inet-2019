import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function FadeCard (props) {
  const animation = useSpring({
    delay: props.index && props.index * 75,
    transform: 'translate3d(0px,0,0)',
    opacity: 1,
    from: {
      opacity: 0,
      transform: 'translate3d(0,-64px,0)'
    }
  })
  return <animated.div style={animation}>{props.children}</animated.div>
}
