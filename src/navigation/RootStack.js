import { createStackNavigator } from 'react-navigation';

import DashboardStack from './DashboardStack';
import ModalAdd from '../screens/ModalAdd';
import ModalDelete from '../screens/ModalDelete';

export default RootStack = createStackNavigator(
  {
    DashboardStack: {
      screen: DashboardStack,
    },
    ModalAdd: {
      screen: ModalAdd,
    },
    ModalDelete: {
      screen: ModalDelete,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);