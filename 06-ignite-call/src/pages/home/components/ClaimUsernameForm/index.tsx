import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Button, TextInput } from '@ldm-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form } from './styles'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleUsernameClaim(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
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
  )
}
