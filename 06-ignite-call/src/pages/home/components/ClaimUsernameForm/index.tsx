import { Button, TextInput } from '@ldm-ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="your-username" />
      <Button size="sm" type="submit">
        Claim
        <ArrowRight />
      </Button>
    </Form>
  )
}
