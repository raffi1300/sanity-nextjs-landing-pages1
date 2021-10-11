export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6164910c0407c90bc6768b50',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-1-studio-4uigbchv',
                  apiId: '53f0e0aa-7257-4f15-adb7-3e87e4fe94e3'
                },
                {
                  buildHookId: '6164910c58902709a966b090',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-1-web-3jwdsowz',
                  apiId: '299c9194-5af8-4093-ad4b-5530096e28e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raffi1300/sanity-nextjs-landing-pages1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-1-web-3jwdsowz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
