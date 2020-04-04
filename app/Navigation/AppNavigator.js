import React from 'react';
import I18n from 'i18next';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Colors } from '../Themes/Colors';
import { FontType } from '../Themes/Fonts';
import { fromRight } from '../Utils/Transition';
import { HeaderComponent } from '../Components/HeaderSurahList/HeaderSurahList.component';
import {
  AboutPage,
  QuranDetail,
  QuranList,
  SplashScreen,
  SettingsPage,
} from '../Screens';

const AppStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    AboutPage: {
      screen: AboutPage,
    },
    SettingsPage: {
      screen: SettingsPage,
    },
    QuranList: {
      screen: QuranList,
      navigationOptions: {
        header: props => (
          <HeaderComponent title={I18n.t('AppTitle')} {...props} />
        ),
      },
    },
    QuranDetail: {
      screen: QuranDetail,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.iron,
        elevation: 0,
      },
      headerTitleStyle: {
        fontFamily: FontType.semiBold,
        fontSize: 18,
        marginLeft: 0,
      },
      headerTintColor: Colors.black,
    },
    transitionConfig: () => fromRight(700),
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
