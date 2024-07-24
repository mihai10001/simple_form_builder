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
import { FormComponentsUnion } from './entities/FormComponentsUnion';
import { RenderFormComponent } from './entities/FormComponentsUnion';

function App() {
  const [items, setItems] = React.useState(
    FormComponentsUnion.map(comp => ({
      gridIndex: comp?.id,
      element: RenderFormComponent(comp?.id, comp?.name, false),
      color: 'rgba(216, 191, 216, 0.5)'
    }))
  );
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

  function onExportFormStructure() {
    const structure = { itemsPerRow, rowHeight, items: items.map(item => item?.element?.type?.name) };
    navigator.clipboard.writeText(JSON.stringify(structure));
    alert("The structure of the form has been copied to the clipboard!");
  }

  return (
    <GridContextProvider onChange={onChange}>
      <Container maxWidth='md'>
        <AddNewComponentSection
          onAddNewFormComponent={onAddNewFormComponent}
          onExportFormStructure={onExportFormStructure} />
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
