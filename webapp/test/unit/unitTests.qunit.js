/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"alamo/proyecto_ejemplo/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
