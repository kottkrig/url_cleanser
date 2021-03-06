var tabs = require("tabs");

tabs.on('ready', function(tab) {
    console.log('tab is loaded', tab.title, tab.url);
      
    query_params = tab.url;
    
    // Remove tracking crap
    query_params = query_params.replace(/([&?])utm_source=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
    query_params = query_params.replace(/([&?])utm_medium=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
    query_params = query_params.replace(/([&?])utm_campaign=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
    query_params = query_params.replace(/([&?])utm_content=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
    query_params = query_params.replace(/([&?])utm_term=[^&]*(?:&|$)/, '$1'); // Google analytics tracking variable
    query_params = query_params.replace(/([&?])partner=[^&]*(?:&|$)/, '$1'); // From nytimes.com feeds
    query_params = query_params.replace(/([&?])emc=[^&]*(?:&|$)/, '$1');  // From nytimes.com feeds
    query_params = query_params.replace(/([&?])lsrc=[^&]*(?:&|$)/, '$1');  // From macworld.com feeds
    query_params = query_params.replace(/([&?])eref=[^&]*(?:&|$)/, '$1'); // From cnn.com feeds
    query_params = query_params.replace(/([&?])ref=[^&]*(?:&|$)/, '$1'); // From cbc.ca/news feeds
    query_params = query_params.replace(/([&?])bn=[^&]*(?:&|$)/, '$1'); // From thestar.com links
    query_params = query_params.replace(/([&?])cmpid=[^&]*(?:&|$)/, '$1'); // From theglobeandmail.com links
    query_params = query_params.replace(/([&?])feature=[^&]*/, '$1'); // For YouTube
    
    // If the string ends with the '?' character (no more GET variables left), remove it
    query_params = query_params.replace(/[&?]$/, '');
    
    // If the href has changed, update it
    if (tab.url != query_params) {
        tab.url = query_params;
    }
  
  
});