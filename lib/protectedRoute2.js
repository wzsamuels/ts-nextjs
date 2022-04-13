import React, {useEffect} from 'react'
import {Auth} from 'aws-amplify'
import {useNavigate} from "react-router-dom";

const protectedRoute2 = (Comp, route = '/signin') => (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    async function checkAuthState() {
      try {
        return await Auth.currentAuthenticatedUser()
      } catch (err) {
        navigate(route)
      }
    }
    
    checkAuthState().then(userData => console.log(userData))
  }, [navigate])
  return <Comp {...props} />
}

export default protectedRoute2