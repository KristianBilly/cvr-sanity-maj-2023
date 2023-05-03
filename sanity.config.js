import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import project from './sanity/schemas/project-schema'
// import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'kkpjc5t1',
  dataset: 'production',
  title: 'Virk.dk',
  apiVersion: '2023-05-03',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: [project] },
})

export default config
