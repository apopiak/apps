// Copyright 2017-2020 @polkadot/react-signer authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedFees, DerivedBalancesAll, DerivedContractFees } from '@polkadot/api-derive/types';

import BN from 'bn.js';
import { registry } from '@polkadot/react-api';

const ZERO_BALANCE: DerivedBalancesAll = {
  accountId: registry.createType('AccountId'),
  accountNonce: registry.createType('Index'),
  availableBalance: registry.createType('Balance'),
  freeBalance: registry.createType('Balance'),
  frozenFee: registry.createType('Balance'),
  frozenMisc: registry.createType('Balance'),
  isVesting: false,
  lockedBalance: registry.createType('Balance'),
  lockedBreakdown: [],
  reservedBalance: registry.createType('Balance'),
  vestedBalance: registry.createType('Balance'),
  vestingTotal: registry.createType('Balance'),
  votingBalance: registry.createType('Balance')
};

const ZERO_FEES_BALANCES: DerivedFees = {
  creationFee: registry.createType('Balance'),
  existentialDeposit: registry.createType('Balance'),
  transactionBaseFee: registry.createType('Balance'),
  transactionByteFee: registry.createType('Balance'),
  transferFee: registry.createType('Balance')
};

const ZERO_FEES = ZERO_FEES_BALANCES;

const ZERO_FEES_CONTRACT: DerivedContractFees = {
  callBaseFee: new BN(0),
  contractFee: new BN(0),
  creationFee: new BN(0),
  rentByteFee: new BN(0),
  rentDepositOffset: new BN(0),
  transactionBaseFee: new BN(0),
  transactionByteFee: new BN(0),
  transferFee: new BN(0),
  tombstoneDeposit: new BN(0)
};

const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

export {
  ZERO_BALANCE,
  ZERO_FEES,
  ZERO_FEES_BALANCES,
  ZERO_FEES_CONTRACT,
  MAX_SIZE_BYTES,
  MAX_SIZE_MB
};
