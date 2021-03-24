import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage';
import Table from './pages/table';


const routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ () => <Homepage quantidade={[1, 2, 3]} />} />
                <Route path="/table" component={ () => <Table />} />
            </Switch>
        </BrowserRouter>
    );

}

export default routes;