// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

/**
 * Change next-auth types since the default structure was changed
 * Note: this is an extension and not an override
 */
declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url: string
  }

  export interface Session {
    user: User
  }
}
