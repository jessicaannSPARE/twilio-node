'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var AuthTypeCallsList = require(
    './authTypes/authCallsMapping').AuthTypeCallsList;
var AuthTypeRegistrationsList = require(
    './authTypes/authRegistrationsMapping').AuthTypeRegistrationsList;

var AuthTypesList;

/* jshint ignore:start */
/**
 * @description Initialize the AuthTypesList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          The unique id of the account responsible for this domain
 * @param {string} domainSid - A string that uniquely identifies the SIP Domain
 */
/* jshint ignore:end */
AuthTypesList = function AuthTypesList(version, accountSid, domainSid) {
  /* jshint ignore:start */
  /**
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext}
   */
  /* jshint ignore:end */
  function AuthTypesListInstance(sid) {
    return AuthTypesListInstance.get(sid);
  }

  AuthTypesListInstance._version = version;
  // Path Solution
  AuthTypesListInstance._solution = {accountSid: accountSid, domainSid: domainSid};

  // Components
  AuthTypesListInstance._calls = undefined;
  AuthTypesListInstance._registrations = undefined;

  Object.defineProperty(AuthTypesListInstance,
    'calls', {
    get: function calls() {
      if (!this._calls) {
        this._calls = new AuthTypeCallsList(
          this._version,
          this._solution.accountSid,
          this._solution.domainSid
        );
      }

      return this._calls;
    }
  });

  Object.defineProperty(AuthTypesListInstance,
    'registrations', {
    get: function registrations() {
      if (!this._registrations) {
        this._registrations = new AuthTypeRegistrationsList(
          this._version,
          this._solution.accountSid,
          this._solution.domainSid
        );
      }

      return this._registrations;
    }
  });

  return AuthTypesListInstance;
};

module.exports = {
  AuthTypesList: AuthTypesList
};
