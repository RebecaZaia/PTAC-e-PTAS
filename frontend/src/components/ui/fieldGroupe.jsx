import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function Fieldgroup() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Cole o link longo aqui</FieldLabel>
        <Input id="fieldgroup-name" placeholder="https:// www.exemplodeurllonga.com.br/esta-e-uma-url-muito-longa-para-eu-compartilhar/por-favor-reduza-ela-para-mim" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Personalize a URL: https://min.com/</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          placeholder="Adicionar a URL personalizada aqui"
        />
      </Field>
      <Field orientation="horizontal">
        <Button type="submit">Encurtar link gratuitamente</Button>
      </Field>
    </FieldGroup>
  )
}
