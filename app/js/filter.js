/**
 * Created by v.stokolosa on 12/12/14.
 */
'use strict';

//encodeURI filter for URL
app.filter('encodeURI', function () {
    return window.encodeURI;
});
