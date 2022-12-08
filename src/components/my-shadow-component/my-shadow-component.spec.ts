import { newSpecPage } from '@stencil/core/testing';
import { MyShadowComponent } from './my-shadow-component';

describe('my-shadow-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyShadowComponent],
      html: '<my-shadow-component></my-shadow-component>',
    });
    expect(root).toEqualHtml(`
      <my-shadow-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-shadow-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyShadowComponent],
      html: `<my-shadow-component first="Stencil" last="'Don't call me a framework' JS"></my-shadow-component>`,
    });
    expect(root).toEqualHtml(`
      <my-shadow-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-shadow-component>
    `);
  });
});
