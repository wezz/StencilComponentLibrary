

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Stencil/my-shadow-component',
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

const Template = (args) => `<my-shadow-component heading="${args.heading}">${args.textFromSlot}</my-shadow-component>`;
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  primary: true,
  heading: 'My shadow component',
  textFromSlot: 'text from slot'
};

export const Secondary = Template.bind({});
Secondary.args = {
  heading: 'Second heading ',
  textFromSlot: ''
};

