import React from 'react';
import { InMemoryCache } from '@apollo/client';
import {
    renderApollo,
    mountApollo,
    cleanup,
    waitForElement
} from '../../../test-utils';
import Launches, { GET_LAUNCHES } from '../../launches';

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

describe('Launches Page', () => {
    afterEach(cleanup);

    it('Renders without error', () => {
        const wrapper = mountApollo(<Launches />);

        expect(wrapper).toBeDefined();
    });

    it('Renders launches', async () => {
        const cache = new InMemoryCache({ addTypename: false });
        const mocks = [
            {
                request: { query: GET_LAUNCHES },
                result: {
                    data: {
                        launches: {
                            cursor: '123',
                            hasMore: true,
                            launches: [mockLaunch],
                        },
                    },
                },
            },
        ];

        const wrapper = await mountApollo(<Launches />, {
            mocks,
            cache
        });

        const launches = wrapper.props().mocks[0].result.data.launches.launches;
        console.log(launches);

        expect(launches).toBeDefined();
        expect(launches.length).toBe(1);
        expect(launches[0].mission.name).toBe('test mission');
    });
});