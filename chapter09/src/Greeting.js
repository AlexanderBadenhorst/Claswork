import React from "react";//The core library for building user interfaces.
import { useSpring, animated } from 'react-spring';// Hooks and components from react-spring that enable animations.

const Greeting = () => {
  const fadeProps = useSpring({//This animation controls the opacity of the component, making it fade in from fully transparent (opacity: 0) to fully opaque (opacity: 1) over 1 second.
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // fade in over 1 second
  });

  const oscillateProps = useSpring({//This animation makes the text oscillate in opacity, fading between fully opaque (opacity: 1) and slightly transparent (opacity: 0.8). This oscillation lasts for 2 seconds and loops indefinitely.
    from: { opacity: 1 },
    to: { opacity: 0.8 },
    config: { duration: 2000, loop: true }, // oscillate over 2 seconds, looping
  });

  return (
    // An animated.div for the fade-in effect, which wraps another animated.div that applies the oscillating effect.
    <animated.div style={fadeProps}> 
      <animated.div style={oscillateProps}>
        Hello there!<br />
        If you are new to React, <a href="https://youtu.be/SqcY0GlETPk?si=-dnbuWUxEszcIY4O" target="_blank" rel="noopener noreferrer">here</a> is an excellent demonstration of the basics!
      </animated.div>
    </animated.div>
  );
}

export default Greeting;