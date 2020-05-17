import withStyles from '@livipdev/core/styles/withStyles';
import withWidth from '@livipdev/core/withWidth';

import styles from './styles';
import NewsletterBanner from './NewsletterBanner';

export default withWidth()(withStyles(styles)(NewsletterBanner));
