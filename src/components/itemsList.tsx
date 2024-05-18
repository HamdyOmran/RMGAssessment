import {View, Dimensions, FlatList} from 'react-native';
import {isTablet} from 'react-native-device-info';

import {Item} from './item';
import {ListItemType} from '../utils';

const ItemsList = ({
  data,
  searchValue,
  selectedItems,
  deleteModeActivated,
  onLongPressItem,
  onSelectItem,
}: {
  data: ListItemType[];
  searchValue: string;
  selectedItems: number[];
  deleteModeActivated: boolean;
  onLongPressItem: (id: number) => void;
  onSelectItem: (id: number) => void;
}) => {
  const renderItem = ({item}: {item: ListItemType}) => {
    return (
      <Item
        {...item}
        searchValue={searchValue}
        selectedItems={selectedItems}
        deleteModeActivated={deleteModeActivated}
        onLongPressItem={onLongPressItem}
        onSelectItem={onSelectItem}
      />
    );
  };

  const ListFooterComponent = () => {
    return <View style={{height: 260}} />;
  };

  return (
    <View style={{height: '100%', width: Dimensions.get('screen').width}}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={isTablet() ? 2 : 1}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

export {ItemsList};
