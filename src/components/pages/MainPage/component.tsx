import React, { ChangeEvent, ReactElement, useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { userDataRequest } from 'store/actions';
import { selectUserData } from 'store/selectors';
import Header from 'components/blocks/Header';
import Card from 'components/blocks/Card';
import Select from 'components/controls/Select';
import FiltersPanel from './components/FiltersPanel';
import { selectFilterOptions, tagsFilter } from './options';
import { useClasses } from './styles';

const MainPage = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const [selectFilter, setSelectFilter] = useState('');
  const [activeTagFilter, setActiveTagFilter] = useState('all');
  const [isFiltersPanelActive, setIsFiltersPanelActive] = useState(false);

  const { data, isLoadingData } = useSelector(selectUserData);

  useEffect(() => {
    dispatch(userDataRequest());
  }, []);

  const handleChangeSelectFilter = useCallback(
    (event: ChangeEvent<{ value: unknown }>) => {
      setSelectFilter((event.target.value as string) || '');
    },
    [selectFilter],
  );

  const handleClickActiveTagFilter = useCallback(
    (value) => () => {
      setActiveTagFilter(value);
    },
    [activeTagFilter],
  );

  const handleClickActiveBtnFilter = useCallback(() => {
    setIsFiltersPanelActive(!isFiltersPanelActive);
  }, [isFiltersPanelActive]);

  return (
    <div className={classes.wrap}>
      <Header />
      <Grid container className={classes.container}>
        <Grid container className={classes.wrapFilters}>
          <Select
            options={selectFilterOptions}
            value={selectFilter}
            onChange={handleChangeSelectFilter}
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

          <Grid container className={classes.buttonGroup}>
            {tagsFilter.map(({ value, label }) => {
              return (
                <Button
                  key={value}
                  value={value}
                  onClick={handleClickActiveTagFilter(value)}
                  className={clsx(classes.btnTag, {
                    [classes.btnTagActive]: activeTagFilter === value,
                  })}
                >
                  {label}
                </Button>
              );
            })}
          </Grid>

          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={handleClickActiveBtnFilter}
            className={clsx(classes.btnFilter, {
              [classes.btnFilterActive]: isFiltersPanelActive,
            })}
          >
            Filters
          </Button>
        </Grid>
        {isFiltersPanelActive && <FiltersPanel />}

        <Grid container className={classes.wrapContent}>
          <div className={classes.wrap}>
            <Typography variant="h4" className={classes.titleContent}>
              You aren’t following anyone yet
            </Typography>
            <Typography variant="subtitle1">Find friends you already know from Twitter.</Typography>
          </div>

          <Grid container className={classes.wrapContent}>
            <Typography variant="subtitle1" className={classes.titleContent}>
              Check out some of today’s popular shots
            </Typography>
            <Grid container className={classes.cardsContainer}>
              {isLoadingData && <CircularProgress />}
              {data.map((user) => {
                return <Card key={user.id} {...user} />;
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainPage;
