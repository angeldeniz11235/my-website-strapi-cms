'use strict';

/**
 * global-value service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-value.global-value');
