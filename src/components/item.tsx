import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import HighlightText from '@sanar/react-native-highlight-text';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import {ListItemType} from '../utils';

interface Props extends ListItemType {
  searchValue: string;
  selectedItems: number[];
  deleteModeActivated: boolean;
  onLongPressItem: (id: number) => void;
  onSelectItem: (id: number) => void;
}

const Item = ({
  id,
  title,
  description,
  image,
  price,
  tags,
  searchValue,
  selectedItems,
  deleteModeActivated,
  onLongPressItem,
  onSelectItem,
}: Props) => {
  const {
    listItem,
    itemImage,
    itemDetails,
    titleContainer,
    itemTitle,
    itemDescription,
    itemPrice,
    itemTags,
    itemTag,
  } = styles;

  return (
    <TouchableOpacity
      style={listItem}
      activeOpacity={1}
      onLongPress={() => onLongPressItem(id)}>
      {image && <FastImage source={{uri: image}} style={itemImage} />}
      <View style={itemDetails}>
        <View style={titleContainer}>
          <HighlightText
            highlightStyle={{backgroundColor: 'yellow'}}
            searchWords={[searchValue]}
            textToHighlight={title}
            style={itemTitle}
          />

          {deleteModeActivated && (
            <BouncyCheckbox
              size={25}
              fillColor="red"
              unFillColor="#FFFFFF"
              iconStyle={{borderColor: 'red'}}
              innerIconStyle={{borderWidth: 2}}
              onPress={() => onSelectItem(id)}
              isChecked={selectedItems.includes(id)}
            />
          )}
        </View>

        {description && <Text style={itemDescription}>{description}</Text>}

        {price && <Text style={itemPrice}>${price.toFixed(2)}</Text>}
        {tags && (
          <View style={itemTags}>
            {tags.map((tag, index) => (
              <HighlightText
                key={index}
                highlightStyle={{backgroundColor: 'yellow'}}
                searchWords={[searchValue]}
                textToHighlight={tag}
                style={itemTag}
              />
            ))}
          </View>
        )}
        <View></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: 230,
    color: '#000000',
  },
  itemDescription: {
    marginVertical: 5,
    color: '#000000',
  },
  itemPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  itemTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  itemTag: {
    backgroundColor: '#ccc',
    padding: 5,
    marginRight: 5,
    borderRadius: 3,
    color: '#000000',
  },
});

export {Item};
