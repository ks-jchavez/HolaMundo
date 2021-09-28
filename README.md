<p align="center">
  <img
    alt="Kleeen Logo"
    height="100"
    src="https://staging4.kleeen.software/wp-content/uploads/2019/05/cropped-ks-favicon-1.png"
    width="100"
  >
</p>
<h1 align="center">
  Kleeen Software / Template
</h1>

<p align="center">
  <img alt="HTML5" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
  <img alt="CSS3" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
  <img alt="SASS" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
  <img alt="Material UI" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
  <img alt="NodeJS" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
  <img alt="Express" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img alt="TypeScript" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img alt="ReactJS" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
  <img alt="GraphQL" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
  <img alt="Redux" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
  <img alt="NPM" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
  <img alt="Babel" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" />
  <img alt="Git" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
  <img alt="GitHub" width="35" height="25" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
</p>

<details>
  <summary><b>🧰  1. Prerequisites</b></summary>

You need to have a basic understanding of **`JavaScript`**, **`Node.js`**, and **`NPM`** to continue.

##### 1.1 _Install Node Version Manager_

We recommend to use [NVM](https://github.com/nvm-sh/nvm).

```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Check GitHub repository to verify any change in [the installation process](https://github.com/nvm-sh/nvm#install--update-script).

##### 1.2 _Setup your .nvmrc file_

This project has a `.nvmrc` file containing the node version number supported and tested. [Check the repository to configure your terminal](https://github.com/nvm-sh/nvm#nvmrc).

Calling `nvm use` automatically in a directory with a `.nvmrc` file. If it finds it, it will switch to that version; if not, it will use the default version.

##### 1.3 _Install Node_

```sh
  nvm install <NODE_VERSION_ON_NVMRC_FILE>
  nvm use <NODE_VERSION_ON_NVMRC_FILE>
```

</details>

<details>
  <summary><b>🧭  2. Understand your workspace</b></summary>
  Run:

```sh
  npm run dep-graph
```

to see a diagram of the dependencies of your projects.

</details>

<details>
  <summary><b>⏳ 3. Setup</b></summary>

##### 3.1 _Install packages_

```sh
  npm install | bash
```

</details>

<details>
  <summary><b>🏎  4. Run project</b></summary>

You can run this **template** using the following commands in a different console.

To run both **_frontend_** and **_backend_**:

```sh
  npm run start
```

**Client only**

```sh
  npm run start:client
```

**API only**

```sh
  npm run start:api
```

</details>

<details>
  <summary><b>🚜  5. Build</b></summary>

##### 5.1 _Build_

```sh
  nx build cloud
```

to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

</details>

<details>
  <summary><b>🚀  6. Deploy</b></summary>

##### 6.1 _Deploy with Serverless Framework_

```sh
  npm install -g serverless@<CHECK_VERSION_AT_buildspec.yml_FILE>
```

</details>

<details>
  <summary><b>🧪  7. Testing</b></summary>

##### 7.1 _Unit tests_

```sh
  nx test cloud
```

to execute the unit tests via [Jest](https://jestjs.io).

```sh
  npm run affected:test
```

to execute the unit tests affected by a change.

##### 7.2 _E2E (end-to-end) tests_

By default, [Nx](https://nx.dev/react/cli/e2e) uses [Cypress](https://www.cypress.io) to run E2E tests.

Start Cypress with

```sh
  nx e2e {appName}-e2e --watch
```

to execute the end-to-end tests in Interactive Watch Mode.

Run e2e tests for the applications affected by changes.

```sh
  npm run affected:e2e
```

Run the respective .spec
Change files in your app, Cypress should re-run its tests.

</details>

<details>
  <summary><b>🔐  8. Authentication</b></summary>

##### 8.1 _How to add custom integrations_

**Kleeen Software** provides the option to extend the default _authentication_ or implements new ones.

To support custom workflows, **_`@kleeen/auth library`_** exposes a set of types and interfaces.

```javascript
import { Integrations, KSAuth } from '@kleeen/auth';
KSAuth.configure({
  authenticationHandler: new Integrations.CognitoAuthenticationHandler(),
});
```

##### 8.2 _IAuthenticationHandler base definition_

**_IAuthenticationHandler_** interface is the blueprint to implement different workflows.

Here is an example of a custom implementation:

```javascript
import 'firebase/auth';
import firebase from 'firebase/app';
import { Integrations } from '@kleeen/auth';

/* Your web app's Firebase configuration */
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

export class FirebaseAuthenticationHandler extends Integrations.AuthenticationHandler {
  constructor(config: typeof firebaseConfig = firebaseConfig) {
    super();
    /* Initialize Firebase */
    firebase.initializeApp(firebaseConfig);
  }

  /* Sign in a register user using username and password */
  async signIn(options: SignInOptions): Promise<IUser> {
    const { password, username } = options;
    const response = await firebase.auth().signInWithEmailAndPassword(username, password);
    return {
      ...response,
      email: response?.user?.email,
      getUsername: () => response?.user?.displayName,
      role: null, // Set here the default for the current user
      roles: [], // set here the list of roles assigned for the current user
    };
  }

  /**
   A function that takes a new context object and update it if needed
  @param {Record<string, any>} context is an existing context
  @return {Record<string, any>} with an updated context
  **/

  setContext(context: Record<string, any>): Record<string, any> {
    return {
      ...context,
      headers: {
        ...context.headers,
        MY_CUSTOM_HEADER: 'GOING HERE',
      },
    };
  }
}
```

##### 8.3 _Update the authentication handler_

Following is the example of configuring the **_KSAuth_** class to use the custom implementation.

```javascript
import { FirebaseAuthenticationHandler } from './google-firebase';
import firebaseConfiguration from './custom-implementations/firebase.json';

KSAuth.configure({
  authenticationHandler: new FirebaseAuthenticationHandler(firebaseConfiguration),
});
```

##### 8.4 _Running unit tests_

Run

```sh
  nx test auth
```

to execute the unit tests via [Jest](https://jestjs.io).

##### 8.5 _Login Role and UI Access Manager Integration_

To connect a login to the FE app, it's needed to implement an AuthenticationHandler like `libs/auth/src/lib/integrations/aws-cognito/aws-cognito.ts`, that is the one used in our own prototypes.

When implementing this 'authenticator,' the currentAuthenticatedUser function needs to return a shape like `{ ...anyUserInfoNeeded, role: 'ADMIN' }`, role its required, but if it's not provided, the access-control did not interfere with anything.

##### NOTES

- the role values depend on what the **_`apps/cloud/src/app/settings/role-access-keys.json`_** have on the permissions and can be any string.
- The **_role-access-keys.json_** is created for our generated UI proposes grouping each page into **_NAVIGATION_** key and next each page have **_WIDGETS_**, **_VIEWS_** and can have more specific components also can be extended but to also reflect access on the UI, the **_AccessControl_** component is needed.
- the UI implementation follows the rules and uses the **_access-manager_** module from the **_ks-ui-react_**.

</details>

<details>
  <summary><b>🎫  9. Onboarding integration</b></summary>

##### 9.1 _Relate paths_

onboarding settings = `apps/cloud/src/app/modules/generated/components/on-boarding/on-boarding.settings.ts`

##### 9.2 _How onboarding decides when to show_

The condition used to decide if the onBoarding shows is a combination between the onboarding settings (because the feature itself can be off) and the onboarding preferences redux state, the path in the redux state used for getting if the **`onBoarding`** should show is **`endUserPreference`**.**`onBoardingPreferences.showOnBoarding`**. That **`onBoardingPreferences`** is one of the props receive in the component below and can be manipulated with the response of the query **`getOnboardingPreferences`** (needs to be implemented in custom API).

##### 9.2 _Queries called by onboarding_

**`getOnboardingPreferences`**: is called at the start of **`onboarding`**, it filled the **`onBoardingPreferences`** state with the response so can be used to inject data to this custom component or disable the onboarding for certain users or cases.

**`setOnBoardingPreference`**: is call with the action **`preferencesActions.setOnBoardingPreference`** and it can be used to store some data related to **`onBoarding`** or set info related to user like turn off next **`onboarding`** for the same user.

##### 9.2 _PreferencesActions actions injected_

With the action **`preferencesActions.setOnBoardingPreference`** you can change the **`onBoardingPreferences`** state and it also calls a **`BE`** query **`setOnBoardingPreference`** (needs to be implemented in custom API) to save preferences for the **`onboarding`** (for example setting the flag in real **`BE`** to false so the user does not get the onboarding a second time).

##### 9.2 _Implemented in custom API_

Some of the queries that the **`onboarding`** throws does not have a **`BE`** query the catch it, all the firm and shape is defined on the **`FE`** but it needs to be added to the custom **`API schema`** and resolvers y order to getting it on the **`GraphQL`** middleware.

example on `apps/api/src/graphql/custom/operations/custom-schema.ts`

```javascript
export const customSchema = gql`
  extend type Query {
    getOnboardingPreferences: OnboardingPreferences
    setOnboardingPreferences(input: PreferencesInput): OnboardingPreferences
  }
`;
```

on `apps/api/src/graphql/custom/operations/custom-resolvers.ts`

```javascript
export const customResolvers: IResolvers = {
  Query: {
    getOnboardingPreferences: () => ({ showOnBoarding: true }),
    setOnboardingPreferences: (input) => ({ success: true }),
  },
};
```

Please refer to the official documentation about how to add your custom schema.

For more information please visit [Apollo GraphQL Documentation](https://www.apollographql.com/docs/apollo-server/schema/schema/)

All in these files can change except the shape and name of the export component.

</details>

<p align="center">
  <small>
    Made with ❤️  by Kleeen Software 2021
  </small>
</p>
