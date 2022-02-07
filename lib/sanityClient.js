import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'kdt450ds',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skH3PRQ6UjUjDmFcVQOYSVZTkZlD6P9knlg9BahAt6LC0P7Fc6sMAcD8YFAWEqDJOWiOF6uo33GnuegbZLUPiheB5qeS9tnn8fQdV72Cu96sbLMQ6b6nA0DdZw3VjljBuIYdziACAd7E3ypKb3BIzvAExv8uNs9XecSlEixOSwITqWtbT7bn',
  useCdn: false,
})
