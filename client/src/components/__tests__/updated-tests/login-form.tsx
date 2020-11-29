import React from 'react';
import { shallow } from 'enzyme';
import styled from 'react-emotion';
import LoginForm from '../../login-form';

describe('LoginForm', () => {
    it('Renders without error', () => {
        const loginFn = () => { };
        const wrapper = shallow(<LoginForm login={loginFn} />);

        expect(wrapper).toBeDefined();
    });

    it('Renders with a heading', () => {
        const loginFn = () => { };
        const wrapper = shallow(<LoginForm login={loginFn} />);
        const heading = wrapper.find(<h1 />);

        expect(heading).toBeDefined();
    });
});