import classNames from 'classnames';
import withStyles from '@mui/styles/withStyles';
import MuiChip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const styles = (theme) => ({
  chip: {
    margin: theme.spacing.unit / 2,
    color: 'white',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    fontWeight: 'bold',
    border: '2px solid white',
  },
  gene: {
    backgroundColor: theme.palette.gene,
  },
  tagVariant: {
    backgroundColor: theme.palette.tagVariant,
  },
  indexVariant: {
    backgroundColor: theme.palette.indexVariant,
  },
  study: {
    backgroundColor: theme.palette.study,
  },
});

const AVATAR_MAP = {
  gene: 'G',
  variant: 'V',
  tagVariant: (
    <Typography color="inherit" style={{ textAlign: 'center' }}>
      <span style={{ fontWeight: 'bold' }}>
        V<sub style={{ fontSize: '0.65em' }}>T</sub>
      </span>
    </Typography>
  ),
  indexVariant: (
    <Typography color="inherit" style={{ textAlign: 'center' }}>
      <span style={{ fontWeight: 'bold' }}>
        V<sub style={{ fontSize: '0.65em' }}>L</sub>
      </span>
    </Typography>
  ),
  study: 'S',
};

const Chip = ({ classes, type, label, onDelete }) => (
  <MuiChip
    avatar={<Avatar className={classes.avatar}>{AVATAR_MAP[type]}</Avatar>}
    className={classNames(classes.chip, classes[type])}
    label={label}
    // onDelete={onDelete}
  />
);

export default withStyles(styles)(Chip);
