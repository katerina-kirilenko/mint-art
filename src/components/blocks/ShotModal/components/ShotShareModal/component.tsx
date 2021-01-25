import React, { ReactElement, SyntheticEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Button,
  Dialog,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  OutlinedInput,
  Slide,
  Snackbar,
  SnackbarContent,
  Typography,
} from '@material-ui/core';
import { CheckCircleRounded, Close, Pinterest, Twitter } from '@material-ui/icons';
import { ShareModalProps } from './types';
import { useClasses } from './styles';

const ShotShareModal = ({
  isOpenShareModal,
  handleCloseShareModal,
  media,
  urlShot,
}: ShareModalProps): ReactElement => {
  const classes = useClasses();

  const textInput = useRef<HTMLInputElement>(null);

  const [isOpenSnackbar, setOpenSnackbar] = useState(false);

  const handleSelectInput = () => {
    if (textInput.current) {
      textInput.current.select();
      document.execCommand('copy');
    }
  };

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
    handleSelectInput();
  };

  const handleCloseSnackbar = (event: SyntheticEvent | MouseEvent, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <>
      <Dialog
        open={isOpenShareModal}
        onClose={handleCloseShareModal}
        fullWidth={true}
        className={classes.shareModal}
        classes={{
          paper: classes.container,
        }}
      >
        <Grid className={classes.header}>
          <div className={classes.imageWrapper}>
            <img src={media} alt="Shot image" />
          </div>
        </Grid>

        <Grid container className={classes.content}>
          <Typography variant="h4" className={classes.title}>
            Share this with your social Community
          </Typography>
          <Grid container className={classes.socialIcons}>
            <IconButton
              disableRipple
              className={clsx(classes.socialIcon, classes.pinterest)}
              aria-label="pinterest"
              title="Share on Pinterest"
            >
              <Pinterest />
            </IconButton>
            <IconButton
              disableRipple
              className={clsx(classes.socialIcon, classes.twitter)}
              aria-label="twitter"
              title="Share on Twitter"
            >
              <Twitter />
            </IconButton>
          </Grid>

          <div className={classes.inputContainer}>
            <InputLabel htmlFor="url-shot" className={classes.inputLabel}>
              or copy link
            </InputLabel>
            <FormControl variant="outlined">
              <OutlinedInput
                id="url-shot"
                readOnly={true}
                value={urlShot}
                inputRef={textInput}
                onClick={handleSelectInput}
                classes={{
                  root: classes.textField,
                  input: classes.input,
                }}
              />
              <Button onClick={handleOpenSnackbar} disableRipple className={classes.inputButton}>
                Copy
              </Button>
            </FormControl>
          </div>
        </Grid>
      </Dialog>

      {isOpenSnackbar && (
        <Slide direction="up" in={isOpenSnackbar} timeout={500}>
          <Snackbar
            open={isOpenSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            classes={{
              root: classes.snackBarRoot,
              anchorOriginBottomCenter: classes.anchorSnackBar,
            }}
          >
            <SnackbarContent
              message={
                <>
                  <CheckCircleRounded color="primary" />
                  <div className={classes.snackBarText}>
                    <Typography variant="h6">Link Copied</Typography>
                    <Typography variant="subtitle2" component="p">
                      A link to this page has been copied to your clipboard!
                    </Typography>
                  </div>
                </>
              }
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleCloseSnackbar}
                >
                  <Close fontSize="small" />
                </IconButton>
              }
              classes={{
                root: classes.snackBarContent,
                message: classes.snackBarMessage,
                action: classes.snackBarAction,
              }}
            />
          </Snackbar>
        </Slide>
      )}
    </>
  );
};

export default ShotShareModal;
