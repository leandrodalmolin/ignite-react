import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ArrowRight } from 'phosphor-react'
import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ldm-ignite-ui/react'
import { Container, Form, FormError, Header } from './styles'
import { api } from '@/lib/axios'
import { AxiosError } from 'axios'
import { NextSeo } from 'next-seo'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Must contain at least 3 characters.' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'Letters and hyphens only.',
    }) // only letters and hyphens
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'Must contain at least 3 characters.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  // change value even when the url param is changed
  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })

      await router.push('/register/connect-calendar')
    } catch (err) {
      if (err instanceof AxiosError && err?.response?.data?.message) {
        alert(err.response.data.message)
        return
      }

      console.error(err)
    }
  }

  return (
    <>
      <NextSeo title="Create an account | Ignite Call" />

      <Container>
        <Header>
          <Heading as="strong">Welcome to Ignite Call!</Heading>
          <Text>
            We need some information to create your profile! Oh, you can edit
            this information later.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Username</Text>
            <TextInput
              prefix="ignite.com/"
              placeholder="your-username"
              {...register('username')}
            />
            {errors.username && (
              <FormError size="sm">{errors.username.message}</FormError>
            )}
          </label>

          <label>
            <Text size="sm">Full name</Text>
            <TextInput placeholder="Your name" {...register('name')} />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>

          <Button type="submit" disabled={isSubmitting}>
            Next step
            <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
