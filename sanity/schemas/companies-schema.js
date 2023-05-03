const companies = {
  name: 'companies',
  title: 'Companies',
  type: 'document',

  fields: [
    { name: 'companyName', title: 'Company Name', type: 'string' },
    {
      name: 'slug',
      title: 'slug',
      type: 'string',
    },
    { name: 'cvrNumber', title: 'CVR Number', type: 'string' },
    { name: 'address', title: 'Address', type: 'string' },
    { name: 'postNoCity', title: 'Post Number and City', type: 'string' },
    { name: 'companyType', title: 'Company Type', type: 'string' },
    { name: 'status', title: 'Status', type: 'string' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'country',
      name: 'country',
      type: 'string',
      options: {
        list: [
          { title: 'Afghanistan', value: 'AF' },
          { title: 'Åland Islands', value: 'AX' },
          { title: 'Albania', value: 'AL' },
        ],
      },
    },
    {
      name: 'movie',
      type: 'object',
      fields: [
        {
          title: 'Director',
          name: 'director',
          type: 'reference',
          to: [{ type: 'companies' }],
        },
      ],
    },
    {
      title: 'Names',
      name: 'names',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Has the movie been released?',
      name: 'released',
      type: 'boolean',
    },
    {
      title: 'Release date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'Today',
      },
    },
  ],
}

export default companies
