import { createStore } from "@stencil/store";

export const { state, set } = createStore({
  data: [],
  loading: false,
  error: null,
  page: 0,
  isDarkMode: false
});
