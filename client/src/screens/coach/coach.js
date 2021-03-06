import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import request from 'api'

import wrestler from 'models/wrestler'
import Header from 'components/header'
import Spreadsheet from 'components/spreadsheet'

const Wrapper = styled.section`
  position: relative;
`
const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Home = ({ match }) => {
  const [team, setTeam] = useState({})
  const [teams, setTeams] = useState([])
  const { name, roster } = team

  useEffect(() => {
    const rosterID = match.params.id ? match.params.id : '0'
    request({
      endpoint: `/api/roster/${rosterID}`,
      method: 'GET'
    })
      .then(res => setTeam(res))
      .catch(err => new Error(err))
  }, [match.params.id])

  useEffect(() => {
    request({
      endpoint: 'https://my-json-server.typicode.com/swabisan/demo/Teams',
      method: 'GET'
    })
      .then(res => setTeams(res))
      .catch(err => new Error(err))
  }, [])

  const update = body => {
    request({
      endpoint: '/api/roster/update',
      body: JSON.stringify(body)
    })
      .then(res => alert(`${name} saved`))
      .catch(err => new Error(err))
  }

  return (
    <Wrapper>
      <Header text={'Coach Dashboard'} />
      <Row>
        <Spreadsheet name={name} location={'coach'}
          data={roster} links={teams}
          defaultRow={wrestler} update={update} />
      </Row>
    </Wrapper>
  )
}

export default Home
