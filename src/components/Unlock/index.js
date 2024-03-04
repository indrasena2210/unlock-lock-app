// Write your code here
import {useState} from 'react'

import {Container, Image, Para, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLockStatus] = useState(true)

  const onclickButton = () => {
    setLockStatus(prevState => !prevState)
  }

  const devicestatusText = isLocked ? 'Locked' : 'Unlocked'
  const buttonText = isLocked ? 'Unlock' : 'Lock'
  const image = isLocked ? (
    <Image
      src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
      alt="lock"
    />
  ) : (
    <Image
      src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
      alt="unlock"
    />
  )

  return (
    <>
      <Container>
        {image}
        <Para>Your Device is {devicestatusText}</Para>
        <Button type="button" onClick={onclickButton}>
          {buttonText}
        </Button>
      </Container>
    </>
  )
}

export default Unlock
