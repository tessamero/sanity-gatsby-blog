export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7623bb2f6779e30d6ba352',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vopdkpgv',
                  apiId: '48d255f0-103d-4a3c-b7e1-0bc43005748e'
                },
                {
                  buildHookId: '5f7623bc4be864a14b276af8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-33a13mkz',
                  apiId: '5a9fca71-035d-414e-a2ca-e565b8b196ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tessamero/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-33a13mkz.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
