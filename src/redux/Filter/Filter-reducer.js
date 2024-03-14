import { createReducer } from '@reduxjs/toolkit';

import { changeFilter } from '../Filter/Filter-actions';

export const filter = createReducer('', {
    [changeFilter]: (state, action) => action.payload,
});
