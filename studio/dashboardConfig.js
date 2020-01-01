export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e0c9aff89271320c873185c',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-b9xkc46d',
                  apiId: '5930fd30-7fbd-46fa-b563-3d35838a3f61'
                },
                {
                  buildHookId: '5e0c9aff57bf04d60a681acf',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-i2x5k3ov',
                  apiId: '5e18a776-7bae-40b9-b345-200b23492189'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/faizulho/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-i2x5k3ov.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
