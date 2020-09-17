import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from './About';
import { Tools } from './Tools';
import { Contact } from './Contact';
import { Gallery } from './Gallery';
import { MoreAbout } from './MoreAbout';

export const SwitchComponent = ({ data, setCurrentPage }) => {
    return (
        <Switch>
            <Route exact path="/">
                <About data={data} setCurrentPage={setCurrentPage} />
            </Route>
            {/* <Route exact path="/tools">
                <Tools data={data} setCurrentPage={setCurrentPage} />
            </Route>
            <Route exact path="/gallery">
                <Gallery data={data} setCurrentPage={setCurrentPage} />
            </Route> */}
            <Route exact path="/about">
                <MoreAbout data={data} setCurrentPage={setCurrentPage} />
            </Route>
            <Route exact path="/contact">
                <Contact data={data} setCurrentPage={setCurrentPage} />
            </Route>
        </Switch>
    );
};
