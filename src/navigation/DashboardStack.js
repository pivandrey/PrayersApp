import { createStackNavigator } from 'react-navigation';

import Dashboard from '../screens/Dashboard';
import MyPrayersDesk from '../screens/MyPrayersDesk'
import SubscribedDesk from '../screens/SubscribedDesk'

export default DashboardStack = createStackNavigator(
  {
    Dashboard: {
      screen: Dashboard,
    },
    MyPrayers: {
      screen: MyPrayersDesk,
    },
    Subscribed: {
      screen: SubscribedDesk,
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