import { use{{cookiecutter.project_slug.capitalize()}}Store } from '@/stores/{{cookiecutter.project_slug}}'
import { prettyJson } from '@/lib/Init'

export async function sampleGraphQLMutation() {

  const query = `mutation CreateTestInput($id: Int, $active: String,  ...) {
  createTestInput(
    input: {id: $id, active: $active, ...}
  ) {
    testInput {
      id
    }
  }
}`


  const variables = {
    active: 'Y',
    id: 1,
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  }

  const response = await fetch('/graphql', options)
  const json = await response.json()

  if (json.errors) {
    console.error(json.errors)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    alert('Error saving in DB: ' + prettyJson(json.errors.map((e: any) => e.message)))
  } else {
    console.log(json.data)
    alert('Saved in DB!')
  }
}