
module('Protocol Tests', {
	setup: function() {
		MockSocks.PROTOCOL = null;
	}
});

test('Initialization is done correctly', function(){
	equal(MockSocks.PROTOCOL, null, 'mock socks protocol is null by default');

	var protocol = new Protocol();

	deepEqual(MockSocks.PROTOCOL, protocol, 'after protocol initialization the mock socks procotol is set');

	ok(protocol.subject, 'the subject has been initialized');
});