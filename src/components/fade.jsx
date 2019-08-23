import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function FadeCard (props) {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } })
  return <animated.div style={animation}>{props.children}</animated.div>
}
