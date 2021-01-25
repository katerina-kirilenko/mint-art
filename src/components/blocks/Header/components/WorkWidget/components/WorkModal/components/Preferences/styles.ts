import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  accordionDetails: {
    padding: '8px 0 0',
    '&& $formGroup': {
      marginBottom: '16px',
    },
  },
  formGroup: {
    border: `1px solid ${palette.divider}`,
    borderRadius: '8px',
  },
  controlLabel: {
    fontSize: '1rem',
    fontWeight: 500,
    marginRight: '8px',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  salaryTitle: {
    marginTop: '6px',
    marginBottom: '16px',
  },
  requiredIndicator: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: palette.error.main,
    paddingLeft: '2px',
  },
  accordion: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
  },
  accordionSummary: {
    '&& div': {
      margin: 0,
      alignItems: 'center',
    },
  },
  accordionDetailsInner: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 0,
  },
  formControl: {
    display: 'block',
    width: '100%',
    '&:not(:last-child)': {
      marginBottom: '1rem',
    },
  },
  input: {
    margin: '10px 0',
  },
  radioGroup: {
    flexDirection: 'row',
    '& label': {
      marginRight: '2rem',
    },
  },
  popover: {
    '& li': {
      fontSize: '0.8rem',
    },
  },
}));
