export interface CurrentUser {
  userPreference: {
    showOnboardingPage: boolean;
  };
}

export interface EndUser {
  currentUser: CurrentUser;
}
