import React, {
  PureComponent,
}                          from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { Link }       from 'react-router-dom';
import { DefaultStyles } from '../helpers/styles';
import MovieItem from './MovieItem';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  tabs: {
    display: 'flex',
    listStyleType: 'none',
  },
  tabButton: {
    flex: '1',
    textAlign: 'right',
  },
});

class FilteredTVContent extends PureComponent
{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getData();
  }

  getData(){
     return fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({data: responseJson});
    })
    .catch((error) => {
      this.setState({error: true});
    });
  }

  renderData() {
    const {
      programType,
    } = this.props;

    if(this.state.error) {
      return 'Oops, something went wrong...';
    }
    else if(this.state.data) {
      const pType = programType.toLowerCase();
      const filtered = this.state.data.entries.filter(entry => entry.releaseYear > 2010 && entry.programType === pType);
      const final = filtered.slice(0, 21).sort( (a, b) =>  (a.title < b.title) ? -1 : 1);
      return final.map((entry, index) => 
        (
          <MovieItem 
            bottomTitle={entry.title}
            key={index}
            imageURL={entry.images['Poster Art'].url}
          />
        ));
    }
    else {
      return 'Loading Data...';
    }
  }

  render()
  {
    const {
      programType,
    } = this.props;
    const pType = programType.toLowerCase();

    return (
      <div className={css(styles.container)}>
        <div className={css(DefaultStyles.titleRow)}>
          <Link to={'/'} className={css(DefaultStyles.link)}>
            Popular Titles
          </Link>
           &nbsp;/&nbsp;
           <Link to={`/${pType}`} className={css(DefaultStyles.link)}>
            Popular {programType}
          </Link>
        </div>

        <div id="#content" className={css(DefaultStyles.section, DefaultStyles.mainContent)}>
          {this.renderData()}
        </div>
      </div>
    );
  }
}

export default FilteredTVContent;
