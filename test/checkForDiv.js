describe('getDiv', function() {
    var d = document.querySelector('#app');

    it('Should exist', function() {
        expect(d.nodeName).toBe('DIV');
    });
});