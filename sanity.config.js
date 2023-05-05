import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'
import { scheduledPublishing } from '@sanity/scheduled-publishing'
import { media } from 'sanity-plugin-media'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

const config = defineConfig({
  projectId: 'kkpjc5t1',
  dataset: 'production',
  title: 'Virk.dk',
  apiVersion: '2023-05-03',
  basePath: '/admin',
  plugins: [
    deskTool(), // Tool for managing all sorts of content in a structured manner
    scheduledPublishing(), // Just like Prismic
    media(), //A convenient way to browse, manage and select all your Sanity assets.
    unsplashImageAsset(), //Search for photos on Unsplash and add them to your project right inside Sanity Studio.
  ],
  schema: { types: schemas },
})

export default config
