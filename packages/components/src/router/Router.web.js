import React from 'react'

import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import Header from '../views/Header/Header';

import { useScreens } from '../screens';
const aScreens = useScreens()
import ChartsJS from '../screens/ChartsJS/ChartsJSScreen'

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
          <Route exact path={"/login"}>
            <aScreens.login />
          </Route>

          <Layout>
            <Route exact path={"/landscape"}>
              <aScreens.landscape />
            </Route>
            <Route exact path={"/chartsD3"}>
              <aScreens.chartsD3 />
            </Route>
            <Route exact path={"/chartsJS"}>
              <ChartsJS />
            </Route>
          </Layout>

          <Route path="*">
            <Redirect to={"/login"} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
};


export const getNavigation = () => {
    const navigation = useHistory();

    const push = (destination) => {
        var aDestination = destination;

        if (destination == 'content') {
            aDestination = 'landscape'
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