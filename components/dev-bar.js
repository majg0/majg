import React, { useEffect, useState } from 'react'
import Container from '../components/container'

export default function DevBar({ children }) {
  const [active, setActive] = useState(false)
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'F9') {
        setActive(!active)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active, setActive])
  return (
    active && (
      <div>
        <Container>
          <div className="flex justify-between text-xl items-center">
            Dev Bar
            <div className="text-base font-light">F9 to toggle</div>
            <div>{children}</div>
          </div>
        </Container>
      </div>
    )
  )
}
