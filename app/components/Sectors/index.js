import React from 'react';
import PropTypes from 'prop-types';

import Container from '@livipdev/core/Container';
import Tab from '@livipdev/core/Tab';
import Tabs from '@livipdev/core/Tabs';
import TabPanel from '@livipdev/core/TabPanel';

import SectorsContent from '../SectorsContent';
import { a11yProps } from './builders';

const Sectors = ({ sectors }) => {
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
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          // variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          centered
        >
          {tabs}
        </Tabs>
      </Container>
      {panes}
    </>
  );
};

Sectors.propTypes = {
  sectors: PropTypes.array,
};

export default Sectors;
