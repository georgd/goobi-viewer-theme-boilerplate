/*****************************************************************************************
 * Custom JavaScript for "boilerplate"
 ****************************************************************************************/
/**
 * Method to move DOM-Elements to another place.
 * 
 * @method manipulateDom
 */
function manipulateDom() {
    $( '#widgetSearchField' ).detach().insertAfter( '.page-content__close-sidebar' );
    $( '#changeLocal' ).detach().insertAfter( '.page-content__close-sidebar' );
}

/**
 * Method to reset DOM-Elements.
 * 
 * @method resetDom
 */
function resetDom() {
    var searchField = $( '#widgetSearchField' ).detach();
    var changeLocal = $( '#changeLocal' ).detach();
    
    $( '.page-header__search' ).append( searchField );
    $( '.page-header__language' ).append( changeLocal );
}

$( document ).ready( function() {
    var viewerConfig = {
        currentPage: currentPage,
        localStoragePossible: viewerJS.localStoragePossible,
        widgetNerSidebarRight: true,
    };
    
    viewerJS.init( viewerConfig );
    
    // off canvas
    $( '[data-toggle="offcanvas"]' ).off().click( function() {
        $( this ).addClass( 'in' );
        $( '#sidebar' ).addClass( 'in' );
        $( '.offcanvas-fade' ).addClass( 'in' );
    } );
    $( '[data-toggle="close-sidebar"]' ).click( function() {
        $( '#sidebar' ).removeClass( 'in' );
        $( '[data-toggle="offcanvas"]' ).removeClass( 'in' );
        $( '.offcanvas-fade' ).removeClass( 'in' );
    } );
    
    // change position of search and language
    if ( window.matchMedia( '(max-width: 768px)' ).matches ) {
        manipulateDom();
    }
    $( window ).on( 'resize orientationchange', function() {
        if ( window.matchMedia( '(max-width: 768px)' ).matches ) {
            manipulateDom();
        }
        else {
            resetDom();
        }
    } );
} );
