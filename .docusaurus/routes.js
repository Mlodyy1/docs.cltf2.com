import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c47'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6dc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f68'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd6a'),
            routes: [
              {
                path: '/docs/4S Rules/4s-ruleset',
                component: ComponentCreator('/docs/4S Rules/4s-ruleset', 'e88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/General/league-rules',
                component: ComponentCreator('/docs/General/league-rules', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Guides/newbie-guide',
                component: ComponentCreator('/docs/Guides/newbie-guide', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Season 4 Provisional Tiers/season-4-provisional-tiers',
                component: ComponentCreator('/docs/Season 4 Provisional Tiers/season-4-provisional-tiers', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Ultiduo Rules/ultiduo-ruleset',
                component: ComponentCreator('/docs/Ultiduo Rules/ultiduo-ruleset', 'eba'),
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
    component: ComponentCreator('/', 'a3c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
