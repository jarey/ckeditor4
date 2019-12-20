(function(){
    CKEDITOR.basePath = '/assets/js/ckeditor/'
    CKEDITOR.plugins.addExternal('wordcount', 'plugins/wordcount/');
    CKEDITOR.plugins.addExternal('notification', 'plugins/notification/');
    CKEDITOR.editorConfig = function( config ) {

        config.placeholder_select= {
            placeholders: ['expediente', 'expediente.documentos', 'expediente.solicitante'],
            format: '${%placeholder%}'
        }

        // Configure available tokens
        config.availableTokens = [
	        ["", ""],
	        ["Expediente sancionador 45846069P/20122019/01.","expediente"],
	        ["Interesado del expediente: José Ángel Rey Liñares","interesado"],
	        ["Documentos del expediente actual","expediente.documentos"]
        ];

        // Configure token string
        config.tokenStart = '${';
        config.tokenEnd = '}';

        config.extraPlugins = 'wordcount,notification,placeholder_select,token';
        config.language = 'gl';
        config.height = 286;
        //Permitir contenido variable en el html para poder alterar divisiones con el markup definido para las marcas de bucles y condicionales.
        config.allowedContent = true;
	    config.toolbarGroups = [
		    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		    { name: 'forms', groups: [ 'forms' ] },
		    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		    { name: 'links', groups: [ 'links' ] },
		    { name: 'insert', groups: [ 'insert' ] },
		    '/',
		    { name: 'styles', groups: [ 'styles' ] },
		    { name: 'colors', groups: [ 'colors' ] },
		    { name: 'tools', groups: [ 'tools' ] },
		    { name: 'others', groups: [ 'others' ] }
        ];
	    config.skin = 'office2013';

	    //config.removeButtons = 'Image,Flash,Smiley,SpecialChar,Iframe,Link,Unlink,Anchor,Language,BidiRtl,BidiLtr,Blockquote,CreateDiv,Indent,Outdent,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Templates,Save,Print,Source,Maximize';
    }

})();