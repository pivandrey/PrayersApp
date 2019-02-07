import { createStackNavigator } from 'react-navigation';

import Dashboard from '../screens/Dashboard';
import Desk from '../screens/Desk'

export default DeskStack = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    Desk: {
      screen: Desk,
    },
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#514D47',
      headerTitleStyle: {
        fontSize: 17,
      },
    },
  }
)