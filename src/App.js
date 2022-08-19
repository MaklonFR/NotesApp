import React from 'react';
import Header from './Components/Headers/Header';
import TabNote from './Components/TabNotes/TabNote';

function App() {
return (
  <>
      <Header /> 
      <div className='wrapper'>        
        <TabNote />
      </div>
  </>
  );
}

export default App;