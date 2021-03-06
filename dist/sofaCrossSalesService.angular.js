/**
 * sofa-cross-sales-service - v0.1.0 - Fri Mar 20 2015 17:35:25 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
/* global store */
angular.module('sofa.crossSalesService', [
    'sofa.core',
    store.enabled ? 'sofa.storages.localStorageService' : 'sofa.storages.memoryStorageService'
])

.factory('crossSalesService', ["configService", "$http", "storageService", function (configService, $http, storageService) {
    'use strict';
    return new sofa.CrossSalesService(configService, $http, storageService);
}]);
}(angular));
