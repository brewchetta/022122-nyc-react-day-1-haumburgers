import React from 'react'
import bobsBurgers from './burger-data'
import HaumburgerList from './HaumburgerList';

// we get the list of burgers by importing it from burger-data above

function App() {

  return (
    <div className="App">

      <h1>HAUMBURGERS NOT HAMBURGERS <span role='img' aria-label="monocle emoji">🧐</span></h1>

      {/* We need to send the list of burgers to HaumburgerList so let's send it as a prop with a name of burgers */}
      <HaumburgerList burgers={bobsBurgers} />

      {/* We're building a component tree that goes:
        App
        |
        HaumburgerList
        ||||
        HaumburgerDisplay
      */}

    </div>
  );
}

export default App;
