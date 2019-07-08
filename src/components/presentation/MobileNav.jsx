import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom';
import { animated, useTransition, useSpring, useChain, config } from 'react-spring'

const data = [
      {
        name: 'Home',
        path: '/',
        description: '#e0c3fc → #8ec5fc',
        css: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        height: 400
      },
      {
        name: 'Portfolio',
        path: '/portfolio',
        description: '#f093fb → #f5576c',
        css: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        height: 400
      },
      {
        name: 'Rates',
        path: '/rates',
        description: '#5ee7df → #b490ca',
        css: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)',
        height: 400
      },
      {
        name: 'Resume',
        path: '/resume',
        description: ' #ddd6f3 → #faaca8',
        css: 'linear-gradient(135deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)',
        height: 200
      },
      {
        name: 'Waste',
        path: '/blog',
        description: '#f6d365 → #fda085',
        css: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
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
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  const handleClick = (path) => {
      console.log(path)
  }

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6])
  return (
      <animated.div className="anim-nav-container uk-hidden@s" style={{ ...rest, width: width, height: height }} onClick={() => set(open => !open)}>
        <div style={{marginTop: "8px"}} className="uk-padding-small uk-position-fixed">
            <span className="uk-float-left" data-uk-icon="icon: menu; ratio: 0.9" />
            <small className="uk-float-left uk-text-middle">&nbsp;MENU</small>
        </div>
        {transitions.map(({ item, key, props }) => (
            <NavLink key={key} activeClassName="uk-active" exact to={item.path}>
            <animated.div className="anim-nav-item uk-flex-center uk-flex uk-flex-middle" key={key} onClick={handleClick(item.path)} style={{ ...props, background: item.css }}>
                <p style={{color: "white"}} className="uk-h3 uk-margin-remove uk-padding-remove">{item.name}</p>
            </animated.div>
            </NavLink>
        ))}
      </animated.div>
  )
}

export default MobileNav
