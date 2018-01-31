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

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

const Root = () => (
  <Router>
    <div className={css(styles.wrapper)}>
      <NavigationBar />
      <hr/>
      <div className={css(styles.mainContent)}>
        <Route exact path="/" component={HomeRoute}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
      <Footer />
    </div>
  </Router>
);
export default Root;
