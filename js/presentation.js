var mouse = function() {
    return function(deck) {
        registerMouse();
    };

    function registerMouse() {
        document.addEventListener('mousedown', function(e) {
            if (e.which == 1 /* Left Mouse */ ) deck.next();
            if (e.which == 3 /* Left Mouse */ ) deck.prev();
        });
    }
};

var keyboard = function() {
    return function(deck) {
        registerKeys();
    };

    function registerKeys() {
        document.addEventListener('keydown', function(e) {
            if (e.which == 80 /* P */ ) deck.prev();
            if (e.which == 78 /* N */ ) deck.next();
            if (e.which == 70 /* F */ ) launchIntoFullscreen(document.documentElement);
        });
    }

    function launchIntoFullscreen(element) {
        if (element.requestFullscreen) element.requestFullscreen();
        else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
        else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
        else if (element.msRequestFullscreen) element.msRequestFullscreen();
    }
};

var deck = bespoke.from('article', [
    bespoke.themes.cube(),
    bespoke.plugins.classes(),
    bespoke.plugins.keys(),
    bespoke.plugins.backdrop(),
    bespoke.plugins.touch(),
    bespoke.plugins.hash(),
    //mouse(),
    keyboard()
]);