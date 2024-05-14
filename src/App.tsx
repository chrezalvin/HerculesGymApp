import {Route, RouteComponentProps } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  calculator,
  home,
  settingsSharp,
  statsChartOutline,
  time,
} from "ionicons/icons";
import ForumPage from "./pages/ForumPage";
import LatihanPage from "./pages/LatihanPage";
import ProgressPage from "./pages/ProgressPage";
import SettingPage from "./pages/SettingPage";

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
import { ChallengesRepository } from "./localStorage/challengesRepository";
import { Challenge, Workout } from "./assets/challenges";
import defaultChallenge from "./assets/challenges";
import { Storage } from "@ionic/storage";
import TimelinePage from "./pages/Timeline";
import { WorkoutRepository } from "./localStorage/workoutRepository";
import BmiCalculator from "./pages/BmiCalculator";
import BmrCalculator from "./pages/BmrCalculator";

setupIonicReact();

interface CustomRoute{
  path: string;
  name: string;
  component: ReactNode;
  icon: string;
}

const storage = new Storage();


const App: React.FC<RouteComponentProps<any>> = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [challenge, setChallenge] = useState<Challenge[]>(defaultChallenge.challenges);
  const [workouts, setWorkouts] = useState<Workout[]>(defaultChallenge.workout);
  const [totalTimeSpent, setTotalTimeSpent] = useState<number>(0);
  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState<number>(0);

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

  const onSetFinished = (challengeType: string, timelineIndex: number, setIndex: number) => {
    const newChallenge = challenge?.map(ele => ele.type === challengeType ? {
      ...ele,
      repsData: ele.repsData.map((timeline, tIndex) => tIndex === timelineIndex ? {
        ...timeline,
        sets: timeline.listSet.map((set, sIndex) => {
          if(sIndex === setIndex){
            setTotalTimeSpent(totalTimeSpent + set.duration);
            setTotalCaloriesBurned(totalCaloriesBurned + set.kalori);

            return {
              ...set,
              isFinished: true
            }
          }
            
          return set;
        })
      } : timeline)
    } : ele);

    console.log("new challenge", newChallenge);

    if(newChallenge){
      setChallenge(newChallenge);
      // (new ChallengesRepository(storage)).setChallenges(newChallenge);
    }
  }

  useEffect(() => {
    async function decideThemePreference() {
      // create the storage first
      storage.create();

      let themePreference: ThemePreference;

      const userThemePreference = new UserThemePreference(storage);
      const challengesRepository = new ChallengesRepository(storage);
      const workoutRepository = new WorkoutRepository(storage);

      // challengesRepository.setDefaultData();
      // workoutRepository.setDefaultData();
      
      // check if the user has a theme preference
      const storedThemePreference = await userThemePreference.getThemePreference();
      const storedChallenge = await challengesRepository.getChallenges();
      const storedWorkout = await workoutRepository.getWorkouts();
      
      if(storedThemePreference)
        themePreference = storedThemePreference;
      else{
        // if not, check if the user prefers dark mode
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        themePreference = prefersDark.matches ? "dark" : "light";

        // save the preference
        await userThemePreference.setThemePreference(themePreference);
      }

      // check if data is available at storage
      if(storedChallenge)
        setChallenge(storedChallenge);
      else
        // if not, then set up a new default data
        await challengesRepository.setDefaultData();

      if(storedWorkout)
        setWorkouts(storedWorkout);
      else
        await workoutRepository.setDefaultData();

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
      component: (
        <LatihanPage 
          challenges={challenge} 
          workouts={workouts}
          key="a"
        />
      ),
      icon: time
    },
    {
      path: "/forum",
      name: "Forum",
      component: <ForumPage key="b"/>,
      icon: home
    },
    {
      path: "/progress",
      name: "Progress",
      component: (
        <ProgressPage 
          totalCalories={totalCaloriesBurned}
          totalWorkout={0}
          totalTimeSecond={totalTimeSpent}
          key="c"
        />
      ),
      icon: statsChartOutline
    },
    {
      path: "/setting",
      name: "Pengaturan",
      component: <SettingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} key="d" />,
      icon: settingsSharp
    }
  ];
  
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route 
              exact 
              path="/timeline/:challengeType" 
              key="/timeline"
              render={(props) => <TimelinePage {...props} 
                challengeList={challenge ?? []}
                onSetFinished={(challengeType: string, timelineIndex: number, setIndex: number) => onSetFinished(challengeType, timelineIndex, setIndex)}
              />}
            >
            </Route>
            <Route 
              exact 
              path="/bmiCalculator" 
              key="/bmiCalculator"
              component={BmiCalculator}
            >
            </Route>
            <Route 
              exact 
              path="/bmrCalculator" 
              key="/bmrCalculator"
              component={BmrCalculator}
            >
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
                <IonTabButton tab={route.path} href={route.path}>
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
