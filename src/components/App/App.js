import React from 'react'

import { useSetData } from '../../hooks/useSetData'
import { StyledApp } from '../../styledComponents/styledComponents'

const App = () => {
  const [state] = useSetData()

  return <StyledApp />
}

export default App
