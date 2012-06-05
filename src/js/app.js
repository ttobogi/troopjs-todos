require({
	"paths" : {
		"jquery" : "lib/jquery/dist/jquery",
		"compose" : "lib/troopjs-bundle/src/lib/composejs/compose",
		"troopjs-core" : "lib/troopjs-bundle/src/lib/troopjs-core/src",
		"troopjs-jquery" : "lib/troopjs-bundle/src/lib/troopjs-jquery/src",
		"troopjs-requirejs" : "lib/troopjs-bundle/src/lib/troopjs-requirejs/src",
		"domReady" : "lib/troopjs-bundle/src/lib/domready/domReady",
		"template" : "lib/troopjs-bundle/src/lib/troopjs-requirejs/src/template",
	},
	"packages" : [{
		"name" : "wire",
		"location" : "lib/troopjs-bundle/src/lib/wire",
		"main" : "wire"
	}, {
		"name" : "when",
		"location" : "lib/troopjs-bundle/src/lib/wire/support/when",
		"main" : "when"
	} ]
}, [ "require", "jquery" ], function Deps(parentRequire, jQuery) {

	// Application and plug-ins
	parentRequire([ "wire!spec" ], function App(context) {

		// Hook ready
		jQuery(document).ready(function ready($) {
			console.log(context.application);
			context.application.start();
		});
	});
});