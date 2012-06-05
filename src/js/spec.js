define({
	"application" : {
		"create" : {
			"module" : "widget/application",
			"args": [ {
				"$ref" : "dom.query!body"
			}, "app/todos" ]
		}
	},

	"$plugins" : [ {
		"module" : "troopjs-jquery/weave"
	}, {
		"module" : "troopjs-jquery/destroy"
	}, {
		"module" : "troopjs-jquery/hashchange"
	}, {
		"module" : "troopjs-jquery/action"
	} ],

	"plugins" : [ {
		"module" : "wire/jquery/dom"
	} ]
});