'use strict';

const logger = require('../utils/logger');

const start = {
  index(request, response) {
    logger.info('start rendering');
    const viewData = {
      title: 'Welcome to Playlist 1',
    };
    response.render('start', viewData);
  },
};

module.exports = start;
