import { useRouteError } from 'react-router-dom'
import { H1, Paragraph } from 'tamagui'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <H1>Oops!</H1>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
      <Paragraph>
        <i>{error.statusText || error.message}</i>
      </Paragraph>
    </div>
  )
}
