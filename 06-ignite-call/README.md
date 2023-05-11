# Ignite Call

## Prisma

- Migration: `npx prisma migrate dev`
- View and manipulate database: `npx prisma studio`

### Custom adapter

Please note that a custom Prisma adapter was created. Our flow is slightly different from the already existing prisma adapter.

In our case, we register our user in the `/register` route before the actual sign-in, where the user is registered in the original adapter.
We also took the opportunity to normalise the fields' nomenclature.

Due to these changes, we had to amend the next-auth types to accommodate the new Prisma structure (@types/next-auth.d.ts).

## Cookies

Using the `nookies` to handle cookies in Next.js and `@types/cookie` for types (lib uses the cookie lib behind the scenes).