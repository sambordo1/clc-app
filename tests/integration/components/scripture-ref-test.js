import { module, test } from 'qunit';
import { setupRenderingTest } from 'clc-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | scripture-ref', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ScriptureRef />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ScriptureRef>
        template block text
      </ScriptureRef>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
