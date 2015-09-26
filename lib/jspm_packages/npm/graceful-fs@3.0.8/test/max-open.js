/* */ 
(function(process) {
  var test = require("tap").test;
  var fs = require("../../graceful-fs@3.0.8");
  test('open lots of stuff', function(t) {
    process.stderr.write('');
    var n = 1024;
    var opens = 0;
    var fds = [];
    var going = true;
    var closing = false;
    var doneCalled = 0;
    for (var i = 0; i < n; i++) {
      go();
    }
    function go() {
      opens++;
      fs.open(__filename, 'r', function(er, fd) {
        if (er)
          throw er;
        fds.push(fd);
        if (going)
          go();
      });
    }
    setTimeout(function() {
      going = false;
      t.equal(opens - fds.length, n);
      done();
    }, 100);
    function done() {
      if (closing)
        return;
      doneCalled++;
      if (fds.length === 0) {
        console.error('done called %d times', doneCalled);
        t.ok(doneCalled >= 2);
        return t.end();
      }
      closing = true;
      setTimeout(function() {
        closing = false;
        done();
      }, 100);
      var closes = fds.slice(0);
      fds.length = 0;
      closes.forEach(function(fd) {
        fs.close(fd, function(er) {
          if (er)
            throw er;
        });
      });
    }
  });
})(require("process"));
