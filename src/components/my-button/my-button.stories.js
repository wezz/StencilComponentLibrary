
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Stencil/my-button',
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => `<my-button url="${args.url}">${args.text}</my-component>`;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  url: 'https://www.google.com',
  text: 'Click me'
};

