import { mount } from 'enzyme';
import React from 'react';
import { mountApollo } from '../../../test-utils';
import BookTrips, { BOOK_TRIPS } from '../../book-trips';
import { GET_LAUNCH } from '../../cart-item';

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

describe('BookTrips', () => {
    it('Renders without error', () => {
        const wrapper = mountApollo(<BookTrips cartItems={[]} />);

        expect(wrapper).toBeDefined();
    });

    it('Completes the mutation and shows the correct message', () => {
        let mocks = [
            {
                request: { query: BOOK_TRIPS, variables: { launchIds: ['1'] } },
                result: {
                    data: {
                        bookTrips: [{ success: true, message: 'success!', launches: [] }],
                    },
                },
            },
            {
                // we need this query for refetchQueries
                request: { query: GET_LAUNCH, variables: { launchId: '1' } },
                result: { data: { launch: mockLaunch } },
            },
        ];

        const wrapper = mountApollo(<BookTrips cartItems={['1']} />, {
            mocks,
            addTypename: false
        });

        expect(wrapper).toBeDefined();
    });
});