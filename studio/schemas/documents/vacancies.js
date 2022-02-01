export default
  {
    name: 'vacancies',
    type: 'document',
    title: 'Vacancies',
    fields: [
      {
        name: 'jobTitle',
        title: 'Job Title',
        type: 'string'
      },
      {
          name: 'isActive',
          title: 'Active',
          type: 'boolean',
          description: 'Click to put live or take down'
      },
      {
        name: 'pdf',
        title: 'PDF Link to Job Description',
        description: 'If required',
        type: 'string'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        description: 'Click to auto generate',
        options: {
          source: doc => {
            return `${doc.jobTitle}-tcg`
          },
          maxLength: 96
        }
      },
      {
        name: 'location',
        title: 'Location',
        type: 'array',
        of: [
          { type: 'reference',
            to: [{ type: 'location'}]
          }
        ]
      },
      {
        name: 'closingDate',
        title: 'Closing Date',
        type: 'date',
      },
      {
        name: 'briefOverview',
        title: 'Brief overview of the role',
        type: 'text'
      },
      {
        name: 'standard',
        title: 'Standard',
        type: 'string',
        description: 'eg. software developer level 4, data analyst level 4'
      },
      {
        name: 'salary',
        title: 'Salary',
        type: 'string'
      }
    ]
  }

