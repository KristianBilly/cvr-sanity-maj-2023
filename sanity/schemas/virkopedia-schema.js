const virkopedia = {
  name: 'virkopodia',
  title: 'Virkopedia',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'richText',
      title: 'Rich Text',
      type: 'array',
      of: [{ type: 'block' }],
    },
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
      name: 'button',
      title: 'Button',
      type: 'string',
      options: {
        list: [
          { title: 'Sign Up Button', value: 'sign-up' },
          { title: 'Blue Button', value: 'blue' },
        ],
      },
    },
    {
      name: 'imagePositionTop',
      title: 'Do you want the picture in the start of the article?',
      type: 'boolean',
    },
    {
      title: 'Last edited',
      name: 'lastEdited',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
  ],
}

export default virkopedia
