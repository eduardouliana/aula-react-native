import { createStackNavigator, 
  createBottomTabNavigator,
  createAppContainer } from 'react-navigation';

//telas criadas
import HomeScreen from './src/screen/HomeScreen';
import FilmeScreen from './src/screen/FilmeScreen';
import ListaFilmesScreen from './src/screen/ListaFilmesScreen';
import LoginScreen from './src/screen/LoginScreen';
import SobreScreen from './src/screen/SobreScreen';
import CameraScreen from './src/screen/CameraScreen';

//criar navegador Stack
/*const NavegadorStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Filme: { screen: FilmeScreen },
  Lista: { screen: ListaFilmesScreen },
  Login: { screen: LoginScreen },
  Sobre: { screen: SobreScreen }
});*/

//navegacao por tab
const NavegadorStack = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Filme: { screen: FilmeScreen },
  Lista: { screen: ListaFilmesScreen },
  Login: { screen: LoginScreen },
  Sobre: { screen: SobreScreen },
  Sobre: { screen: CameraScreen }
}, {
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#CCCCCC',
    style: {
      backgroundColor: '#570076'
    },
    indicatorStyle: {
      backgroundColor: null
    }
  }
});


// container principal da aplicação
const App = createAppContainer(NavegadorStack);
export default App;