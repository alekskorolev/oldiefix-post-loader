module.exports = function(content) {
    content = content.replace(/(\.default)([\.;\s\)\(\,\]\[\])])/g, function(a, b, c) { return '["default"]' + c })
                     .replace(/\{\sdefault:\s/g, '{ "default": ');

    return content;
};
