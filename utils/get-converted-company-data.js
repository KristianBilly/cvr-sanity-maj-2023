export const getConvertedCompanyData = ({
  cvrNumber,
  address,
  postNoCity,
  companyType,
}) => [
  { title: 'Cvr-number', field: cvrNumber },
  { title: 'Address', field: address },
  { title: 'Postcode and City', field: postNoCity },
  { title: 'Company Type', field: companyType },
]
