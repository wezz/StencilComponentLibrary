
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Stencil/my-component',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   onClick: { action: 'onClick' },
  //   size: {
  //     control: { type: 'select' },
  //     options: ['small', 'medium', 'large'],
  //   },
  // },
};

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template = (args) => `<my-component heading="${args.heading}">${args.textFromSlot}</my-component>`;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  heading: 'My component',
  textFromSlot: 'Text from slot'
};

export const Secondary = Template.bind({});
Secondary.args = {
  heading: 'Second heading ',
  textFromSlot: ''
};

