//andrew
import React from 'react';
import { shallow } from 'enzyme';
import LaunchDetail from '../../launch-detail';

describe('LaunchDetail', () => {
    it('Renders without error', () => {
        const wrapper = shallow(<LaunchDetail />);
        expect(wrapper).toBeDefined();
    });

});