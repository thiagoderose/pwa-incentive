import React from 'react';
import PropTypes from 'prop-types';

import Box from '@livipdev/core/Box';
import Tab from '@livipdev/core/Tab';
import Tabs from '@livipdev/core/Tabs';
import TabPanel from '@livipdev/core/TabPanel';

import SectorsContent from '../SectorsContent';
import { a11yProps } from './builders';

import withStyles from '@livipdev/core/styles/withStyles';
import styles from './styles';

const Sectors = ({ sectors, classes }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = sectors.map((sector, index) => (
    <Tab label={sector.name} {...a11yProps(index)} />
  ));

  const panes = sectors.map((sector, index) => (
    <TabPanel value={value} index={index}>
      {value === index && <SectorsContent {...sector} />}
    </TabPanel>
  ));

  return (
    <>
      <Box py={1} className={classes.tabsBox}>
        <Tabs
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          indicatorColor="primary"
          textColor="primary"
          // variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          {tabs}
        </Tabs>
      </Box>
      {panes}
    </>
  );
};

Sectors.propTypes = {
  sectors: PropTypes.array,
  classes: PropTypes.object,
};

export default withStyles(styles)(Sectors);
