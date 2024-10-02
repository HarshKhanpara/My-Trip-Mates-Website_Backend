'use strict';

/**
 * bali service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bali.bali');
