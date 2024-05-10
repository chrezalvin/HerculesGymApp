import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  compass,
  ellipse,
  home,
  paperPlaneSharp,
  people,
  searchOutline,
  settings,
  settingsSharp,
  square,
  squareSharp,
  statsChartOutline,
  time,
  triangle,
} from "ionicons/icons";
import forumPage from "./pages/ForumPage";
import latihanPage from "./pages/LatihanPage";
import progressPage from "./pages/ProgressPage";
import settingPage from "./pages/SettingPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { ReactNode, useEffect, useState } from "react";
import UserThemePreference, { ThemePreference } from "./localStorage/userThemePreference";
import { Storage } from "@ionic/storage";

setupIonicReact();

interface CustomRoute{
  path: string;
  name: string;
  component: ReactNode;
  icon: string;
}

const storage = new Storage();

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    console.log("toggling dark mode");

    const newMode = !darkMode;

    setDarkMode(newMode);
    toggleDarkTheme(newMode);

    (new UserThemePreference(storage)).setThemePreference(newMode ? "dark" : "light");
  }

  // Add or remove the "ion-palette-dark" class on the html element
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
  };

  // Check/uncheck the toggle and update the palette based on isDark
  const initializeDarkTheme = (isDark: boolean) => {
    console.log("toggling dark mode to ", isDark);
    setDarkMode(isDark);
    toggleDarkTheme(isDark);
  };

  useEffect(() => {
    async function decideThemePreference() {
      // create the storage first
      storage.create();

      let themePreference: ThemePreference;

      const userThemePreference = new UserThemePreference(storage);

      // check if the user has a theme preference
      const storedThemePreference = await userThemePreference.getThemePreference();

      if(storedThemePreference)
        themePreference = storedThemePreference;
      else{
        // if not, check if the user prefers dark mode
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        themePreference = prefersDark.matches ? "dark" : "light";

        // save the preference
        await userThemePreference.setThemePreference(themePreference);
      }

      // Initialize the dark palette based on the initial
      // value of the prefers-color-scheme media query
      initializeDarkTheme(themePreference === "dark");
    }

    decideThemePreference();
  }, []);

  const routes: CustomRoute[] = [
    {
      path: "/latihan",
      name: "Latihan",
      component: latihanPage({}),
      icon: time
    },
    {
      path: "/forum",
      name: "Forum",
      component: forumPage({}),
      icon: home
    },
    {
      path: "/progress",
      name: "Progress",
      component: progressPage({}),
      icon: statsChartOutline
    },
    {
      path: "/setting",
      name: "Pengaturan",
      component: settingPage({
        darkMode: darkMode,
        toggleDarkMode: toggleDarkMode
      }),
      icon: settingsSharp
    }
  ];
  
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet
            basePath="/tab1"
          >
            <Route exact path="/test" key={"/test"}>
              <IonPage>
                <h1>Test</h1>
              </IonPage>
            </Route>
            {
              routes.map(route => (
                <Route 
                  exact
                  path={route.path} 
                  key={route.path} 
                >
                  {route.component}
                </Route>
              ))
            }
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {
              routes.map(route => (
                <IonTabButton tab={route.path} href={route.path} key={route.path}>
                  <IonIcon aria-hidden="true" icon={route.icon} />
                  <IonLabel>{route.name}</IonLabel>
                </IonTabButton>
              ))
            }
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
