//andrew
import React from 'react';
import { shallow } from 'enzyme';
import LaunchTile from '../../launch-tile';

describe('LaunchTile', () => {
    it('Renders without error', () => {
        const wrapper = shallow(<LaunchTile
            launch={{
              __typename: 'Launch',
              isBooked: false,
              id: '1',
              mission: { name: 'the first one', __typename: 'Mission', missionPatch: null },
              rocket: { name: 'harambe', __typename: 'Rocket', id: '1' },
            }}
          />);
        expect(wrapper).toBeDefined();
    });

});