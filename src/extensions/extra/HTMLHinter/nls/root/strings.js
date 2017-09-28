/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    // Audited
    "ATTRIBUTE_IN_CLOSING_TAG_TITLE": "No attributes in a closing tag allowed!",
    "ATTRIBUTE_IN_CLOSING_TAG": "This closing tag <code data-highlight='[[closeTag.start]],[[closeTag.end]]'>&lt;/[[closeTag.name]]&gt;</code> cannot contain any attributes.</p>",

    // Audited
    "CLOSE_TAG_FOR_VOID_ELEMENT_TITLE": "You don't need this closing tag!",
    "CLOSE_TAG_FOR_VOID_ELEMENT": "This closing tag <code data-highlight='[[closeTag.start]],[[closeTag.end]]'>&lt;/[[closeTag.name]]&gt;</code> is for a void element (that is, an element that doesn't need to be closed).",

    // NOT Audited
    "CSS_MIXED_ACTIVECONTENT_TITLE": "CSS_MIXED_ACTIVECONTENT_TITLE",
    "CSS_MIXED_ACTIVECONTENT": "<p>The CSS property <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em> has a url() value <em data-highlight='[[cssValue.start]],[[cssValue.end]]'>here</em> that currently points to an insecure resource. You can make this error disappear by logging into Webmaker. For more information on how modern browsers signal insecure content, visit <a href='https://developer.mozilla.org/en-US/docs/Security/MixedContent'>this link</a>.</p>",

    // NOT Audited
    "EVENT_HANDLER_ATTR_NOT_ALLOWED_TITLE": "EVENT_HANDLER_ATTR_NOT_ALLOWED_TITLE",
    "EVENT_HANDLER_ATTR_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using the JavaScript event handler attribute <em data-highlight='[[name.start]],[[name.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",

    // NOT Audited
    "HTML_CODE_IN_CSS_BLOCK_TITLE": "HTML_CODE_IN_CSS_BLOCK_TITLE",
    "HTML_CODE_IN_CSS_BLOCK": "<p>HTML code was detected in CSS context starting <em data-highlight='[[html.start]],[[html.end]]'>here</em></p>",

    // NOT Audited
    "HTTP_LINK_FROM_HTTPS_PAGE_TITLE": "HTTP_LINK_FROM_HTTPS_PAGE_TITLE",
    "HTTP_LINK_FROM_HTTPS_PAGE": "<p>The <code>&lt;[[openTag.name]]&gt;</code> tag's <code>[[attribute.name.value]]</code> attribute (<em data-highlight='[[attribute.value.start]],[[attribute.value.end]]'>here</em>) currently points to an insecure resource. You can make this error disappear by logging into Webmaker. For more information on how modern browsers signal insecure content, visit <a href='https://developer.mozilla.org/en-US/docs/Security/MixedContent'>this link</a>.</p>",

    // Audited
    "INVALID_ATTR_NAME_TITLE": "That's not a valid attribute!",
    "INVALID_ATTR_NAME": "This attribute <code class='attribute' data-highlight='[[start]],[[end]]'>[[attribute.name.value]]</code> has a name that is not permitted in HTML5.</p>",

    // Left off here...

    "UNSUPPORTED_ATTR_NAMESPACE_TITLE": "UNSUPPORTED_ATTR_NAMESPACE_TITLE",
    "UNSUPPORTED_ATTR_NAMESPACE": "<p>The attribute <em data-highlight='[[start]],[[end]]'>here</em> uses an attribute namespace that is not permitted under HTML5 conventions.</p>",

    "MULTIPLE_ATTR_NAMESPACES_TITLE": "MULTIPLE_ATTR_NAMESPACES_TITLE",
    "MULTIPLE_ATTR_NAMESPACES": "<p>The attribute <em data-highlight='[[start]],[[end]]'>here</em> has multiple namespaces. Check your text and make sure there's only a single namespace prefix for the attribute.</p>",

    "INVALID_CSS_DECLARATION_TITLE": "INVALID_CSS_DECLARATION_TITLE",
    "INVALID_CSS_DECLARATION": "<p><em data-highlight='[[cssDeclaration.start]],[[cssDeclaration.end]]'>This</em> CSS declaration never closes.</p>",

    "INVALID_CSS_PROPERTY_NAME_TITLE": "INVALID_CSS_PROPERTY_NAME_TITLE",
    "INVALID_CSS_PROPERTY_NAME": "<p>CSS property <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em> does not exist. You may want to see a <a href='https://developer.mozilla.org/en/CSS/CSS_Reference'>list of CSS properties</a>.</p>",

    "INVALID_CSS_RULE_TITLE": "INVALID_CSS_RULE_TITLE",
    "INVALID_CSS_RULE": "<p><em data-highlight='[[cssRule.start]],[[cssRule.end]]'>This</em> CSS rule is not legal CSS.</p>",

    "INVALID_TAG_NAME_TITLE": "That's not a valid tag! <br/> INVALID_TAG_NAME",
    "INVALID_TAG_NAME": "<p>This <code data-highlight='[[openTag.start]],[[openTag.end]]'>&lt;</code> character appears to be the beginning of a tag, but is not followed by a valid tag name.</p> <p>If you just want a <code>&lt;</code> to appear on your Web page, try using <code>&amp;lt;</code> instead.</p> <p>Or, see a <a href='https://developer.mozilla.org/en/docs/Web/Guide/HTML/HTML5/HTML5_element_list'>list of HTML5 tags</a>.</p>",

    "JAVASCRIPT_URL_NOT_ALLOWED_TITLE": "JAVASCRIPT_URL_NOT_ALLOWED_TITLE",
    "JAVASCRIPT_URL_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using the <code>javascript:</code> URL <em data-highlight='[[value.start]],[[value.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",

    "ORPHAN_CLOSE_TAG_TITLE": "Unexpected closing tag!",
    "ORPHAN_CLOSE_TAG": "<p>This closing <code data-highlight='[[closeTag.start]],[[closeTag.end]]'>&lt;/[[closeTag.name]]&gt;</code> tag doesn't seem to pair with any opened tags. Are you sure it needs to be here?</p>",

    "MISMATCHED_CLOSE_TAG_DUE_TO_EARLIER_AUTO_CLOSING_TITLE" : "MISMATCHED_CLOSE_TAG_DUE_TO_EARLIER_AUTO_CLOSING_TITLE",
    "MISMATCHED_CLOSE_TAG_DUE_TO_EARLIER_AUTO_CLOSING" : "MISMATCHED_CLOSE_TAG_DUE_TO_EARLIER_AUTO_CLOSING",

    "MISSING_CLOSING_TAG_NAME_TITLE": "MISSING_CLOSING_TAG_NAME_TITLE",
    "MISSING_CLOSING_TAG_NAME": "MISSING_CLOSING_TAG_NAME",


    "MISMATCHED_CLOSE_TAG_TITLE": "Forgot to close a tag? (MISMATCHED_CLOSE_TAG)",
    "MISMATCHED_CLOSE_TAG": "<p>This closing <code data-highlight='[[closeTag.start]],[[closeTag.end]]'>&lt;/[[closeTag.name]]&gt;</code> tag doesn't pair with this unclosed <code data-highlight='[[openTag.start]],[[openTag.end]]'>&lt;[[openTag.name]]&gt;</code> tag.</p> <p>Close the <code>&lt;[[openTag.name]]&gt;</code> tag with a matching <code>&lt;/[[openTag.name]]&gt;</code> tag.</p>",
    // "MISMATCHED_CLOSE_TAG": "<p>This closing <code data-highlight='[[closeTag.start]],[[closeTag.end]]'>&lt;/[[closeTag.name]]&gt;</code> tag doesn't pair with this opening <code data-highlight='[[openTag.start]],[[openTag.end]]'>&lt;[[openTag.name]]&gt;</code> tag. This is likely due to a missing <code>&lt;/[[openTag.name]]&gt;</code> tag.",
    "MISSING_CSS_BLOCK_CLOSER_TITLE": "MISSING_CSS_BLOCK_CLOSER_TITLE",
    "MISSING_CSS_BLOCK_CLOSER": "<p>Missing block closer or next property:value; pair following <em data-highlight='[[cssValue.start]],[[cssValue.end]]'>[[cssValue.value]]</em>.</p>",
    "MISSING_CSS_BLOCK_OPENER_TITLE": "MISSING_CSS_BLOCK_OPENER_TITLE",
    "MISSING_CSS_BLOCK_OPENER": "<p>Missing block opener after <em data-highlight='[[cssSelector.start]],[[cssSelector.end]]'>[[cssSelector.selector]]</em>.</p>",
    "MISSING_CSS_PROPERTY_TITLE": "MISSING_CSS_PROPERTY_TITLE",
    "MISSING_CSS_PROPERTY": "<p>Missing property for <em data-highlight='[[cssSelector.start]],[[cssSelector.end]]'>[[cssSelector.selector]]</em>.</p>",
    "MISSING_CSS_SELECTOR_TITLE": "MISSING_CSS_SELECTOR",
    "MISSING_CSS_SELECTOR": "<p>Missing either a new CSS selector or the &lt;/style&gt; tag <em data-highlight='[[cssBlock.start]],[[cssBlock.end]]'>here</em>.</p>",
    "MISSING_CSS_VALUE_TITLE": "MISSING_CSS_VALUE_TITLE",
    "MISSING_CSS_VALUE": "<p>Missing value for <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em>.</p>",
    "SCRIPT_ELEMENT_NOT_ALLOWED_TITLE": "SCRIPT_ELEMENT_NOT_ALLOWED_TITLE",
    "SCRIPT_ELEMENT_NOT_ALLOWED": "<p>Sorry, but security restrictions on this site prevent you from using <code>&lt;script&gt;</code> tags <em data-highlight='[[openTag.start]],[[closeTag.end]]'>here</em>. If you really need to use JavaScript, consider using <a href='http://jsbin.com/'>jsbin</a> or <a href='http://jsfiddle.net/'>jsfiddle</a>.</p>",
    "SELF_CLOSING_NON_VOID_ELEMENT_TITLE": "SELF_CLOSING_NON_VOID_ELEMENT_TITLE",
    "SELF_CLOSING_NON_VOID_ELEMENT": "<p>The <code>&lt;[[name]]&gt;</code> tag <em data-highlight='[[start]],[[end]]'>here</em> can't be self-closed, because <code>&lt;[[name]]&gt;</code> is not a void element; it must be closed with a separate <code>&lt;/[[name]]&gt;</code> tag.</p>",
    "UNCAUGHT_CSS_PARSE_ERROR_TITLE": "UNCAUGHT_CSS_PARSE_ERROR_TITLE",
    "UNCAUGHT_CSS_PARSE_ERROR": "<p>A parse error occurred outside expected cases: <em data-highlight='[[error.start]],[[error.end]]'>[[error.msg]]</em></p>",
    "UNCLOSED_TAG_TITLE": "UNCLOSED_TAG_TITLE",
    "UNCLOSED_TAG": "<p>The <code>&lt;[[openTag.name]]&gt;</code> tag <em data-highlight='[[openTag.start]],[[openTag.end]]'>here</em> never closes.</p>",
    "UNEXPECTED_CLOSE_TAG_TITLE": "UNEXPECTED_CLOSE_TAG_TITLE",
    "UNEXPECTED_CLOSE_TAG": "<p>The closing <code>&lt;/[[closeTag.name]]&gt;</code> tag <em data-highlight='[[closeTag.start]],[[closeTag.end]]'>here</em> doesn't pair with anything, because there are no opening tags that need to be closed.</p>",
    "UNFINISHED_CSS_PROPERTY_TITLE": "UNFINISHED_CSS_PROPERTY_TITLE",
    "UNFINISHED_CSS_PROPERTY": "<p>Property <em data-highlight='[[cssProperty.start]],[[cssProperty.end]]'>[[cssProperty.property]]</em> still needs finalizing with :</p>",
    "UNFINISHED_CSS_SELECTOR_TITLE": "UNFINISHED_CSS_SELECTOR_TITLE",
    "UNFINISHED_CSS_SELECTOR": "<p>Selector <em data-highlight='[[cssSelector.start]],[[cssSelector.end]]'>[[cssSelector.selector]]</em> still needs finalizing with {</p>",
    "UNFINISHED_CSS_VALUE_TITLE": "UNFINISHED_CSS_VALUE_TITLE",
    "UNFINISHED_CSS_VALUE": "<p>Value <em data-highlight='[[cssValue.start]],[[cssValue.end]]'>[[cssValue.value]]</em> still needs finalizing with ;</p>",
    "UNKOWN_CSS_KEYWORD_TITLE": "UNKOWN_CSS_KEYWORD_TITLE",
    "UNKOWN_CSS_KEYWORD": "<p>The CSS @keyword <em data-highlight='[[cssKeyword.start]],[[cssKeyword.end]]'>[[cssKeyword.value]]</em> does not match any known @keywords.</p>",
    "UNQUOTED_ATTR_VALUE_TITLE": "UNQUOTED_ATTR_VALUE_TITLE",
    "UNQUOTED_ATTR_VALUE": "<p>The Attribute value <em data-highlight='[[start]]'>here</em> should start with an opening double quote.</p>",
    "UNTERMINATED_ATTR_VALUE_TITLE": "UNTERMINATED_ATTR_VALUE_TITLE",
    "UNTERMINATED_ATTR_VALUE": "<p>The <code>&lt;[[openTag.name]]&gt;</code> tag's <code>[[attribute.name.value]]</code> attribute has a value <em data-highlight='[[attribute.value.start]]'>here</em> that doesn't end with a closing double quote.</p>",
    "UNTERMINATED_CLOSE_TAG_TITLE": "UNTERMINATED_CLOSE_TAG_TITLE",
    "UNTERMINATED_CLOSE_TAG": "<p>The closing <code>&lt;/[[closeTag.name]]&gt;</code> tag <em data-highlight='[[closeTag.start]],[[closeTag.end]]'>here</em> doesn't end with a <code>&gt;</code>.</p>",
    "UNTERMINATED_COMMENT_TITLE": "UNTERMINATED_COMMENT_TITLE",
    "UNTERMINATED_COMMENT": "<p>The comment <em data-highlight='[[start]]'>here</em> doesn't end with a <code>--&gt;</code>.</p>",
    "UNTERMINATED_CSS_COMMENT_TITLE": "UNTERMINATED_CSS_COMMENT_TITLE",
    "UNTERMINATED_CSS_COMMENT": "<p>The CSS comment <em data-highlight='[[start]]'>here</em> doesn't end with a <code>*/</code>.</p>",
    "UNTERMINATED_OPEN_TAG_TITLE": "UNTERMINATED_OPEN_TAG_TITLE",
    "UNTERMINATED_OPEN_TAG": "<p>The opening <code>&lt;[[openTag.name]]&gt;</code> tag <em data-highlight='[[openTag.start]],[[openTag.end]]'>here</em> doesn't end with a <code>&gt;</code>.</p>"
});
