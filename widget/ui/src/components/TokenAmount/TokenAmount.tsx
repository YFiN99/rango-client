import type { PropTypes } from './TokenAmount.types';

import React from 'react';

import { ChainToken } from '../ChainToken';
import { PriceImpact } from '../PriceImpact/PriceImpact';
import { Typography } from '../Typography';

import {
  Container,
  tokenAmountStyles,
  usdValueStyles,
} from './TokenAmount.styles';

export function TokenAmount(props: PropTypes) {
  return (
    <Container direction={props.direction} centerAlign={props.centerAlign}>
      <div className={tokenAmountStyles()}>
        <ChainToken
          chainImage={props.chain.image}
          tokenImage={props.token.image}
          size="medium"
        />
        <div>
          {props.label && (
            <Typography ml={4} size="xsmall" variant="body" color="$neutral700">
              {props.label}
            </Typography>
          )}
          <div title={`${props.price.value} ${props.token.displayName}`}>
            <Typography
              ml={4}
              size="medium"
              variant="title"
              style={{ fontWeight: 600 }}>
              {props.price.value}
            </Typography>
            <Typography
              ml={8}
              size="medium"
              variant="title"
              style={{ fontWeight: 400 }}>
              {props.token.displayName}
            </Typography>
          </div>
        </div>
      </div>
      {props.price.usdValue && props.price.usdValue !== '0' && (
        <div className={usdValueStyles()}>
          {props.type === 'input' && (
            <Typography mr={4} size="small" variant="body" color="$neutral700">
              {`~$${props.price.usdValue}`}
            </Typography>
          )}
          {props.type === 'output' && (
            <PriceImpact
              size="small"
              outputUsdValue={props.price.usdValue}
              percentageChange={props.percentageChange}
              warningLevel={props.warningLevel}
            />
          )}
        </div>
      )}
    </Container>
  );
}
