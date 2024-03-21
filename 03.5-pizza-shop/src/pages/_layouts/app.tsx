import { isAxiosError } from 'axios'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { Header } from '@/components'
import { api } from '@/lib'

export function AppLayout() {
  const navigate = useNavigate()

  // The backend authentication implementation employs HTTP-only cookies
  // to safeguard private areas from potential manipulation or unauthorized access by extensions.
  // Due to the unavailability of direct access to such cookies, interception of requests is necessary.
  // If a user is unauthorized, they are redirected back to the login page.
  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response, // success
      (error) => {
        // isAxiosError give us access to the error types
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
