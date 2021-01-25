import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import {
  AppBar,
  Avatar,
  CardMedia,
  Dialog,
  Grid,
  IconButton,
  Paper,
  Typography,
  Link,
  CircularProgress,
  Button,
  Container,
  Tooltip,
} from '@material-ui/core';
import { Close, Favorite } from '@material-ui/icons';
import PaletteIcon from './components/PaletteIcon';
import {
  closeShotModal,
  selectUserData,
  selectShotData,
  selectUserShots,
  userShotRequest,
} from 'store/userData';
import { User, Shot } from 'store/userData/types';
import Card from 'components/blocks/Card';
import PaletteColors from './components/PaletteColors';
import AvatarTooltip from './components/AvatarTooltip';
import ShotToolbar from './components/ShotToolbar';
import ShotSidebar from './components/ShotSidebar';
import ShotShareModal from './components/ShotShareModal';
import { ShotModalTypes } from './types';
import { useClasses } from './styles';

const ShotModal = ({ isOpen }: ShotModalTypes): ReactElement => {
  const classes = useClasses();
  const dispatch = useDispatch();

  const mediaCard = useRef<HTMLImageElement>(null);

  const [cardOffsetTop, setOffsetCardTop] = useState<number | null>(null);
  const [isLikedShot, setLikedShot] = useState(false);
  const [isOpenShareModal, setOpenShareModal] = useState(false);
  const [isVisibleOpenSidebar, setVisibleOpenSidebar] = useState(false);

  const { user } = useSelector(selectUserData);
  const { shotsByPage } = useSelector(selectUserShots);
  const { shot } = useSelector(selectShotData);

  const { avatar, name } = user || ({} as User);
  const { title, images, description, url } = shot || ({} as Shot);

  useEffect(() => {
    dispatch(userShotRequest());
  }, []);

  const handleCloseShotModal = useCallback(() => {
    dispatch(closeShotModal());
  }, []);

  const renderShots = useCallback(() => {
    return shotsByPage
      .filter((shot, idx) => idx < 4)
      .map((shot) => {
        const props = { user, shot };
        return <Card key={shot.shotId} {...props} styles={classes.cardContainer} />;
      });
  }, [shotsByPage]);

  const onScrollModal = useCallback(() => {
    if (mediaCard.current) {
      setOffsetCardTop(mediaCard.current.getBoundingClientRect().top);
    }
  }, [mediaCard]);

  const handleClickShareButton = useCallback(() => {
    setOpenShareModal(true);
  }, [isOpenShareModal]);

  const handleCloseShareModal = useCallback(() => {
    setOpenShareModal(false);
  }, [isOpenShareModal]);

  const handleClickFeedback = useCallback(() => {
    setVisibleOpenSidebar(true);
  }, [isVisibleOpenSidebar]);

  const handleClickLike = useCallback(() => {
    setLikedShot(!isLikedShot);
  }, [isLikedShot]);

  const handleCloseSidebar = useCallback(() => {
    setVisibleOpenSidebar(false);
  }, [isVisibleOpenSidebar]);

  return (
    <>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleCloseShotModal}
        classes={{
          root: classes.root,
          paper: classes.dialogContainer,
        }}
      >
        <AppBar className={classes.appBar} position="relative" elevation={0}>
          <IconButton color="inherit" onClick={handleCloseShotModal} aria-label="close">
            <Close />
          </IconButton>
        </AppBar>
        <Paper className={classes.content} onScroll={onScrollModal}>
          <Container
            classes={{
              root: clsx(classes.contentContainer, {
                [classes.contentShift]: isVisibleOpenSidebar,
              }),
            }}
          >
            <Grid container className={classes.shotHeader}>
              <Tooltip
                title={<AvatarTooltip />}
                placement="bottom-start"
                interactive
                arrow
                classes={{
                  tooltip: classes.widget,
                  arrow: classes.widgetArrow,
                  tooltipPlacementBottom: classes.widgetMargin,
                }}
              >
                <Avatar alt={name} src={avatar} className={classes.avatarHeader} />
              </Tooltip>
              <div>
                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
                <div>
                  <Typography className={classes.subtitle} variant="subtitle2" component="span">
                    {name}
                  </Typography>
                  <Typography className={classes.dividerDot} variant="subtitle2" component="span">
                    •
                  </Typography>
                  <Typography className={classes.subtitle} variant="subtitle2" component="span">
                    <Link href="/">Follow</Link>
                  </Typography>
                </div>
              </div>
              <Grid container className={classes.headerButtons}>
                <Button disableRipple>Save</Button>
                <Button
                  disableRipple
                  onClick={handleClickLike}
                  className={clsx({ [classes.likedButton]: isLikedShot })}
                >
                  <Favorite />
                  Like
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="column">
              {!shot && <CircularProgress classes={{ root: classes.progress }} />}
              <section className={classes.shotMedia}>
                <CardMedia
                  ref={mediaCard}
                  component="img"
                  alt={title}
                  image={images?.hidpi}
                  title={title}
                />
                <Grid className={classes.paletteContainer}>
                  <IconButton className={classes.paletteIcon}>
                    <PaletteIcon color="secondary" />
                  </IconButton>
                  <Grid container className={classes.palette}>
                    <PaletteColors />
                  </Grid>
                </Grid>
              </section>
              <Grid container className={classes.shotDescription}>
                {shot && parse(description)}
              </Grid>

              <Grid container className={classes.userDetails}>
                <Grid container className={classes.avatarContainer}>
                  <Typography component="span" className={classes.divider} />
                  <Avatar alt={name} src={avatar} className={classes.detailsAvatar} />
                  <Typography component="span" className={classes.divider} />
                </Grid>
                <Typography variant="h6" component="span">
                  {name}
                </Typography>
                <Typography variant="subtitle2" component="span" className={classes.avatarSubtitle}>
                  Welcome to my design portfolio on Dribbble
                </Typography>
              </Grid>

              <Grid container className={classes.userSection}>
                <Grid container direction="column">
                  <Typography className={classes.sectionTitle} variant="h6">
                    More by {name}
                  </Typography>
                  <Link className={classes.sectionLink}>View profile</Link>
                </Grid>
                <Grid container className={classes.cardsContainer}>
                  {renderShots()}
                </Grid>
              </Grid>
              <Typography component="span" className={classes.divider} />
              <Grid container className={classes.otherWorks}>
                <Typography className={classes.sectionTitle} variant="h6">
                  You might also like
                </Typography>
                <Grid container className={classes.cardsContainer}>
                  {renderShots()}
                </Grid>
              </Grid>
            </Grid>
          </Container>

          <ShotToolbar
            cardOffsetTop={cardOffsetTop}
            isLikedShot={isLikedShot}
            isVisibleOpenSidebar={isVisibleOpenSidebar}
            handleClickFeedback={handleClickFeedback}
            handleClickShareButton={handleClickShareButton}
            handleClickLike={handleClickLike}
          />

          <ShotSidebar
            isLikedShot={isLikedShot}
            isVisibleOpenSidebar={isVisibleOpenSidebar}
            handleClickShareButton={handleClickShareButton}
            handleCloseSidebar={handleCloseSidebar}
            handleClickLike={handleClickLike}
          />
        </Paper>
      </Dialog>

      <ShotShareModal
        isOpenShareModal={isOpenShareModal}
        handleCloseShareModal={handleCloseShareModal}
        media={images?.hidpi}
        urlShot={url}
      />
    </>
  );
};

export default ShotModal;
