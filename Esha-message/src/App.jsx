import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ButtonScreen from './components/ButtonScreen'
import LoveMessageScreen from './components/LoveMessageScreen'

function App() {
  const [showMessage, setShowMessage] = useState(false)

  const handleButtonClick = () => {
    setShowMessage(true)
  }

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {!showMessage ? (
          <ButtonScreen key="buttons" onButtonClick={handleButtonClick} />
        ) : (
          <LoveMessageScreen key="message" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

