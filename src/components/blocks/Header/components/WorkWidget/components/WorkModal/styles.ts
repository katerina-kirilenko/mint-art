import { makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles((theme: Theme) => ({
  dialog: {
    margin: '1rem',
    padding: '40px 40px 0',
    borderRadius: '12px',
  },
  modalHeader: {
    marginBottom: '20px',
  },
  modalContent: {
    '&& div': {
      marginBottom: 0,
    },
  },
  modalFooter: {
    borderTop: `1px solid #e7e7e9`,
    padding: '16px',
    margin: '40px -40px 0',
  },
  dialogContent: {
    padding: 0,
  },
  contentText: {
    fontSize: '1.05rem',
  },
  dialogActions: {
    padding: 0,
    justifyContent: 'space-between',
  },
  title: {
    padding: 0,
    marginBottom: '12px',
    '& h2': {
      fontSize: '2rem',
      fontWeight: 700,
    },
  },
  btnClose: {
    backgroundColor: theme.palette.grey[200],
    padding: '6px 14px',
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    },
  },
  accordion: {
    boxShadow: 'none',
    '&::before': {
      height: 0,
    },
  },
  accordionSummary: {
    padding: 0,
  },
  accordionSummaryContent: {
    alignItems: 'center',
    '&:hover $accordionTitle': {
      color: theme.palette.secondary.dark,
    },
  },
  accordionStep: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#000',
    width: '24px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f3f3f4',
    borderRadius: '50%',
    marginRight: '12px',
  },
  accordionTitle: {
    color: theme.palette.secondary.light,
    fontWeight: 700,
  },
  requiredIndicator: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: theme.palette.error.main,
    paddingLeft: '2px',
  },
}));
