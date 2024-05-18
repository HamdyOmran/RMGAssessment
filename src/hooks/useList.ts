import {useState} from 'react';

import {data, deleteItems, searchList, sortList} from '../utils';

const useList = () => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [listData, setListData] = useState(data);
  const [dataCopy, setDataCopy] = useState(data);
  const [searchValue, setSearchValue] = useState('');
  const [deleteModeActivated, setDeleteModeActivated] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const onPressSort = () => {
    const sortedList = sortList(listData, sortOrder);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setListData(sortedList);
  };

  const onSearch = (text: string) => {
    const filteredList = searchList(dataCopy, text);
    setSearchValue(text);
    setListData(filteredList);
  };

  const onLongPressItem = (itemId: number) => {
    setDeleteModeActivated(true);
    setSelectedItems([itemId]);
  };

  const onCancelDeleteMode = () => {
    setDeleteModeActivated(false);
    setSelectedItems([]);
  };

  const onSelectItem = (itemId: number) => {
    let items = selectedItems;

    items = items.includes(itemId)
      ? items.filter(item => item !== itemId)
      : [...items, itemId];

    setSelectedItems(items);
  };

  const deleteSelectedItems = () => {
    const filteredList = deleteItems(listData, selectedItems);
    const newDataCopy = deleteItems(dataCopy, selectedItems);

    setListData(filteredList);
    setDataCopy(newDataCopy);
    setSelectedItems([]);
    setDeleteModeActivated(false);
  };

  return {
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
  };
};

export {useList};
