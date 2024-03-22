import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText('An authentication link was sent to your email.')

  expect(toast).toBeVisible()

  // Debug only: playwright ui bug show last action as a blank page
  // await page.waitForTimeout(2000)
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByLabel('Your email').fill('wrong@example.com')
  await page.getByRole('button', { name: 'Access dashboard' }).click()

  const toast = page.getByText('Invalid credentials.')

  expect(toast).toBeVisible()
})

test('navigate to new partner page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'New partner' }).click()

  expect(page.url()).toContain('/sign-up')
})
