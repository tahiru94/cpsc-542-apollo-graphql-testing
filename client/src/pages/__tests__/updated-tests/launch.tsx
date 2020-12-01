import React from 'react';
import {
    renderApollo,
    mountApollo,
    cleanup
} from '../../../test-utils';
import Launch, { GET_LAUNCH_DETAILS } from '../../launch';

const mockLaunch = {
    __typename: 'Launch',
    id: 1,
    isBooked: true,
    rocket: {
        __typename: 'Rocket',
        id: 1,
        name: 'tester',
        type: 'test',
    },
    mission: {
        __typename: 'Mission',
        id: 1,
        name: 'test mission',
        missionPatch: '/',
    },
    site: 'earth',
    isInCart: false,
};

describe('Launch Page', () => {
    afterEach(cleanup);

    it('Renders without error', () => {
        const wrapper = mountApollo(<Launch />);

        expect(wrapper).toBeDefined();
    });
});