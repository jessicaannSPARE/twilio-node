'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var WorkersStatisticsList;
var WorkersStatisticsPage;
var WorkersStatisticsInstance;
var WorkersStatisticsContext;

/* jshint ignore:start */
/**
 * @description Initialize the WorkersStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid -
 *          The ID of the Workflow this worker is associated with
 */
/* jshint ignore:end */
WorkersStatisticsList = function WorkersStatisticsList(version, workspaceSid) {
  /* jshint ignore:start */
  /**
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext}
   */
  /* jshint ignore:end */
  function WorkersStatisticsListInstance(sid) {
    return WorkersStatisticsListInstance.get(sid);
  }

  WorkersStatisticsListInstance._version = version;
  // Path Solution
  WorkersStatisticsListInstance._solution = {workspaceSid: workspaceSid};
  /* jshint ignore:start */
  /**
   * Constructs a workers_statistics
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.WorkerContext.WorkersStatisticsContext}
   */
  /* jshint ignore:end */
  WorkersStatisticsListInstance.get = function get() {
    return new WorkersStatisticsContext(this._version, this._solution.workspaceSid);
  };

  return WorkersStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the WorkersStatisticsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {WorkersStatisticsSolution} solution - Path solution
 *
 * @returns WorkersStatisticsPage
 */
/* jshint ignore:end */
WorkersStatisticsPage = function WorkersStatisticsPage(version, response,
                                                        solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(WorkersStatisticsPage.prototype, Page.prototype);
WorkersStatisticsPage.prototype.constructor = WorkersStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of WorkersStatisticsInstance
 *
 * @param {WorkersStatisticsPayload} payload - Payload response from the API
 *
 * @returns WorkersStatisticsInstance
 */
/* jshint ignore:end */
WorkersStatisticsPage.prototype.getInstance = function getInstance(payload) {
  return new WorkersStatisticsInstance(this._version, payload, this._solution.workspaceSid);
};


/* jshint ignore:start */
/**
 * Initialize the WorkersStatisticsContext
 *
 * @property {string} realtime - The realtime
 * @property {string} cumulative - The cumulative
 * @property {string} accountSid - The account_sid
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {V1} version - Version of the resource
 * @param {WorkersStatisticsPayload} payload - The instance payload
 * @param {sid} workspaceSid -
 *          The ID of the Workflow this worker is associated with
 */
/* jshint ignore:end */
WorkersStatisticsInstance = function WorkersStatisticsInstance(version, payload,
    workspaceSid) {
  this._version = version;

  // Marshaled Properties
  this.realtime = payload.realtime; // jshint ignore:line
  this.cumulative = payload.cumulative; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, };
};

Object.defineProperty(WorkersStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new WorkersStatisticsContext(this._version, this._solution.workspaceSid);
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a WorkersStatisticsInstance
 *
 * @param {object} [opts] - Options for request
 * @param {number} [opts.minutes] -
 *          Filter cumulative statistics by up to 'x' minutes in the past.
 * @param {Date} [opts.startDate] - Filter cumulative statistics by a start date.
 * @param {Date} [opts.endDate] - Filter cumulative statistics by a end date.
 * @param {string} [opts.taskQueueSid] -
 *          Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @param {string} [opts.taskQueueName] -
 *          Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.taskChannel] -
 *          Filter cumulative statistics by TaskChannel.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersStatisticsInstance
 */
/* jshint ignore:end */
WorkersStatisticsInstance.prototype.fetch = function fetch(opts, callback) {
  return this._proxy.fetch(opts, callback);
};

/* jshint ignore:start */
/**
 * Produce a plain JSON object version of the WorkersStatisticsInstance for serialization.
 * Removes any circular references in the object.
 *
 * @returns Object
 */
/* jshint ignore:end */
WorkersStatisticsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};


/* jshint ignore:start */
/**
 * Initialize the WorkersStatisticsContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 */
/* jshint ignore:end */
WorkersStatisticsContext = function WorkersStatisticsContext(version,
    workspaceSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/Workers/Statistics' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a WorkersStatisticsInstance
 *
 * @param {object} [opts] - Options for request
 * @param {number} [opts.minutes] -
 *          Filter cumulative statistics by up to 'x' minutes in the past.
 * @param {Date} [opts.startDate] - Filter cumulative statistics by a start date.
 * @param {Date} [opts.endDate] - Filter cumulative statistics by a end date.
 * @param {string} [opts.taskQueueSid] -
 *          Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @param {string} [opts.taskQueueName] -
 *          Filter the real-time and cumulative statistics based on Workers tied to a particular queue
 * @param {string} [opts.friendlyName] - The friendly_name
 * @param {string} [opts.taskChannel] -
 *          Filter cumulative statistics by TaskChannel.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed WorkersStatisticsInstance
 */
/* jshint ignore:end */
WorkersStatisticsContext.prototype.fetch = function fetch(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Minutes': _.get(opts, 'minutes'),
    'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
    'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
    'TaskQueueSid': _.get(opts, 'taskQueueSid'),
    'TaskQueueName': _.get(opts, 'taskQueueName'),
    'FriendlyName': _.get(opts, 'friendlyName'),
    'TaskChannel': _.get(opts, 'taskChannel')
  });

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new WorkersStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  WorkersStatisticsList: WorkersStatisticsList,
  WorkersStatisticsPage: WorkersStatisticsPage,
  WorkersStatisticsInstance: WorkersStatisticsInstance,
  WorkersStatisticsContext: WorkersStatisticsContext
};
