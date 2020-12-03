import React from 'react';
import { mountApollo, cleanup } from '../../../test-utils';
import ActionButton from '../../action-button';
import { cartItemsVar } from '../../../cache';

describe('ActionButton', () => {
    it('Renders without error', () => {
        const wrapper = mountApollo(<ActionButton />);

        expect(wrapper).toBeDefined();
    });

    it('Shows the correct label', () => {
        const wrapper = mountApollo(<ActionButton />);
        const addToCartButton = wrapper.find({ "data-testid": "action-button" }).children().at(0);

        expect(addToCartButton).toBeDefined();
        expect(addToCartButton.text().length).toBeTruthy();
        expect(addToCartButton.text()).toEqual('Add to Cart');
    });
});