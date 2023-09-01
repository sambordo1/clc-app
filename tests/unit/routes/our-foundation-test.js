import { module, test } from 'qunit';
import { setupTest } from 'clc-app/tests/helpers';

module('Unit | Route | our-foundation', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:our-foundation');
    assert.ok(route);
  });
});
