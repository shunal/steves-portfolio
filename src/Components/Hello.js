import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { config } from 'react-spring'


function Hello() {
    const [flip, set] = useState(false)
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 300,
      config: config.molasses,
    //   onRest: () => set(!flip),
    })
  
    return <animated.h2 class= "mb-3"style={props}>What I'm Great At</animated.h2>
  }

export default Hello