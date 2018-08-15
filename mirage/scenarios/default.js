export default function(server) {

  server.create('workspace', {
    name: 'EmberMap',
    slug: 'embermap',
    iconUrl: '/images/embermap.png',
    position: 1,
    workspaceUrl: 'embermap.slack.com'
  });
  server.create('workspace', {
    name: 'EmberJS Community',
    slug: 'emberjs-community',
    iconUrl: '/images/emberjs-community.jpg',
    position: 2,
    workspaceUrl: 'embercommunity.slack.com'
  });

}
