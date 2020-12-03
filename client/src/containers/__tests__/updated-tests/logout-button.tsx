import React from 'react';
import LogoutButton from '../../logout-button';
import { mountApollo, cleanup } from '../../../test-utils';
import { cache, isLoggedInVar } from '../../../cache';

describe('Logout', () => {
    it('Renders without error', () => {
        const wrapper = mountApollo(<LogoutButton />);

        expect(wrapper).toBeDefined();
    });

    it('Completes the logout', () => {
        isLoggedInVar(true);
        const wrapper = mountApollo(<LogoutButton />, { cache });
        localStorage.setItem('token', 'testTokenValue');
        localStorage.setItem('userId', 'abc123');

        const logoutButton = wrapper.find({ "data-testid": 'logout-button' }).children().at(0);

        logoutButton.simulate('click');

        expect(isLoggedInVar()).toBeFalsy();
        expect(localStorage.getItem('token')).toBeNull();
        expect(localStorage.getItem('userId')).toBeNull();
    });
})