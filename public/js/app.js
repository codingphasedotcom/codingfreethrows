var html = document.getElementById('jsEditor').innerHTML
var css = document.getElementById('css')
var js = document.getElementById('js')
var code = document.getElementById('code').contentWindow.document

// Editor Settings (Provided by C9)
var jsEditor = ace.edit('jsEditor')
jsEditor.setTheme('ace/theme/dracula')
jsEditor.setShowPrintMargin(false)
jsEditor.session.setMode('ace/mode/javascript')
jsEditor.setValue('var name = "Joe" ')
jsEditor.getSession().setUseWrapMode(true)

var cssEditor = ace.edit('cssEditor')
cssEditor.setTheme('ace/theme/dracula')
cssEditor.setShowPrintMargin(false)
cssEditor.session.setMode('ace/mode/css')
cssEditor.setValue('/*css*/')

var htmlEditor = ace.edit('htmlEditor')
htmlEditor.setTheme('ace/theme/dracula')
htmlEditor.setShowPrintMargin(false)
htmlEditor.session.setMode('ace/mode/html')
htmlEditor.setValue('<div class="box">swag</div><h1>title</h1>')

document.body.onkeyup = function() {
  compile()
}

function compile() {
  console.log(htmlEditor.getValue())
  code.open()
  code.writeln(
    htmlEditor.getValue() +
      '<style>' +
      cssEditor.getValue() +
      '</style>' +
      '<script>' +
      jsEditor.getValue() +
      '</script>'
  )
  code.close()
}

$(document).ready(() => {
  compile()
  $(document).on('click', '.editor-menu .button', function() {
    switch ($(this).attr('class')) {
      case 'button btn-html':
        $('.editor-menu .button').removeClass('active')
        $(this).addClass('active')
        $('.code .editor').removeClass('active')
        $('#htmlEditor').addClass('active')
        break
      case 'button btn-css':
        $('.editor-menu .button').removeClass('active')
        $(this).addClass('active')
        $('.code .editor').removeClass('active')
        $('#cssEditor').addClass('active')
        break
      case 'button btn-js':
        $('.editor-menu .button').removeClass('active')
        $(this).addClass('active')
        $('.code .editor').removeClass('active')
        $('#jsEditor').addClass('active')
        break
      default:
    }
  })
})
