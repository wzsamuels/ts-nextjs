import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../features/user/userSlice";
import {H1} from "../components/atoms/ui/Typography";

const protectedRoute = (Comp, route = '/signin') => (props) => {
  const navigate = useNavigate()
  const user = useSelector(selectCurrentUser)

  useEffect(() => {
    if(!user) {
      navigate(route)
    }
  }, [navigate])

  if(user) {
    return <Comp {...props} />
  }

  return <H1>Redirecting to sign in...</H1>
}

export default protectedRoute