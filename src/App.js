import React from 'react';
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from 'react-grid-dnd';
import { Container } from '@material-ui/core';
import './App.css';
import LayoutConfigurationSection from './components/LayoutConfigurationSection';

function App() {
  const [itemsPerRow, setItemsPerRow] = React.useState(3);
  const [rowHeight, setRowHeight] = React.useState(76);

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (sourceId == null || sourceIndex == null || targetIndex == null) return;
    const result = swap(items, sourceIndex, targetIndex);
    return setItems(result);
  }

  return (
    <GridContextProvider onChange={onChange}>
      <Container maxWidth='md'>
        <LayoutConfigurationSection
          itemsPerRow={itemsPerRow} setItemsPerRow={setItemsPerRow}
          rowHeight={rowHeight} setRowHeight={setRowHeight}
        />

        <GridDropZone
          className="dropzone"
          id="items"
          boxesPerRow={itemsPerRow}
          rowHeight={rowHeight}
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
