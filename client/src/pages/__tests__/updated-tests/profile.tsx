import React from 'react';
import {
    mountApollo,
    cleanup
} from '../../../test-utils';
import Profile, { GET_MY_TRIPS } from '../../profile';

const mockLaunch = {
    __typename: 'Launch',
    id: 1,
    isBooked: true,
    rocket: {
        __typename: 'Rocket',
        id: 1,
        name: 'tester',
    },
    mission: {
        __typename: 'Mission',
        id: 1,
        name: 'test mission',
        missionPatch: '/',
    },
};

const mockMe = {
    __typename: 'User',
    id: 1,
    email: 'a@a.a',
    trips: [mockLaunch],
};

describe('Profile Page', () => {
    afterEach(cleanup);

    it('Renders without error', () => {
        const mocks = [
            {
                request: { query: GET_MY_TRIPS },
                result: { data: { me: mockMe } },
            },
        ];

        const wrapper = mountApollo(<Profile />, { mocks });

        expect(wrapper).toBeDefined();
    });

    it('Renders the profile for the user', () => {
        const mocks = [
            {
                request: { query: GET_MY_TRIPS },
                result: { data: { me: mockMe } },
            },
        ];

        const wrapper = mountApollo(<Profile />, { mocks });
        const userEmail = wrapper.props().mocks[0].result.data.me.email;

        expect(userEmail).toEqual('a@a.a');
    });
});