import React, {
  ChangeEvent,
  KeyboardEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CircularProgress, Collapse, Grid, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { FilterList } from '@material-ui/icons';
import {
  selectUserData,
  selectUserShots,
  userDataRequest,
  userShotsRequest,
  selectShotModal,
} from 'store/userData';
import { TOTAL_SHOT_COUNT } from 'constants/api';
import { getSettings, setShowBy, setCurrentPage } from 'store/settings';
import Header from 'components/blocks/Header';
import Card from 'components/blocks/Card';
import ShotModal from 'components/blocks/ShotModal';
import Pagination from 'components/blocks/Pagination';
import Select from 'components/controls/Select';
import InputText from 'components/controls/InputText';
import FiltersPanel from './components/FiltersPanel';
import { selectFilterOptions, tagsFilter } from './options';
import { useClasses } from './styles';

interface dataType {
  selected: number;
}

const MainPage = (): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const { shotsByPage, isLoadingShots, errorShots } = useSelector(selectUserShots);
  const { user } = useSelector(selectUserData);
  const { isOpen } = useSelector(selectShotModal);
  const { currentPage, showBy } = useSelector(getSettings);

  const [showByInput, setShowByInput] = useState(showBy);
  const [selectFilter, setSelectFilter] = useState('');
  const [activeTagFilter, setActiveTagFilter] = useState('all');
  const [isFiltersPanelActive, setIsFiltersPanelActive] = useState(false);

  const hasUserShots = !(isLoadingShots || errorShots);

  const pagesCount = Math.ceil(TOTAL_SHOT_COUNT / +showBy);

  useEffect(() => {
    dispatch(userShotsRequest());
    dispatch(userDataRequest());
  }, [showBy, currentPage]);

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

  const handlerInputShowBy = useCallback(
    (event) => {
      setShowByInput(event.target.value);
    },
    [showByInput],
  );

  const handlerButtonShowBy = useCallback(() => {
    if (showByInput) {
      dispatch(setShowBy(showByInput));
    }
  }, [showByInput]);

  const handleClickPage = useCallback(
    (data: dataType): void => {
      dispatch(setCurrentPage(data.selected));
    },
    [currentPage],
  );

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && showByInput) {
      dispatch(setShowBy(showByInput));
    }
  };

  return (
    <>
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

          <Collapse in={isFiltersPanelActive} classes={{ container: classes.collapseContainer }}>
            <FiltersPanel />
          </Collapse>

          <Grid container className={classes.wrapContent}>
            <div className={classes.wrap}>
              <Typography variant="h4" className={classes.titleContent}>
                You aren’t following anyone yet
              </Typography>
              <Typography variant="subtitle1">
                Find friends you already know from Twitter.
              </Typography>
            </div>

            <Grid className={classes.wrapContent}>
              <Grid container>
                <Typography variant="subtitle1" className={classes.titleContent}>
                  Check out some of today’s popular shots
                </Typography>
                <Grid container className={classes.showByContainer}>
                  <Typography variant="subtitle1" className={classes.titleContent}>
                    Show by
                  </Typography>
                  <InputText
                    className={classes.inputShowBy}
                    value={showByInput}
                    onChange={handlerInputShowBy}
                    onKeyUp={handleKeyUp}
                  />
                  <Button variant="outlined" onClick={handlerButtonShowBy}>
                    Ok
                  </Button>
                </Grid>
              </Grid>

              <Grid className={classes.cardsContainer}>
                {errorShots && <Alert severity="error">{errorShots}</Alert>}
                {isLoadingShots && <CircularProgress />}
                {hasUserShots &&
                  shotsByPage.map((shot) => {
                    const props = { user, shot };

                    return (
                      <Card
                        key={shot.shotId}
                        {...props}
                        styles={classes.cardContainer}
                        isFooterExist
                      />
                    );
                  })}
              </Grid>

              <Pagination
                pageCount={pagesCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handleClickPage}
                initialPage={currentPage}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
      {isOpen && <ShotModal isOpen={isOpen} />}
    </>
  );
};

export default MainPage;
