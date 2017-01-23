function foo() {
    var bar;
    quux = 'value of quux inside foo';
    function zip() {
        bar = true;
        var quux;
    }
    return zip;
}