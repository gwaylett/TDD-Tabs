// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.
/* globals jake:false, desc:false, task:false, complete:false, fail:false */

(function () {
	"use strict";

	var semver = require("semver");
	var jshint = require("simplebuild-jshint");
	var karma = require("simplebuild-karma");
	var shell = require("shell");
	var karmaConfig = "karma.conf.js";
	var distDir = "generated/dist";

	//**** General-purpose tasks
	desc("Start the Karama server (run this first)");
	task("karma", function () {
		console.log("Starting Karma server: ");
		karma.start({
			configFile: karmaConfig
		}, complete, fail);
	}, { async: true });
	desc("Default build");
	task("default", ["version", "lint", "test"], function () {
		console.log("\n\nBUILD OK");
	});

	desc("Run a localhost server");
	task("run", ["build"], function () {
		jake.exec("node node_modules/http-server/bin/http-server " + distDir, { interactive: true }, complete);
		console.log("Running http server!!");
	});

	desc("Erase all generated fukes");
	task("clean", function(){
		console.log("Erasing generated files: .");
		shell.rm("-rf", "generated");
	});


	//**** Supporting tasks

	desc("Check Node version");
	task("version", function () {
		console.log("Checking Node version: .");

		var packageJson = require("./package.json");
		var expectedVersion = packageJson.engines.node;

		var actualVersion = process.version;
		if (semver.neq(expectedVersion, actualVersion)) {
			fail("Incorrect Node version: expected " + expectedVersion + ", but was " + actualVersion);
		}
	});

	desc("Lint JavaScript code");
	task("lint", function () {
		process.stdout.write("Linting JavaScript: ");

		jshint.checkFiles({
			files: ["Jakefile.js", "src/**/*.js"],
			options: lintOptions(),
			globals: lintGlobals(),
		}, complete, fail);
	}, { async: true });

	desc("Run tests");
	task("test", function () {
		console.log("Testing JS: ");
		karma.run({
			configFile: karmaConfig,
			expectedBrowsers: [
				"Chrome 78.0.3904 (Windows 10.0.0)",
				"IE 11.0.0 (Windows 10.0.0)"
			],
			strict: !process.env.loose
		}, complete, fail);
	}, { async: true });

	desc("Build distribution directory:");
	task("build", [distDir], function(){
		console.log("Building distribution directory");
	});

	directory(distDir);

	function lintOptions() {
		return {
			bitwise: true,
			eqeqeq: true,
			forin: true,
			freeze: true,
			futurehostile: true,
			latedef: "nofunc",
			noarg: true,
			nocomma: true,
			nonbsp: true,
			nonew: true,
			strict: true,
			undef: true,

			node: true,
			browser: true
		};
	}

	function lintGlobals() {
		return {
			//Mocha globals
			describe: false,
			it: false,
			before: false,
			after: false,
			beforeEach: false,
			afterEach: false
		};
	}


}());