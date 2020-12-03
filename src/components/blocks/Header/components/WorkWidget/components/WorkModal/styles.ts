import { fade, makeStyles, Theme } from '@material-ui/core/styles';

export const useClasses = makeStyles(({ palette }: Theme) => ({
  dialog: {
    margin: '1rem',
    padding: '40px 40px 0',
    borderRadius: '12px',
  },
  modalHeader: {
    marginBottom: '20px',
  },
  modalFooter: {
    borderTop: `1px solid ${palette.divider}`,
    padding: '16px',
    margin: '10px -40px 0',
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
    backgroundColor: fade(palette.text.primary, 0.15),
    padding: '6px 14px',
    '&:hover': {
      backgroundColor: fade(palette.text.primary, 0.1),
    },
  },
  accordion: {
    boxShadow: 'none',
    '&::before': {
      height: 0,
    },
  },
  accordionExpanded: {
    margin: '0 !important',
    paddingBottom: '20px',
  },
  accordionSummary: {
    padding: 0,
  },
  expandMore: {
    fill: palette.text.secondary,
  },
  accordionSummaryContent: {
    alignItems: 'center',
    '&:hover $accordionTitle': {
      color: palette.text.primary,
    },
  },
  accordionStep: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: palette.text.secondary,
    width: '24px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: fade(palette.text.primary, 0.1),
    borderRadius: '50%',
    marginRight: '12px',
  },
  accordionTitle: {
    color: palette.text.secondary,
    fontWeight: 700,
  },
  requiredIndicator: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: palette.error.main,
    paddingLeft: '2px',
  },
}));
