import React from 'react'

import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom'
import Header from '../views/Header/Header';

import { useScreens } from '../screens';
const aScreens = useScreens()

function Layout(props) {
    const navigation = getNavigation();

    return (
        <>
            <Header navigation={navigation} />

                {props.children}
        </>
    );
}

export function Router() {
    return (
        <BrowserRouter>
        
            <Switch>
                <Route exact path={'/login'}>
                    <aScreens.login />
                </Route>

                <Layout>
                    <Route exact path={'/landscape'}>
                        <aScreens.landscape />
                    </Route>

                    <Route exact path={'/barChart'}>
                        <aScreens.barChart />
                    </Route>

                    <Route exact path={'/curveChart'}>
                        <aScreens.curveChart />
                    </Route>

                    <Route exact path={'/pieChart'}>
                        <aScreens.pieChart />
                    </Route>

                    <Route exact path={'/worldMap'}>
                        <aScreens.worldMap />
                    </Route>

                    <Route exact path={'/tableList'}>
                        <aScreens.tableList />
                    </Route>
                </Layout>

                <Route path="*">
                    <Redirect to={'/login'} />
                </Route>
            </Switch>
                
        </BrowserRouter>
    );y
};


export const getNavigation = () => {
    const navigation = useHistory();

    const push = (destination) => {
        var aDestination = destination;

        if (destination == 'content') {
            aDestination = 'landscape'

        } else if (destination == 'charts') {
            aDestination = 'barChart'

        } else if (destination == 'maps') {
            aDestination = 'worldMap'

        } else if (destination == 'tables') {
            aDestination = 'tableList'
        }

        navigation.push('/' + aDestination)
    }

    const pop = (destination) => {
        navigation.goBack()
    }

    const logout = () => {
        navigation.push('/login');
    }

    const landscape = () => {
        navigation.push('/landscape');
    }

    const location = () => {
        return navigation.location.pathname
    }

    return { push, pop, logout, location, landscape }
}