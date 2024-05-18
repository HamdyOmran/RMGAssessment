import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

interface Props {
  searchValue: string;
  noOfItems: number;
  deleteModeActivated: boolean;
  onPressSort: () => void;
  onSearch: (text: string) => void;
  onCancelDeleteMode: () => void;
  deleteSelectedItems: () => void;
}

const ListHeader = ({
  searchValue,
  noOfItems,
  deleteModeActivated,
  onPressSort,
  onSearch,
  onCancelDeleteMode,
  deleteSelectedItems,
}: Props) => {
  const {
    container,
    input,
    imageContainer,
    image,
    subHeader,
    itemsNumber,
    deleteItemsText,
    closeImage,
  } = styles;

  return (
    <>
      <View style={container}>
        <TextInput
          value={searchValue}
          onChangeText={onSearch}
          style={input}
          placeholder={'Search an item'}
          placeholderTextColor={'#00000060'}
        />
        <TouchableOpacity style={imageContainer} onPress={onPressSort}>
          <Image source={require('../../assets/sorting.png')} style={image} />
        </TouchableOpacity>
      </View>
      <View style={[container, subHeader]}>
        <Text style={itemsNumber}>{`${noOfItems} items`}</Text>
        {deleteModeActivated && (
          <>
            <TouchableOpacity onPress={deleteSelectedItems}>
              <Text style={deleteItemsText}>{`Delete selected`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={imageContainer}
              onPress={onCancelDeleteMode}>
              <Image
                source={require('../../assets/remove.png')}
                style={closeImage}
              />
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 4,
  },
  imageContainer: {
    marginLeft: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  subHeader: {
    marginVertical: 12,
  },
  itemsNumber: {
    color: '#00000096',
    fontStyle: 'italic',
    flex: 1,
  },
  deleteItemsText: {
    color: '#D22B2B',
    fontWeight: 'bold',
  },
  closeImage: {
    width: 20,
    height: 20,
    marginLeft: 12,
  },
});

export {ListHeader};
