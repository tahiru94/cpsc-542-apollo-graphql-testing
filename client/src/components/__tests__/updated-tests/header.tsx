//andrew
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../header';

describe('Header', () => {
    it('Renders without error', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toBeDefined();
    });
    it('renders with a p tag', () => {
        const wrapper = shallow(<Header />);
        const subText = wrapper.children().children().get(0).props.children[1];

        expect(subText).toEqual('p');
    });
});