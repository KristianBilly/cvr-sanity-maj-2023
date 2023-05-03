import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'kkpjc5t1',
  dataset: 'production',
  title: 'Virk.dk',
  apiVersion: '2023-05-03',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config
