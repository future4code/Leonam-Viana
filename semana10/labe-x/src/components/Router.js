import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import HomePage from './HomePageFolder/HomePage'
import CreateTripPage from './CreateTripsFolder/CreateTripsPage'
import ListTripsPage from './ListTripsFolder/ListTripsPage'
import TripDetailsPage from './TripDetailsFolder/TripDetailsPage'
import LoginPage from './LoginFolder/LoginPage'
import PageNoutFound from './PageError404/PageNotFound'
import FormAplicationPage from './FormAplicationFolder/FormAplication'

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

                <Route exact path="/inscricao">
                    <FormAplicationPage />
                </Route>

                <Route exact path="" >
                    <PageNoutFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router