//andrew
import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../loading';

describe('Loading',() => {
    it('Renders without error and is defined', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper).toBeDefined();
    });

    it('Matches snapshot', () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper).toBeDefined();
        expect(wrapper).toMatchSnapshot();
    });

});