import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from '../../footer';
import MenuItem from '../../menu-item';

describe('Footer', () => {
    it('Renders without error', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toBeDefined();
    });

    it('renders with a menu item for "Home"', () => {
        const wrapper = shallow(<Footer />);
        const homeMenuItem = wrapper.find(<MenuItem to="/" />);
        const homeMenuItemText = wrapper.children().children().get(0).props.children[1];

        expect(homeMenuItem).toBeDefined();
        expect(homeMenuItemText).toEqual('Home');
    });
});