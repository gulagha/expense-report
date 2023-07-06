export default {
  title: 'Molecules/ListItem',
  tags: ['autodocs'],
  render: () => {
    return `
      <gg-list-item amount="313 EUR" date="23.12.2022" description="Online courses for everything"> </gg-list-item>
      <gg-list-item amount="5232 EUR"> </gg-list-item>
      <gg-list-item amount="23123 EUR" date="23.11.2022" description="Online courses for everything ifshdfksjdn fksndfkj ns"> </gg-list-item>
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
