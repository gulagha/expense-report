export default {
  title: 'Molecules/StackedChart',
  tags: ['autodocs'],
  render: () => {
    const expenses = [
      { month: 'January', amount: 100 },
      { month: 'February', amount: 150 },
      { month: 'March', amount: 250 },
      { month: 'April', amount: 50 },
      { month: 'May', amount: 300 },
      { month: 'January', amount: 100 },
      { month: 'February', amount: 150 }
    ];

    return `
      <gg-stacked-chart expenses=${JSON.stringify(expenses)}></gg-stacked-chart>
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
