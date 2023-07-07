export default {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  render: () => {
    return `
      <gg-button> + </gg-button>
      <gg-button> <gg-icon name="delete-icon"> </gg-icon> </gg-button>
      <gg-button secondary=true> <gg-icon name="delete-icon"> </gg-icon> </gg-button>
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
