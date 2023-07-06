import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const defaultTheme = {
  dark: false,
  colors: {
    background: '#E8EAF6',
    backgroundSeconday: 'rgb(47, 5, 73)',
    primary: '#820AD1',
    secondary: '#0F141E',
    tertiary: '#BDBDBD',
    primaryText: '#FFFFFF',
    secondaryText: '#111111',
  },
};

const firstCustomTheme = {
  dark: false,
  colors: {
    background: '#E8EAF6',
    backgroundSeconday: 'rgb(47, 5, 73)',
    primary: '#D81B60',
    secondary: '#0F141E',
    tertiary: '#BDBDBD',
    primaryText: '#FFFFFF',
    secondaryText: '#111111',
  },
};

const secondCustomTheme = {
  dark: false,
  colors: {
    background: '#E8EAF6',
    backgroundSeconday: 'rgb(47, 5, 73)',
    primary: '#1976D2',
    secondary: '#0F141E',
    tertiary: '#BDBDBD',
    primaryText: '#FFFFFF',
    secondaryText: '#111111',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme,
        firstCustomTheme,
        secondCustomTheme
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
