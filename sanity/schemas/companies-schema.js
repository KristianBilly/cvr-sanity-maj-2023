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
  ],
}

export default companies
