import {ListItemType} from './types';

export const sortList = (data: ListItemType[], sortOrder: string) => {
  return data.slice().sort((itemA: ListItemType, itemB: ListItemType) => {
    if (sortOrder === 'asc') return itemA.price - itemB.price;
    else return itemB.price - itemA.price;
  });
};

export const searchList = (data: ListItemType[], text: string) => {
  return data.slice().filter((item: ListItemType) => {
    return (
      item.title.toLowerCase().includes(text.toLowerCase()) ||
      item.tags.some(item => item.toLowerCase().includes(text.toLowerCase()))
    );
  });
};

export const deleteItems = (data: ListItemType[], selectedItems: number[]) => {
  return data.slice().filter((item: ListItemType) => {
    return !selectedItems.includes(item.id);
  });
};
