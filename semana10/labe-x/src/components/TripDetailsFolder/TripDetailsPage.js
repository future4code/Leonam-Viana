import React from 'react'
import {useProtectedPage} from '../hooks/UseProtectedPage'


const TripDetailsPage = () => {
  useProtectedPage()
    

  return <h1>TripDetailsPage</h1>
}

export default TripDetailsPage