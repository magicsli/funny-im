import { RootState } from '@/redux'
import { replace } from '@/redux/user'
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
  const userId = useSelector<RootState>(state => state.user?._id)

  const [loading, setLoading] = useState(() => autoLogin && getToken() && !userId)

  useLayoutEffect(() => {
    if (loading) {
      userApi
        .update()
        .then(res => {
          dispath(replace(res))
        })
        .finally(() => setLoading(false))
    }
  }, [])

  if (loading) {
    return <div>loading...</div>
  }

  if (userId) {
    return children
  } else {
    return <Navigate to={RootRouterPath.Login} />
  }
}

export default AuthLogin
