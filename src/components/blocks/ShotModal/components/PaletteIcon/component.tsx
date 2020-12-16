import React, { ReactElement } from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const PaletteIcon = (props: SvgIconProps): ReactElement => {
  return (
    <SvgIcon {...props}>
      <path d="M22 11C22 17.05 17.05 22 11 22C4.95 22 0 17.05 0 11C0 4.95 4.95 0 11 0C17.05 0 22 4.95 22 11ZM11 19C15.411 19 19 15.411 19 11C19 6.589 15.411 3 11 3V19Z" />
    </SvgIcon>
  );
};

export default PaletteIcon;
