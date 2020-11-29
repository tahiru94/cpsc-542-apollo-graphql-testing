import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from '../../menu-item';

describe('MenuItem', () => {
    it('renders without error', () => {
        const wrapper = shallow(<MenuItem to="/" />);

        expect(wrapper).toBeDefined();
    });

    it('Links to a specified path', () => {
        const wrapper = shallow(<MenuItem to="/home" />);
        const actual = wrapper.props().to;

        expect(wrapper).toBeDefined();
        expect(actual).toBe('/home');
    });
})