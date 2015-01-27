/* config for scrollreveal */
var config = {
            after: '0s',
            enter: 'top',
            move: '50px',
            over: '0.66s',
            easing: 'ease-in-out',
            viewportFactor: 1,
            reset: true,
            init: false,
        };
        //Load config into new instance
        window.scrollReveal = new scrollReveal( config );
        //fire init method of scrollReveal when document is ready, jQuery handler.
        $(document).ready(scrollReveal.init());

