import React, { useState, useRef } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import { animated, useTransition, useSpring, useChain, config } from 'react-spring'

const data = [
      {
        name: 'Home',
        path: '/',
        description: '#f6d365 → #ff6f00',
        css: 'linear-gradient(135deg, #f6d365 0%, #ff6f00 100%)',
        backgroundColor: 'rgba(240, 98, 146, 1)',
        height: 400
      },
      {
        name: 'Case Studies',
        path: '/portfolio',
        description: '#7ab3cb → #49839a',
        css: 'linear-gradient(135deg, #7ab3cb 0%, #49839a 100%)',
        backgroundColor: 'rgba(240, 98, 146, 0.9)',
        height: 400
      },
      {
        name: 'Resume',
        path: '/resume',
        description: '#26c6da → #00897b',
        css: 'linear-gradient(135deg, #26c6da 0%, #00897b 100%)',
        backgroundColor: 'rgba(240, 98, 146, 0.8)',
        height: 400
      },
      {
        name: 'Waste',
        path: '/blog',
        description: ' #f48fb1 → #ef5350',
        css: 'linear-gradient(135deg, #f48fb1 0%, #ef5350 100%)',
        backgroundColor: 'rgba(240, 98, 146, 0.7)',
        height: 400
      },
      {
        name: 'Contact',
        path: '/contact',
        description: '#ff94c2 → #f06292',
        css: 'linear-gradient(135deg, #ff94c2 0%, #f06292 100%)',
        backgroundColor: 'rgba(240, 98, 146, 0.6)',
        height: 200
      }
    ]

const MobileNav = () => {
  const [open, set] = useState(false)
  const springRef = useRef()
  const { height, width, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: {
        height: '60px',
        width: '80px',
        background: 'rgb(236, 239, 241, 0)'
    },
    to: {
        height: open ? window.innerHeight + 'px' : '60px',
        width: open ? window.innerWidth + 'px' : '80px',
        background: open ? 'rgb(236, 239, 241, 1.0)' : 'rgb(236, 239, 241, 0)'
    }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], item => item.name, {
    ref: transRef,
    unique: true,
    trail: 500 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.5 : 0.75])
  return (
        <animated.div
            className="anim-nav-container uk-hidden@s"
            style={{ ...rest, width: width, height: height, zIndex: "1000" }}
            onClick={() => set(open => !open)}>
            <div style={{marginTop: "8px"}} className={`uk-padding-small uk-position-fixed uk-position-z-index`}>
                <span
                    className={`uk-float-left ${open && "uk-light"}`}
                    data-uk-icon={`icon: ${!open ? "menu" : "arrow-left"}; ratio: 0.9`}
                />
                <small className={`uk-float-left uk-text-middle ${open && "uk-light"}`}> &nbsp;
                    {!open ? "MENU" : "BACK"}
                </small>
            </div>
            {transitions.map(({ item, key, props }) => (
                <NavLink key={key} style={{textDecoration: "none"}} exact to={item.path}>
                <animated.div
                    key={key}
                    className="anim-nav-item uk-flex-center uk-flex uk-flex-middle"
                    style={{ background: item.backgroundColor, ...props }}>
                        <p style={{color: "white"}} className="uk-h4 uk-margin-remove uk-padding-remove">{item.name}</p>
                </animated.div>
                </NavLink>
            ))}
      </animated.div>
  )
}

export default withRouter(MobileNav)
