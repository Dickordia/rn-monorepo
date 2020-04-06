import React from 'react'
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import Header from '../views/Header/Header';

import { useScreens } from '../screens';
const aScreens = useScreens()


function ChartsJSTabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: 'black',
                style: { backgroundColor: '#5f8db0' },
                labelStyle: { fontWeight: 'bold', fontSize: 14 },
            }}>

            <Tab.Screen name={'BAR'} 
                        component={aScreens.chartJSBar} 
                        options={{
                            tabBarLabel: 'Bar Chart',
                            tabBarIcon: ({ color, size }) => (
                                <Image
                                    source = { require('../assets/img/icon-bar-chart.png') }
                                    style = {{ height: 24, width: 24, tintColor: color }}
                                />
                            ),
                        }}  
            />

            <Tab.Screen name={'LINE'} 
                        component={aScreens.chartJSLine}
                options={{
                    tabBarLabel: 'Line Chart',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/img/icon-line-chart.png')}
                            style={{ height: 24, width: 24, tintColor: color }}
                        />
                    ),
                }}   />

            <Tab.Screen name={'PIE'}
                component={aScreens.chartJSPie}
                options={{
                    tabBarLabel: 'Pie Chart',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/img/donut-chart.png')}
                            style={{ height: 24, width: 24, tintColor: color }}
                        />
                    ),
                }} />

            <Tab.Screen name={'BUBBLE'}
                component={aScreens.chartJSBubble}
                options={{
                    tabBarLabel: 'Bubble Chart',
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/img/icon-bubble.png')}
                            style={{ height: 24, width: 24, tintColor: color }}
                        />
                    ),
                }} />
        </Tab.Navigator>
    )
}

function ContentStack() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            header: ({scene, navigation}) => {
                return (
                    <Header navigation={navigation} scene={scene}/>
                );
            }
        }} >
            <Stack.Screen
                name={'landscape'}
                component={aScreens.landscape}
            />
            <Stack.Screen
                name={'chartsD3'}
                component={aScreens.chartsD3}
            />
            <Stack.Screen
                name={'chartsJS'}
                component={ChartsJSTabs}
            />
        </Stack.Navigator>
    )
}

export function Router() {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>

            <Stack.Navigator headerMode={'none'} >
                <Stack.Screen
                    name={'login'}
                    component={aScreens.login}
                />
                <Stack.Screen
                    name={'content'}
                    component={ContentStack}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export const getNavigation = () => {
    const navigation = useNavigation();

    const push = (destination) => {
        navigation.navigate(destination)
    }

    const pop = () => {
        navigation.pop()
    }

    const location = () => {
        return navigation.location.pathname
    }

    return { push, pop, location }
}