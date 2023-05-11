// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

/**
 * Override next-auth types since the default structure was changed
 */
declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }
}
