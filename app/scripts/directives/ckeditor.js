'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:ckEditor
 * @description
 * # ckEditor
 */
angular.module('demoApp')
  .directive('ckEditor', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function postLink(scope, element,attrs, ngModel) {
        if( !ngModel ) {return;}
        var edit = CKEDITOR.replace(element[0]);
        CKEDITOR.editorConfig = function(config){
          config.toolbar = [
            {name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo']},
            {name: 'editing', items: ['Scayt']},
            {name: 'links', items: ['Link', 'Unlink', 'Anchor']},
            '/',
            {name: 'basicstyles', items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat']},
            {name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']},
            {name: 'styles', items: ['Styles', 'Format']}
          ]
        };
        
        edit.on('change', function(evt){
          console.log( evt.editor.getData() );
          scope.$apply(function(){
            ngModel.$setViewValue(evt.editor.getData());
          });
        });
      }
    };
  });
