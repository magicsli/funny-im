import LoadingContainer from '@/components/LoadingContainer'
import { RootState } from '@/redux'
import { login } from '@/redux/user'
import { RootRouterPath } from '@/router/path'
import userApi from '@/service/user'
import { getToken } from '@/utils/tool'
import { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'

export interface AuthLoginProps extends React.PropsWithChildren {
  children: React.ReactElement
  autoLogin?: boolean
}

const AuthLogin = ({ children, autoLogin = true }: AuthLoginProps) => {
  const dispath = useDispatch()
  const userId = useSelector<RootState>(state => state.user?.user_id)

  const [loading, setLoading] = useState(() => Boolean(autoLogin && getToken() && !userId))

  useLayoutEffect(() => {
    if (loading) {
      userApi
        .update()
        .then(res => {
          dispath(login(res))
        })
        .finally(() => setLoading(false))
    }
  }, [])

  if (userId || loading) {
    return <LoadingContainer loading={loading}>{children}</LoadingContainer>
  } else {
    return <Navigate to={RootRouterPath.Login} />
  }
}

export default AuthLogin
