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
                  buildHookId: '5d91d3f0777894cd927b7719',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7m5n1m54',
                  apiId: '328c933d-d457-487a-bf54-0416c4356fae'
                },
                {
                  buildHookId: '5d91d3f0de31f35017f21a76',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oty983zf',
                  apiId: '03fea25c-e6f5-4e4a-bf9d-1fd3f5b0b5fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abhiaiyer91/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oty983zf.netlify.com', category: 'apps'}
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
