import { Button } from '../../components';
import { darkTheme, styled } from '../../theme';

export const Container = styled(Button, {
  variants: {
    loading: {
      true: {
        '&:hover': {
          background: 'none',
        },
      },
      false: {
        '&:hover': {
          borderRadius: '$xs',
          $$color: '$colors$info100',
          [`.${darkTheme} &`]: {
            $$color: '$colors$neutral400',
          },
          backgroundColor: '$$color',
        },
      },
    },
  },
});

export const TokenSectionContainer = styled('div', {
  width: '10.625rem',
  padding: '$2 $5',
  display: 'flex',
  borderRadius: '$xs',
  justifyContent: 'start',
  boxSizing: 'border-box',
  alignItems: 'center',

  '& .token-chain-name': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    paddingLeft: '$10',
  },
  '& .token-chain-name__skeleton': {
    padding: '$5 $0',
  },
});