export const CHANGE_TYPES = {
  CREATED: 1,
  UPDATED: 2,
  DELETED: 3,
  MOVED: 4,
  COPIED: 5,
};

export const MESSAGES = {
  FETCH_COLLECTION: 'FETCH_COLLECTION',
  FETCH_MODEL: 'FETCH_MODEL',
  REQUEST_RESPONSE: 'REQUEST_RESPONSE',
};

export const STATUS = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const APP_ID = 'KolibriStudio';

// Transaction sources
/**
 * This transaction source will be ignored when tracking the
 * client's changes
 *
 * @type {string}
 */
export const IGNORED_SOURCE = 'IGNORED_SOURCE';

export const REVERT_SOURCE = 'REVERT/' + IGNORED_SOURCE;

// Tables
export const CHANGES_TABLE = '__changesForSyncing';

export const TREE_CHANGES_TABLE = '__treeChangesForSyncing';

export const CHANGE_LOCKS_TABLE = '__changeLocks';

export const RELATIVE_TREE_POSITIONS = {
  FIRST_CHILD: 'first-child',
  LAST_CHILD: 'last-child',
  LEFT: 'left',
  RIGHT: 'right',
};