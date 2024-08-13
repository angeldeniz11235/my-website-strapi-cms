'use strict';

/**
 * global-value router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-value.global-value');
