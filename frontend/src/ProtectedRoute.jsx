import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated , children , redirect, loading}) => {
  if (loading) return <div>Loading...</div>; 
  return (
    isAuthenticated ? children : <Navigate to={redirect} replace/>
  )
}

export default ProtectedRoute;