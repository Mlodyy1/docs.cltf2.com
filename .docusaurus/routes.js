import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a5a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '139'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '0b0'),
            routes: [
              {
                path: '/docs/4S Rules/4s-ruleset',
                component: ComponentCreator('/docs/4S Rules/4s-ruleset', '77b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General/league-rules',
                component: ComponentCreator('/docs/General/league-rules', 'e3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guides/newbie-guide',
                component: ComponentCreator('/docs/Guides/newbie-guide', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Sacred Scouts Rules/sacred-scouts-ruleset',
                component: ComponentCreator('/docs/Sacred Scouts Rules/sacred-scouts-ruleset', 'f9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ultiduo Rules/ultiduo-ruleset',
                component: ComponentCreator('/docs/Ultiduo Rules/ultiduo-ruleset', '63b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
