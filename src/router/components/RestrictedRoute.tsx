import { FC, ReactNode } from 'react'

// import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactNode
  redirect: string
}

const RestrictedRoute: FC<Props> = ({ redirect, children }) => {
  console.log(redirect)
  //   if (isLoggedIn && canNavigate) {
  //     return <Navigate to={redirect} />
  //   }

  return <>{children}</>
}

export default RestrictedRoute
