import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('workspace', { path: '/:workspace_id' }, function() {
    this.route('threads');
    this.route('channel', { path: 'channels/:channel_id' });
  });
});

export default Router;
