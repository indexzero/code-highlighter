CodeHighlighter.addStyle("xaml",{
  comment : {
    exp  : /\&lt;![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\&gt;/
  },
  extension : {
    exp : /\S(\w+:\w+)/
  },
  attribute : {
    exp: /\b([a-zA-Z-:]+)(=)/,
    replacement: "<span class=\"$0\">$1</span>$2"
  },
  string : {
    exp  : /'[^']*'|"[^"]*"/
  },
  tags : {
    exp: /(&lt;\/?)([a-zA-Z0-9]+\s?)/,
    replacement: "$1<span class=\"$0\">$2</span>"
  },
  property : {
    exp: /(\.)([a-zA-Z0-9]+)(&gt;\/?)/,
    replacement: "$1<span class=\"$0\">$2</span>$3"
  }
});
