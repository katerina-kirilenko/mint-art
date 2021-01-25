import React, { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { FormControl, Grid, InputAdornment, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Select from 'components/controls/Select';
import InputText from 'components/controls/InputText';
import { selectFilterDownloadsOptions, selectFilterMadeOptions } from './options';
import { useClasses } from './styles';

const FiltersPanel = (): ReactElement => {
  const classes = useClasses();

  const [selectFilterMade, setSelectFilterMade] = useState('');
  const [selectFilterDownloads, setSelectFilterDownloads] = useState('');

  const handleChangeSelectFilterMade = useCallback((event: ChangeEvent<{ value: unknown }>) => {
    setSelectFilterMade((event.target.value as string) || '');
  }, []);

  const handleChangeSelectFilterDownloads = useCallback(
    (event: ChangeEvent<{ value: unknown }>) => {
      setSelectFilterDownloads((event.target.value as string) || '');
    },
    [],
  );

  return (
    <Grid container className={classes.filtersPanel}>
      <FormControl component="fieldset">
        <Typography component="span" className={classes.controlLabel}>
          Tags
        </Typography>
        <InputText
          icon={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          className={classes.input}
        />
      </FormControl>

      <FormControl component="fieldset">
        <Typography component="span" className={classes.controlLabel}>
          Color
        </Typography>
        <InputText
          placeholder="Enter hex or select"
          icon={<InputAdornment position="start">#</InputAdornment>}
          className={classes.input}
        />
      </FormControl>

      <FormControl component="fieldset">
        <Typography component="span" className={classes.controlLabel}>
          Made With
        </Typography>
        <Select
          options={selectFilterDownloadsOptions}
          value={selectFilterMade}
          onChange={handleChangeSelectFilterMade}
          className={classes.selectFilter}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
            PopoverClasses: {
              root: classes.popover,
            },
          }}
        />
      </FormControl>

      <FormControl component="fieldset">
        <Typography component="span" className={classes.controlLabel}>
          Downloads
        </Typography>
        <Select
          options={selectFilterMadeOptions}
          value={selectFilterDownloads}
          onChange={handleChangeSelectFilterDownloads}
          className={classes.selectFilter}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left',
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left',
            },
            getContentAnchorEl: null,
            PopoverClasses: {
              root: classes.popover,
            },
          }}
        />
      </FormControl>
    </Grid>
  );
};

export default FiltersPanel;
