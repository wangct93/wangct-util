export * from './stringUtil';
export * from './arrayUtil';
export * from './numberUtil';
export * from './objectUtil';
export * from './reactUtil';
export * from './promiseUtil';
export * from './util';
export * from './validateUtil';
export * from './defineUtil';
export * from './typeUtil';
export * from './dataClass';
export * from './domUtil';
export * from './pathUtil';
export * from './dateUtil';
import * as util from './util';
import * as stringUtil from './stringUtil';
import * as arrayUtil from './arrayUtil';
import * as numberUtil from './numberUtil';
import * as objectUtil from './objectUtil';
import * as reactUtil from './reactUtil';
import * as promiseUtil from './promiseUtil';
import * as validateUtil from './validateUtil';
import * as defineUtil from './defineUtil';
import * as typeUtil from './typeUtil';
import * as dataClass from './dataClass';
import * as domUtil from './domUtil';
import * as pathUtil from './pathUtil';
import * as dateUtil from './dateUtil';

export default {
  ...util,
  ...stringUtil,
  ...arrayUtil,
  ...numberUtil,
  ...objectUtil,
  ...reactUtil,
  ...promiseUtil,
  ...validateUtil,
  ...defineUtil,
  ...typeUtil,
  ...dataClass,
  ...domUtil,
  ...pathUtil,
  ...dateUtil,
};
