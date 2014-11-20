// bespoke-theme-cube.js
var theme = function() {
    return function(deck) {
        var addClass = function(el, cls) {
                el.classList.add('bespoke-' + cls);
            },

            removeClass = function(el, cls) {
                el.className = el.className
                    .replace(new RegExp('bespoke-' + cls + '(\\s|$)', 'g'), ' ')
                    .trim();
            },

            deactivate = function(el, index) {
                var activeSlide = deck.slides[deck.slide()],
                    offset = index - deck.slide(),
                    offsetClass = offset > 0 ? 'after' : 'before';

                ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

                if (el !== activeSlide) {
                    ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
                }
            };

        deck.slides.map(function(el) {
            addClass(el, 'slide');
        });

        deck.on('activate', function(e) {
            deck.slides.map(deactivate);
            addClass(e.slide, 'active');
            removeClass(e.slide, 'inactive');
        });
    };
};

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
    theme(),
    bespoke.plugins.classes(),
    bespoke.plugins.keys(),
    bespoke.plugins.backdrop(),
    bespoke.plugins.touch(),
    bespoke.plugins.hash(),
    //mouse(),
    keyboard()
]);