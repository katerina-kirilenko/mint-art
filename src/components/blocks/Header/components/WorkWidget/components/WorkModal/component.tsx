import React, { ReactElement, useState, useCallback, ChangeEvent } from 'react';
import {
  Accordion,
  AccordionSummary,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Preferences from './components/Preferences';
import Specialties from './components/Specialties';
import WorkHistory from './components/WorkHistory';
import { WorkModalProps } from './types';
import { useClasses } from './styles';

const accordionItems = [
  {
    id: 1,
    name: 'preferences',
    label: 'What are your work preferences?',
    component: <Preferences />,
    required: true,
    next: 'specialties',
  },
  {
    id: 2,
    name: 'specialties',
    label: 'Select up to 3 specialties',
    component: <Specialties />,
    required: true,
    next: 'workHistory',
  },
  {
    id: 3,
    name: 'workHistory',
    label: 'Add your work history, education, and skills (Optional)',
    component: <WorkHistory />,
    required: false,
    next: '',
  },
];

const WorkModal = ({ isOpen, close }: WorkModalProps): ReactElement => {
  const classes = useClasses();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeAccordion = useCallback(
    (panel: string) => (event: ChangeEvent<Record<string, unknown>>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    [expanded],
  );

  const handleClickNext = useCallback(
    (panel: string) => () => {
      setExpanded(panel || false);
    },
    [expanded],
  );

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      aria-labelledby="work-dialog-title"
      disableBackdropClick
      classes={{
        paper: classes.dialog,
      }}
    >
      <div className={classes.modalHeader}>
        <DialogTitle id="work-dialog-title" className={classes.title}>
          Edit work availability
        </DialogTitle>
        <DialogContent
          classes={{
            root: classes.dialogContent,
          }}
        >
          <DialogContentText color="secondary" className={classes.contentText}>
            In order to make you available and match you with the right opportunities we need some
            additional information first.
          </DialogContentText>
        </DialogContent>
      </div>

      <div>
        {accordionItems.map(({ id, name, label, component, required, next }) => {
          return (
            <Accordion
              key={id}
              expanded={expanded === name}
              onChange={handleChangeAccordion(name)}
              classes={{
                root: classes.accordion,
                expanded: classes.accordionExpanded,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`${name}-content`}
                id={`${name}-header`}
                classes={{
                  root: classes.accordionSummary,
                  content: classes.accordionSummaryContent,
                }}
              >
                <Typography component="span" className={classes.accordionStep}>
                  {id}
                </Typography>
                <Typography className={classes.accordionTitle}>{label}</Typography>
                {required && (
                  <Typography component="span" className={classes.requiredIndicator}>
                    *
                  </Typography>
                )}
              </AccordionSummary>
              {component}
              <Button variant="contained" disableElevation onClick={handleClickNext(next)}>
                Next
              </Button>
            </Accordion>
          );
        })}
      </div>

      <div className={classes.modalFooter}>
        <DialogActions
          classes={{
            root: classes.dialogActions,
          }}
        >
          <Button onClick={close} color="secondary" className={classes.btnClose}>
            Cancel
          </Button>
          <Button onClick={close} color="primary" variant="contained" disableElevation>
            Save & Exit
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default WorkModal;
