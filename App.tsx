import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {ItemsList, ListHeader} from './src/components';
import {useList} from './src/hooks';

function App(): React.JSX.Element {
  const {
    listData,
    searchValue,
    deleteModeActivated,
    selectedItems,
    onPressSort,
    onSearch,
    onLongPressItem,
    onCancelDeleteMode,
    onSelectItem,
    deleteSelectedItems,
  } = useList();

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ListHeader
        searchValue={searchValue}
        noOfItems={listData?.length}
        deleteModeActivated={deleteModeActivated}
        onPressSort={onPressSort}
        onSearch={onSearch}
        onCancelDeleteMode={onCancelDeleteMode}
        deleteSelectedItems={deleteSelectedItems}
      />
      <ItemsList
        data={listData}
        searchValue={searchValue}
        selectedItems={selectedItems}
        deleteModeActivated={deleteModeActivated}
        onLongPressItem={onLongPressItem}
        onSelectItem={onSelectItem}
      />
    </SafeAreaView>
  );
}

export default App;
