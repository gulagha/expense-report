export default {
  title: 'Atoms/Icon',
  tags: ['autodocs'],
  render: () => {
    return `
      <gg-icon name='delete-icon'> </gg-icon>
      <gg-icon name='light-mode-icon'> </gg-icon>
      <gg-icon name='dark-mode-icon'> </gg-icon>
      <gg-icon name='edit-icon'> </gg-icon>
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
