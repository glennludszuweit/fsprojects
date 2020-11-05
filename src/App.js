import React, { Component } from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Search from './components/search/Search';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      projects: [
        {
          image: require('./images/newsblog.png'),
          title: 'MEN Newsblog project',
          url: 'http://newsblog.glennludszuweit.de/',
          code: 'https://github.com/glennludszuweit/MEN-news-blog',
        },
        {
          image: require('./images/devhub.png'),
          title: 'MEN Devhub project',
          url: 'http://devhub.glennludszuweit.de/',
          code: 'https://github.com/glennludszuweit/MEN-dev-hub',
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { projects, searchField } = this.state;
    const filteredProjects = projects.filter((project) =>
      project.title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <Header />
        <Search
          placeholder='search projects'
          handleChange={this.handleChange}
        />
        <Projects projects={filteredProjects} />
      </div>
    );
  }
}

export default App;
