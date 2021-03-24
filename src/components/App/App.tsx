import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../config/theme'
import TitleSection from '../TitleSection/TitleSection'
import BioSection from '../BioSection/BioSection'

const App: React.FC = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TitleSection />
        <BioSection />
      </ThemeProvider>
    </div>
  )
}

export default App
