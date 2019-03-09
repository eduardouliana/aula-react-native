import { createStackNavigator, createAppContainer } from 'react-navigation';

//telas criadas
import HomeScreen from './src/screen/HomeScreen';
import FilmeScreen from './src/screen/FilmeScreen';
import ListaFilmesScreen from './src/screen/ListaFilmesScreen';
import LoginScreen from './src/screen/LoginScreen';
import SobreScreen from './src/screen/SobreScreen';

//criar navegador Stack
const NavegadorStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Filme: { screen: FilmeScreen },
  Lista: { screen: ListaFilmesScreen },
  Login: { screen: LoginScreen },
  Sobre: { screen: SobreScreen }
});

// container principal da aplicação
const App = createAppContainer(NavegadorStack);
export default App;