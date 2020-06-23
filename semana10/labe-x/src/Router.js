import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import CreateTripPage from './components/CreateTripsPage'
import ListTripsPage from './components/ListTripsPage'
import TripDetailsPage from './components/TripDetailsPage'
import LoginPage from './components/LoginPage'
import PageNoutFound from './components/PageNotFound'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" >
                    <HomePage />
                </Route>

                <Route exact path="/criar" >
                    <CreateTripPage />
                </Route>

                <Route exact path="/lista" >
                    <ListTripsPage />
                </Route>

                <Route exact path="/login" >
                    <LoginPage />
                </Route>

                <Route exact path="/detalhes" >
                    <TripDetailsPage />
                </Route>

                <Route exact path="" >
                    <PageNoutFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router