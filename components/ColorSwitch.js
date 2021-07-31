import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

const COLOR_MODE = 'colorMode'
const ColorModes = {
  DARK: 'dark',
  LIGHT: 'light'
}

export default function ColorSwitch () {
  const [mode, setMode] = useState(ColorModes.LIGHT)

  useEffect(() => {
    const current = window.localStorage.getItem(COLOR_MODE)

    if (current) {
      setMode(current)
      saveMode(current)
    }
  }, [])

  const toggleMode = () => {
    setMode(m => {
      const newMode = m === ColorModes.DARK ? ColorModes.LIGHT : ColorModes.DARK

      saveMode(newMode)

      return newMode
    })
  }
  const saveMode = (newMode) => {
    document.querySelector('html').classList.remove(ColorModes.LIGHT)
    document.querySelector('html').classList.remove(ColorModes.DARK)
    document.querySelector('html').classList.add(newMode)
    window.localStorage.setItem(COLOR_MODE, newMode)
  }

  const getModeIcon = () => {
    return mode === ColorModes.LIGHT ? faSun : faMoon
  }

  return (
    <div className='flex justify-center'>
      <div className='flex items-center justify-center'>
        <label htmlFor='colorMode' className='flex items-center cursor-pointer'>
          <div className='relative'>
            <input
              type='checkbox' id='colorMode' aria-label='color mode' className='sr-only' onChange={toggleMode}
              checked={mode === ColorModes.DARK}
            />
            <div className='block bg-gray-600 w-14 h-8 rounded-full' />
            <div className='dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition'>
              <FontAwesomeIcon
                icon={getModeIcon()}
                className='w-4 h-4 text-gray-900 dark:text-white absolute left-1 top-1'
              />
            </div>
          </div>
        </label>

      </div>
      <style jsx>{`
        input ~ .block {
          background-color: #171923;
        }

        input:checked ~ .block {
          background-color: #f1f1f1;
        }

        input ~ .dot {
          background-color: #f1f1f1;
        }

        input:checked ~ .dot {
          transform: translateX(100%);
          background-color: #171923;
        }

      `}
      </style>
    </div>
  )
}
