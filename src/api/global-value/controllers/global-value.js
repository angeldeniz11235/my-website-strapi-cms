'use strict';

/**
 * global-value controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global-value.global-value');
