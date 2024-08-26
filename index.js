console.log('index.js');

var url = 'https://parthparmar-addshoppers.github.io/interstitial_tab_test/index2.html';
// window.open(url);
// window.location.replace('https://chewy.com/', 'landing_page_url_safeopt');

function test_function() {
    console.log('test_function');
    window.open(url);
}

function run_open() {
    console.log('run_open');
    document.querySelector('.landing_page').click();
};

run_open();
