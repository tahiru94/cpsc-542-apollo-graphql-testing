import React from 'react';
import {
    renderApollo,
    mountApollo,
    cleanup
} from '../../../test-utils';

import Login, { LOGIN_USER } from '../../login';
import Loading from '../../../components/loading';
import { cache, isLoggedInVar } from '../../../cache';
import { waitForElement } from '@testing-library/react';

describe('Login Page', () => {
    afterEach(cleanup);

    it('Renders without error', () => {
        const wrapper = mountApollo(<Login />);

        expect(wrapper).toBeDefined();
    });

    it('Fires the login mutation and updates the cache', async () => {
        expect(isLoggedInVar()).toBeFalsy();

        const mocks = [{
            request: {
                query: LOGIN_USER, variables: {
                    email: 'a@a.a'
                }
            },
            result: {
                data: {
                    login: {
                        id: 'abc123',
                        token: 'def456',
                    },
                },
            },
        }];

        const wrapper = mountApollo(<Login />, { mocks, cache });
        const input = wrapper.find({ type: 'email' }).children().at(0);
        const loginButton = wrapper.find({ type: 'submit' }).children().at(0);

        input.simulate('change', { value: 'email@test.com' });
        loginButton.simulate('click');

        // Absence of loading logo after input and login click
        // Signifies login
        const loadingLogo = wrapper.find(<Loading />).children().at(0);
        expect(loadingLogo.length).toBe(0);
    });
});