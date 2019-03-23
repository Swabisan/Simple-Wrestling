import React from 'react'
import styled from 'styled-components'

const Text = styled.h2`
  position: absolute;
  left: 8em;

  width: 24em;
  height: 2em;
  margin: 0.5em 0 0;

  font-weight: 500;
  font-size: 1em;
  text-align: center;
  color: #fff;
`

const Name = (props) => {
  return <Text>{props.text}</Text>
}

export default Name
