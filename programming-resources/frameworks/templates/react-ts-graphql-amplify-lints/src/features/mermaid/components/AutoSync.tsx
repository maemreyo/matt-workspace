import { FormControlLabel, Switch } from '@mui/material';
import {
  mermaidEditorSelector,
  toggleAutoSync,
} from '../../../redux/features/mermaid/mermaidSlice';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {}

const AutoSync: FC<IProps> = (_) => {
  const dispatch = useDispatch();
  const mermaidSelector = useSelector(mermaidEditorSelector);
  const handleSwitch = () => dispatch(toggleAutoSync());
  return (
    <div className="auto-sync">
      <FormControlLabel
        value="start"
        control={
          <Switch
            color="warning"
            size="small"
            onChange={handleSwitch}
            checked={mermaidSelector.autoSync}
          />
        }
        label="Auto sync"
        labelPlacement="start"
      />
    </div>
  );
};

export default AutoSync;
