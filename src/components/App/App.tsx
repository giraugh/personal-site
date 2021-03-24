import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../config/theme'
import TitleSection from '../TitleSection/TitleSection'

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TitleSection />
      </ThemeProvider>
    </div>
  )
}

export default App
