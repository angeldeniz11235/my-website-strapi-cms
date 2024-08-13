'use strict';

/**
 * home-summary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-summary.home-summary');
