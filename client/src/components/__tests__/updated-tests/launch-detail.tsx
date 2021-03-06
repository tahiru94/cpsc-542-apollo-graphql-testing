//andrew
import React from 'react';
import { shallow } from 'enzyme';
import LaunchDetail from '../../launch-detail';

describe('LaunchDetail', () => {
    it('Renders without error', () => {
        const wrapper = shallow(<LaunchDetail />);
        expect(wrapper).toBeDefined();
    });

    it('Has children', () => {
        const wrapper = shallow(<LaunchDetail />);
        expect(wrapper).toBeDefined();
        expect(wrapper.children().length).toBeGreaterThan(0);
    });

    it('Contains h5 element', () => {
        const wrapper = shallow(<LaunchDetail />);
        expect(wrapper.containsMatchingElement(<h5 />)).toEqual(true);
    });

});