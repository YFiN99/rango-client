import type { SvgIconPropsWithChildren } from '../components/SvgIcon';

import React, { createElement } from 'react';

import { SvgIcon } from '../components/SvgIcon';

function SvgFont(props: SvgIconPropsWithChildren) {
  return createElement(
    SvgIcon,
    props,
    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.2235 5.409C16.7886 5.409 16.4469 5.06861 16.4469 4.63539V2.73234C16.4469 2.37648 16.2295 2.09798 16.0276 2.09798H1.97239C1.77049 2.09798 1.55306 2.36101 1.55306 2.73234V4.63539C1.55306 5.06861 1.21139 5.409 0.776532 5.409C0.341674 5.409 0 5.06861 0 4.63539V2.73234C0 1.52552 0.885246 0.550781 1.97239 0.550781H16.0276C17.1148 0.550781 18 1.52552 18 2.73234V4.63539C18 5.05314 17.6428 5.409 17.2235 5.409Z"
        fill="#727272"
      />
      <path
        d="M8.99212 17.2606C8.55726 17.2606 8.21559 16.9202 8.21559 16.487V1.32438C8.21559 0.891166 8.55726 0.550781 8.99212 0.550781C9.42698 0.550781 9.76865 0.891166 9.76865 1.32438V16.487C9.76865 16.9047 9.42698 17.2606 8.99212 17.2606Z"
        fill="#727272"
      />
      <path
        d="M11.6953 17.4462H6.2906C5.85575 17.4462 5.51407 17.1058 5.51407 16.6726C5.51407 16.2393 5.85575 15.899 6.2906 15.899H11.6953C12.1301 15.899 12.4718 16.2393 12.4718 16.6726C12.4718 17.1058 12.1301 17.4462 11.6953 17.4462Z"
        fill="#727272"
      />
    </svg>
  );
}
export default SvgFont;