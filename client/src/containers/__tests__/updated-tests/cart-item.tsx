import React from 'react';
import {
    mountApollo,
    cleanup
} from '../../../test-utils';
import CartItem, { GET_LAUNCH } from '../../cart-item';

const mockLaunch = {
    __typename: 'Launch',
    id: 1,
    isBooked: true,
    rocket: {
        id: 1,
        name: 'tester',
    },
    mission: {
        name: 'test mission',
        missionPatch: '/',
    },
};

describe('CartItem', () => {
    afterEach(cleanup);

    it('Renders without error', () => {
        const wrapper = mountApollo(<CartItem launchId={'1'} />);

        expect(wrapper).toBeDefined();
    });
});