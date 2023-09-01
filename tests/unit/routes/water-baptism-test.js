import { module, test } from 'qunit';
import { setupTest } from 'clc-app/tests/helpers';

module('Unit | Route | water-baptism', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:water-baptism');
    assert.ok(route);
  });
});
