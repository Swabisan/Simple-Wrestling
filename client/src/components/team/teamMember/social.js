import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import styled from 'styled-components'

import { ReactComponent as GitHub } from 'assets/github.svg'

const StyledGitHub = styled(GitHub)`
  position: absolute;
  left: 100%;

  width: 2em;
  height: 2em;
  margin: 0.5em;
`
const StyledLink = styled.a`
  border-radius: 100%;
`

const Social = (props) => {
  const { github } = props

  const settings = {
    type: 'round',
    color: '#C4C4C4',
    ready: github ? github.includes('https://github.com/') : false,
    style: {
      position: 'absolute', left: '100%',
      width: '2em', height: '2em',
      margin: '0.5em'
    },
    showLoadingAnimation: true
  }

  return (
    <ReactPlaceholder {...settings}>
      <StyledLink href={github} target='_blank'><StyledGitHub /></StyledLink>
    </ReactPlaceholder>
  )
}

export default Social
