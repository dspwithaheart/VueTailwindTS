import { use{{cookiecutter.project_slug.capitalize()}}Store } from '@/stores/{{cookiecutter.project_slug}}'
import { prettyJson } from '@/lib/Init'


export async function sampleGraphQLQuery(customer: string) {
  const query = `query GetCustomer($name: String ) {
  allCustomer(name: $name) {
    edges {
      node {
        id
        customerSk
        name
      }
    }
  }
}`

  const variables = {
    name: customer,
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
    console.error(prettyJson(json.errors))
  } else {
      return json.data.allCustomer.edges[0].node
  }
}