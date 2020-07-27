import React, { useHistory, useEffect } from 'react'
import {useProtectedPage} from '../hooks/UseProtectedPage'

const CreateTripPage = () => {
  useProtectedPage()

    return <h1>CreateTripPage</h1>
}

export default CreateTripPage