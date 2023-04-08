import React from 'react';
import { Button, FilledCircle, SecondaryPage, styled, Typography } from '@rango-dev/ui';
import { WalletType } from '@rango-dev/wallets-shared';
import { Source, Wallets } from '../../types';
import { LiquiditySource } from '@rango-dev/ui/dist/types/meta';
const ListContainer = styled('div', {
  display: 'grid',
  gap: '.5rem',
  gridTemplateColumns: ' repeat(2, minmax(0, 1fr))',
  maxHeight: 480,
});

const Image = styled('img', {
  width: '1.5rem',
  maxHeight: '1.5rem',
  marginRight: '$4',
});

type PropTypes =
  | {
      type: 'Wallets';
      selectedList: WalletType[] | 'all';
      list: Wallets;
      onChange: (wallets: WalletType) => void;
    }
  | {
      type: 'Sources';
      selectedList: Source[] | 'all';
      list: LiquiditySource[];
      onChange: (sources: Source) => void;
    };

const filterList = (list, searchedFor: string) =>
  list.filter((item) => item.title.toLowerCase().includes(searchedFor.toLowerCase()));

const getIndex = (list, v, type) => {
  switch (type) {
    case 'Wallets':
      return list.findIndex((item) => item === v);
    case 'Sources':
      return list.findIndex((item) => item.title === v.title && item.type === v.type);
  }
};

export default function ModalContent({ type, list, selectedList, onChange }: PropTypes) {
  const isSelect = (name: string) => {
    return selectedList === 'all' || getIndex(selectedList, name, type) > -1;
  };

  return (
    <SecondaryPage
      textField={true}
      hasHeader={false}
      textFieldPlaceholder={`Search ${type} By Name`}>
      {(searchedFor) => (
        <ListContainer>
          {filterList(list, searchedFor).map((item, index) => (
            <Button
              type={isSelect(type === 'Wallets' ? item.type : item) ? 'primary' : undefined}
              variant="outlined"
              size="large"
              prefix={<Image src={item.logo} />}
              suffix={
                isSelect(type === 'Wallets' ? item.type : item) ? <FilledCircle /> : undefined
              }
              align="start"
              onClick={onChange.bind(null, item)}
              key={index}>
              <Typography variant="body2">{item.title}</Typography>
            </Button>
          ))}
        </ListContainer>
      )}
    </SecondaryPage>
  );
}