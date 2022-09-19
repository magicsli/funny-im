import React from 'react'

import IM from '@/page/IM'
import Friend from '@/page/IM/Friend'
import Me from '@/page/IM/Me'
import Login from '@/page/Login'
import Regiset from '@/page/Regiset'
import MessageLoading from '@/page/IM/Message/component/Loading'

import { createBrowserRouter, Navigate } from 'react-router-dom'
import { IMRouterPath, RootRouterPath } from './path'

const IMMessage = React.lazy(() => import('@/page/IM/Message'))

// 此页面引入了所有其他页面， 请不要随意导入， 其余需要定义的请在其他页面引入， 防止循环引用
export const router = createBrowserRouter([
  {
    id: RootRouterPath.IM,
    path: RootRouterPath.IM,
    element: <IM />,
    children: [
      {
        path: IMRouterPath.Message,
        element: (
          <React.Suspense fallback={<MessageLoading />}>
            <IMMessage />
          </React.Suspense>
        )
      },
      {
        path: IMRouterPath.firend,
        element: <Friend />
      },
      {
        path: IMRouterPath.me,
        element: <Me />
      },
      {
        index: true,
        element: <Navigate to={IMRouterPath.Message} />
      }
    ]
  },
  {
    path: RootRouterPath.Login,
    element: <Login />
  },
  {
    path: RootRouterPath.Regiset,
    element: <Regiset />
  },
  {
    index: true,
    element: <Navigate to={RootRouterPath.IM} />
  }
])
