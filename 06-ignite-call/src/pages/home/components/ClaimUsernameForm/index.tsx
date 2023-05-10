import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@ldm-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Must contain at least 3 characters.' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'Letters and hyphens only.',
    }) // only letters and hyphens
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleUsernameClaim(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleUsernameClaim)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="your-username"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Claim
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Enter the desired username.'}
        </Text>
      </FormAnnotation>
    </>
  )
}
