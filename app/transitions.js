export default function() {
  this.transition(
    this.matchSelector('.ember-modal-dialog'),
    this.use('fade', { duration: 125 })
  );
}
