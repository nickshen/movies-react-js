import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Footer from '../components/Footer';
import Home from '../components/Home';
import NavigationBar from '../components/NavigationBar';
import { StyleSheet, css } from 'aphrodite/no-important';
import Series from '../components/Series';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    display: 'flex',
    flex: '1',
  },
});

const HomeRoute = () => (
  <Home />
);

const SeriesRoute = () => (
  <Series />
);

const MoviesRoute = () => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Root = () => (
  <Router>
    <div className={css(styles.wrapper)}>
      <NavigationBar />
      <div className={css(styles.mainContent)}>
        <Route exact path="/" component={HomeRoute}/>
        <Route path="/series" component={SeriesRoute}/>
        <Route path="/movies" component={MoviesRoute}/>
      </div>
      <Footer />
    </div>
  </Router>
);
export default Root;
