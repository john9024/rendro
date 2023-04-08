import { useState } from 'react';
import Explore from '../components/gallery/explore';
import Profiles from '../components/gallery/profiles';
import Shop from '../components/gallery/shop';

export const tabsData = [
  {
    label: 'Explore',
    content:<Explore/>
  },
  {
    label: 'Shop',
    content:<Shop/>
  },
  {
    label: 'Profiles',
    content:<Profiles/>
  },
];
export default tabsData;

