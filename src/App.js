import React from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from 'react-grid-dnd';
import { Container } from '@material-ui/core';
import './App.css';

function App() {
  const [items, setItems] = React.useState([]);

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (sourceId == null || sourceIndex == null || targetIndex == null) return;
    const result = swap(items, sourceIndex, targetIndex);
    return setItems(result);
  }

  return (
    <GridContextProvider onChange={onChange}>
      <Container maxWidth='md'>
        <GridDropZone
          className="dropzone"
          id="items"
          boxesPerRow={3}
          rowHeight={76}
        >
          {items.map(item => (
            <GridItem key={item.id}>
              <div className="gridItem">
                <div className="gridItemContent">
                  {item.element}
                </div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </Container>
    </GridContextProvider>
  );
}

export default App;
