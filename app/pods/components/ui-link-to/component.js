import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

  router: service(),

  href: computed('args.[]', function() {
    return this.get('router').urlFor(...this.get('args'));
  }),

  isActive: computed('args.[]', 'router.currentURL', function() {
    return this.get('router').isActive(...this.get('args'));
  }),

  actions: {
    transitionTo() {
      this.get('router').transitionTo(...this.get('args'));
    }
  }

}).reopenClass({

  positionalParams: 'args'

});
