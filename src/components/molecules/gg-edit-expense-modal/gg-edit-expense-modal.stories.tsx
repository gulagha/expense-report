export default {
  title: 'Molecules/EditExpenseModal',
  tags: ['autodocs'],
  render: () => {
    return `
      <gg-backdrop open> </gg-backdrop>
      <gg-edit-expense-modal> </gg-edit-expense-modal>
    `
  }
};

export const DarkMode = {
  decorators: [(Story) => {
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-theme', 'dark');
    wrapper.innerHTML = Story();
    return wrapper;
  }],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
  },
};

export const LightMode = {
  args: {
    name: 'light-mode-icon'
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
};
