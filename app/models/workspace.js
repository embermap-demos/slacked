import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  slug: DS.attr('string'),
  iconUrl: DS.attr('string'),
  workspaceUrl: DS.attr('string'),
  position: DS.attr('number')

});
