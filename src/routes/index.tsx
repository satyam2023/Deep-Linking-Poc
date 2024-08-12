import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenViewModel from '../viewModels/HomeScreenViewModel';
import ProfileScreenViewModel from '../viewModels/ProfileScreenViewModel';
import SettingViewModel from '../viewModels/SettingViewModel';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const linking = {
    prefixes: ['demo://'],
    config: {
        screens: {
            Home: 'Home',
            Profile: 'Profile',
            Setting:'Setting'
          },
        },
  };
const Routes = () => {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading....</Text>}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenViewModel} />
        <Tab.Screen name="Profile" component={ProfileScreenViewModel} />
        <Tab.Screen name="Setting" component={SettingViewModel} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
