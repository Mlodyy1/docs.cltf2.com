import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5f0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '759'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8e9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '61a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9fe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '57a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '926'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'c2c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2e4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5df'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '660'),
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
                component: ComponentCreator('/docs/Guides/newbie-guide', '2eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Season 4 Provisional Tiers/season-4-provisional-tiers',
                component: ComponentCreator('/docs/Season 4 Provisional Tiers/season-4-provisional-tiers', '456'),
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
    component: ComponentCreator('/', 'b1a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
