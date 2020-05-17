import withStyles from '@livip/core/styles/withStyles';
import withWidth from '@livip/core/withWidth';

import styles from './styles';
import NewsletterBanner from './NewsletterBanner';

export default withWidth()(withStyles(styles)(NewsletterBanner));
