import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant name').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('123812641264')

  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Restaurant successfully registered!')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Restaurant name').fill('Invalid name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Your phone').fill('123812641264')

  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Error when registering restaurant.')

  await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Login' }).click()

  expect(page.url()).toContain('/sign-in')
})
