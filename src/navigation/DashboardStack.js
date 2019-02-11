import { createStackNavigator } from 'react-navigation';

import Dashboard from '../screens/Dashboard';
import MyPrayersDesk from '../screens/MyPrayersDesk';
import SubscribedDesk from '../screens/SubscribedDesk';
import PrayerDetails from '../screens/PrayerDetails';

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
    PrayerDetails: {
      screen: PrayerDetails,
    }
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
);