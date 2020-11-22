import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../button';

describe('Button', () => {
    it('Renders without error', () => {
        const wrapper = shallow(<Button>Hello World</Button>);
        expect(wrapper).toBeDefined();
    });

    it('Renders with text', () => {
        const wrapper = shallow(<Button>Hello World</Button>);
        const content = wrapper.at(0).text();

        expect(content).toBeDefined();
        expect(content).toEqual('Hello World');
    });
});