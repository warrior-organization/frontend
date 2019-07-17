import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import { ALUNOS_EDITAR_ROUTE, ALUNOS_NOVO_ROUTE, ALUNOS_HOME_ROUTE } from '../route/alunos';
import PrivateRoute from '../route/PrivateRoute';
import AlunoAlterar from './AlunoAlterar';
import AlunoHome from './AlunoHome';
import AlunoInserir from './AlunoInserir';


// const AlunoInserir =  React.lazy(() => require("./AlunoInserir"));
// const AlunoAlterar =  React.lazy(() => require("./AlunoAlterar"));
// const AlunoHome =  React.lazy(() => require("./AlunoHome"));

const BASE_ROUTE = 'alunos';

export default props => (
    <Switch>
        <PrivateRoute component={AlunoInserir} path={ALUNOS_NOVO_ROUTE}/>
        <PrivateRoute component={AlunoAlterar} path={`${ALUNOS_EDITAR_ROUTE}/:id`}/>
        <PrivateRoute component={AlunoHome} path={ALUNOS_HOME_ROUTE}/>
        <Redirect to={`/${BASE_ROUTE}`}/>
    </Switch>
)