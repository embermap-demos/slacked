export default function(server) {

  server.create('workspace', {
    name: 'EmberMap',
    slug: 'embermap',
    iconUrl: '/images/embermap.png',
    position: 1
  });
  server.create('workspace', {
    name: 'Ember JS Community',
    slug: 'emberjs-community',
    iconUrl: '/images/emberjs-community.jpg',
    position: 2
  });

}
