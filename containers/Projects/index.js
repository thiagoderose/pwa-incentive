import React from 'react';

import Layout from '../Layout';
import ProjectListWithTitle from '../../components/ProjectListWithTitle';

import response from './mockedAPI';

const Projects = () => (
  <Layout topGutter={150}>
    <ProjectListWithTitle projects={response} columns={2} />
  </Layout>
);

export default Projects;
