import { FC, ReactNode } from 'react'

// import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode
  redirect: string
}

const PrivateRoute: FC<Props> = ({ redirect, children }) => {
  //   if (!isLoggedIn) {
  //     return <Navigate to={redirect} />;
  //   }
  console.log(redirect)

  return <>{children}</>
}

export default PrivateRoute
