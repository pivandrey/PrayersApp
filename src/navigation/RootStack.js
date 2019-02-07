import { createStackNavigator } from 'react-navigation';

import DeskStack from './DeskStack';
import ModalAdd from '../screens/ModalAdd';

export default RootStack = createStackNavigator(
  {
    DeskStack: {
      screen: DeskStack,
    },
    ModalAdd: {
      screen: ModalAdd,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)