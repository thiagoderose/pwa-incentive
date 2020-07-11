import React from 'react';

import GridList from '@livipdev/core/GridList';
import GridListTile from '@livipdev/core/GridListTile';
import {
  useTheme,
  useWidth,
} from '@livipdev/core/styles';

import ProjectCard from '../ProjectCard';
import {
  selectColsBasedOnViewport,
  selectSpaceBasedOnViewport,
} from './selectors';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const ProjectList = ({
  classes,
  projects,
  columns,
  cellHeight,
  spacingType,
  customClass,
}) => {
  const theme = useTheme();
  const viewport = useWidth();
  const spacing = selectSpaceBasedOnViewport(theme, viewport);
  const cols = selectColsBasedOnViewport(columns, viewport);
  const mergedClasses = {
    ...classes,
    root: [
      classes.root,
      customClass,
    ].join(' '),
  };

  return (
    <GridList
      classes={mergedClasses}
      cols={cols}
      cellHeight={cellHeight}
      spacing={spacing}
    >
      {
        projects.map((project) => (
          <GridListTile key={project.id} className={mergedClasses.tile}>
            <ProjectCard {...project} />
          </GridListTile>
        ))
      }
    </GridList>
  );
};

ProjectList.propTypes = propTypes;
ProjectList.defaultProps = defaultProps;

export default ProjectList;
