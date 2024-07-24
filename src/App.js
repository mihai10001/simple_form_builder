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
import AddNewComponentSection from './components/AddNewComponentSection';
import { RenderFormComponent } from './entities/FormComponentsUnion';

function App() {
  const [items, setItems] = React.useState([]);
  const [itemsPerRow, setItemsPerRow] = React.useState(3);
  const [rowHeight, setRowHeight] = React.useState(76);

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    if (sourceId == null || sourceIndex == null || targetIndex == null) return;
    const result = swap(items, sourceIndex, targetIndex);
    return setItems(result);
  }

  function onAddNewFormComponent(index, label, color, isRequired) {
    const nextIndex = Math.max(...items.map(x => x.gridIndex)) + 1;
    const newItem = { gridIndex: nextIndex, element: RenderFormComponent(index, label, isRequired), color };
    setItems([...items, newItem]);
  }

  return (
    <GridContextProvider onChange={onChange}>
      <Container maxWidth='md'>
        <AddNewComponentSection
          onAddNewFormComponent={onAddNewFormComponent} />
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
            <GridItem key={item.gridIndex}>
              <div className="gridItem">
                <div className="gridItemContent" style={{ backgroundColor: item.color }}>
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
