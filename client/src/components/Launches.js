import React, { useState, useEffect } from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

const Launches = () => {
    
  const { loading, error, data } = useQuery(LAUNCHES_QUERY)
  console.log(data)

//   const getLaunches = () => {
//     if (loading) {
//       console.log('loading ', loading)
//       return <div>Loading..</div>
//     }
//     if (error) console.log(error)
//     console.log('loading ', loading)
//   }

  return (
    <div>
      <h1 className='display-4 my-3'>Launches</h1>
      {/* {getLaunches()} */}
    </div>
  )
}

export default Launches
