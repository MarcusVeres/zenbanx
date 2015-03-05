
## The Banks of Zen

Version 0.5.2


### Notes

- You will need a mod-rewrite on the server ( e.g. https://gist.github.com/mshuffett/5973441 )
- News and FAQ Sections pull data from the \*.json files in: /assets/data/
- Gulpfile is set up to watch styles.sass, if you need to modify styles
 

### SEO Concerns

Angular should be crawlable (http://ng-learn.org/2014/05/SEO-Google-crawl-JavaScript/), but just in case there are concerns, you can expand the pages using this tool (https://prerender.io/). You can also just include the partials with PHP or C# and build your own templates if you want to go the extra mile.

