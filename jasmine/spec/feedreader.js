/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
//test to check whether all feeds have url
        it('url defined',function(){

            allFeeds.forEach(function(a){

                expect(a.url).toBeDefined();
                expect(a.url.length).not.toBe(0);
            });

        });
//test to check whether all feeds have name
        it('names defined',function(){
            allFeeds.forEach(function(a){
                expect(a.name).toBeDefined();
                expect(a.name.length).not.toBe(0);
            });

        });
        
    });

describe('The menu', function() {

    var body = document.body;
//test to check whether the menu icon is initially hidden
        it('Initially menu element is hidden',function(){

            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

//test to check that menu is toggling correctly
         it('menu show/hide when clicked',function(){

            document.querySelector(".menu-icon-link").click();
            expect(body.classList.contains('menu-hidden')).toBe(false);

            document.querySelector(".menu-icon-link").click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
            
        });



});
    
describe('Initial Entries', function() {

//test to check atleast one entry in the container
    beforeEach(function(done)
     {

      loadFeed(0, function() {
      done();
      });

    });

    it('checking for entries',function(done){

        expect(document.querySelector(".feed").getElementsByClassName("entry").length).toBeGreaterThan(0);
        done();

    });

});



describe('New Feed Selection',function(){
    var existingFeed="";
    
//test to check the feeds are loading correctly
    beforeEach(function(done)
     {

      loadFeed(0, function() 
      {
         existingFeed = document.querySelector(".feed").innerHTML;
        
        loadFeed(1,function(){
            done();
        });
      });


    });

    it('feeds not equal',function(done)
    {
        var newFeed = document.querySelector(".feed").innerHTML;
        expect(newFeed).not.toBe(existingFeed);
        done();
    });



});

    
}());
