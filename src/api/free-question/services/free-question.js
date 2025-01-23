'use strict';

/**
 * free-question service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-question.free-question');
