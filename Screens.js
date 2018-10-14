import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/components/login/Login'
import HomeScreen from './src/components/home/Home'
import EntrarScreen from './src/components/entrar/Entrar'
import CadastroClienteScreen from './src/components/cadastro/CadastroPaciente'

export const Screens = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    Entrar: EntrarScreen,
    CadastroCli: CadastroClienteScreen
},
    {
        initialRouteName: 'Login',
        navigationOptions: {
            header: null
        },
    }
)