import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import Header from '../views/Header/Header';

import { useScreens } from '../screens';
const aScreens = useScreens()


function ChartsTabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'brown',
            inactiveTintColor: '#536878',
            style: { backgroundColor: '#b25900'},
            labelStyle: {fontWeight: 'bold', fontSize: 14}
        }}>
            <Tab.Screen name={'BAR'} component={aScreens.barChart}/>
            <Tab.Screen name={'CURVE'} component={aScreens.curveChart}/>
            <Tab.Screen name={'PIE'} component={aScreens.pieChart} />
        </Tab.Navigator>
    )
}

function MapsTabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'brown',
            inactiveTintColor: '#536878',
            style: { backgroundColor: '#2a828f' },
            labelStyle: { fontWeight: 'bold', fontSize: 14 }
        }}> 
            <Tab.Screen name={' '} component={aScreens.worldMap} /> 
        </Tab.Navigator>
    )
}

function TableTabs() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'brown',
            inactiveTintColor: '#536878',
            style: { backgroundColor: '#163f34' },
            labelStyle: { fontWeight: 'bold', fontSize: 14 }
        }}>
            <Tab.Screen name={'Table 0'} component={aScreens.tableList} />
            <Tab.Screen name={'Table 1'} component={aScreens.tableSimple} />
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
                name={'charts'}
                component={ChartsTabs}
            />
            <Stack.Screen
                name={'maps'}
                component={MapsTabs}
            />
            <Stack.Screen
                name={'tables'}
                component={TableTabs}
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