import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HeroList from '~/pages/Hero/List';
import HeroItem from '~/pages/Hero/Item';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HeroList} />
      <Route path="/hero/:id" component={HeroItem} />
    </Switch>
  );
}
