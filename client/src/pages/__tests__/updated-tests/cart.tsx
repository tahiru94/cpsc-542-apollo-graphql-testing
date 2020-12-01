import React from 'react';
import {
    renderApollo,
    cleanup,
    waitForElement,
    mountApollo
} from '../../../test-utils';
import Cart from '../../cart';
import { GET_LAUNCH } from '../../../containers/cart-item';
import { cache, cartItemsVar } from '../../../cache';

const mockLaunch = {
    __typename: 'Launch',
    id: 1,
    isBooked: true,
    rocket: {
        id: 1,
        name: 'test'
    },
    mission: {
        name: 'test mission',
        missionPatch: '/'
    }
};

describe('Cart Page', () => {

    afterEach(cleanup);

    it('Renders without error', () => {
        const wrapper = mountApollo(<Cart />);

        expect(wrapper).toBeDefined();
    });

    it('Renders with an Apollo Mock Provider', () => {
        const wrapper = renderApollo(<Cart />, { cache });
        const { getByTestId } = wrapper;

        expect(wrapper).toBeDefined();
    });

    xit('Renders with a message for empty carts', () => {
        // const wrapper = shallow(<Cart />);
        const wrapper = mountApollo(<Cart />, { cache });

        // const { getByTestId } = mountApollo(<Cart />, { cache });

        // return waitForElement(() => getByTestId('empty-message'));
    });

    xit('Renders a cart', () => {
        let mocks = [
            {
                request: {
                    query: GET_LAUNCH,
                    variables: {
                        launchId: '1'
                    },
                    result: {
                        data: {
                            launch: mockLaunch
                        }
                    }
                }
            }
        ];

        const { getByTestId } = renderApollo(<Cart />, { cache: mocks });
        cartItemsVar(['1']);

        return waitForElement(() => getByTestId('book-button'));
    });
});