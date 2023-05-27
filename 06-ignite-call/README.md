# Ignite Call

## Prisma

- Migration: `npx prisma migrate dev`
- View and manipulate database: `npx prisma studio`

Using MySQL for development (see Docker section below) and PlanetScale for production.

How to execute migrations on PlanetScale:
- Make sure we are using the migration branch on DATABASE_URL (.env file)
- Execute the migrations command in the root folder: `npx prisma db push`
- Go to PlanetScale and deploy changes from "migrations" to the "main" branch

### Custom adapter

Please note that a custom Prisma adapter was created. Our flow is slightly different from the already existing Prisma adapter.

In our case, we register our user in the `/register` route before the actual sign-in, where the user is registered in the original adapter.
We also took the opportunity to normalise the fields' nomenclature.

Due to these changes, we had to amend the next-auth types to accommodate the new Prisma structure (@types/next-auth.d.ts).

For more: https://authjs.dev/guides/adapters/creating-a-database-adapter

### Auth flow

- The user is added to the database during the registration
- A cookie containing the user ID is set
- On the Google Auth callback, the user is queried in the DB using the ID stored in the cookies
- User data is updated with info coming from Google
- Cookie is deleted

## Cookies

Using the `nookies` to handle cookies in Next.js and `@types/cookie` for types (lib uses the cookie lib behind the scenes).

## Docker

Using Docker for MySQL.

- Command used to create MySQL container: `docker run --name mysql -e MYSQL_ROOT_PASSWORD=password-here -p 3306:3306 mysql:latest`
- Start container: `docker start mysql`
- Stop container: `docker stop mysql`

[Install Docker Desktop on Mac](https://docs.docker.com/desktop/install/mac-install/)

## Vercel build dependency caching workaround

Vercel caches the dependencies of your project until one of those dependencies changes. It does this to allow faster builds, and while this is typically a good thing, it causes some problems for Prisma Client.

This issue can be solved by explicitly generating Prisma Client on every deployment. Running prisma generate before each deployment will ensure Prisma Client is up-to-date.

- [Docs about the issue](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue)
- [Chosen solution - custom postinstall script](https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue#a-custom-postinstall-script)