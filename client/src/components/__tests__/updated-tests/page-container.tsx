import React from 'react';
import { shallow } from 'enzyme';
import PageContainer from '../../page-container';

describe('PageContainer', () => {
    it('Renders without error', () => {
        const wrapper = shallow(<PageContainer />);

        expect(wrapper).toBeDefined();
    });
});