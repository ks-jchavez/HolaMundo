import { NavigationSettings } from './navigation.model';

export const getSettings = (logout: () => void): NavigationSettings => {
  return {
    accountMenuOptions: [
      {
        title: 'User Preferences',
        path: '/profile/endUserPreferences/edit',
      },
      {
        title: 'Logout',
        path: '/logout',
        func: logout,
      },
    ],
    helpUrl: undefined,
    logo: `assets/logo.png`,
    menuOptions: [
      {
        title: `Graficas`,
        path: `/graficas`,
        icon: `ks-navigation-kq9zTXYGnKj1r2h7AkFhfk`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `My Report `,
        path: `/my-report`,
        icon: `ks-navigation-jhj8wsdMEbWLMHesS5ESbY`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
      {
        title: `NETFLIX`,
        path: `/netflix`,
        icon: `ks-navigation-rwjfAmQicaDQRuZTokvBBM`,
        type: `workflow`,
        openInNewTab: false,
        areYouSure: false,
      },
    ],
  };
};
