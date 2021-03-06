var data = [
  {
    title: 'The Texas Tribune <a id="tt"></a>',
    description: "I'm rebuilding the <a href='www.texastribune.org/library/data/government-employee-salaries/'>government salaries website</a>, creating interactive graphics and playing third base on the softball team. I also work with public records requests and help reporters find facts in messy datasets. There's a full list of my Texas Tribune bylines on my <a href='www.texastribune.org/about/staff/dan-hill/'>author page</a>.",
    date: 'Fall 2013 &mdash; today',
    projects: [
      {
        title: 'Prison contraband',
        link: 'http://www.texastribune.org/2014/05/04/cellphone-contraband-cases-few-face-charges/',
        description: 'Scraping PDFs of prison contraband seizures helped reporter Edgar Walters and I report on the discovery of a giant pit of smuggled cell phones. The story involved scraping PDFs with Tabula, querying our database and creating charts with R.'
      },
      {
        title: 'Immigrant detainers',
        link: 'http://www.texastribune.org/2014/03/04/cost-of-jailing-undocumented-immigrants/',
        description: 'Politicians use the numbers from <a href="http://www.texastribune.org/2013/10/22/texas-jails-spend-millions-undocumented-immigrants/">monthly reports on immigrants</a> in Texas jails, but there’s no resource for comparing reports over time. I built this big web page with D3.js and Backbone.js to provide historical data.',
        img: 'detain.png'
      },
      {
        title: '8th grade cohorts',
        link: 'http://www.texastribune.org/education/public-education/8th-grade-cohorts/',
        description: 'Texas agencies tracked students starting in 8th grade to report how many received a postsecondary degree. I built this Django app to explore socioeconomic disparities in education.',
        img: 'cohorts.png'
      },
      {
        title: 'Prison violence',
        link: 'http://www.texastribune.org/2013/09/22/violence-behind-bars-tie-mental-illness/visualization/',
        description: 'I requested reports of violent incidents in Texas prisons and found units with mentally ill inmates have the highest rates of violence. The interactive was my first project with Backbone.js, which powered a Leaflet map and sortable table.',
        img: 'incidents.png'
      }
    ]
  },
  {
    title: 'The Wall Street Journal <a id="wsj"></a>',
    description: 'I interned with the interactive graphics desk and absorbed the wisdom of its talented designers. Each of my projects were thoughtfully tested and prototyped to maximize the <a href="https://source.opennews.org/en-US/learning/what-if-data-visualization-actually-people/">utility of data visualization</a>.',
    date: 'Summer 2013',
    projects: [
      {
        title: 'Borderlands',
        link: 'http://graphics.wsj.com/BORDERLANDS/',
        description: 'I built a map interface for Wall Street Journal and <a href="http://blog.storyful.com/2013/11/22/mapping-syrias-conflict-through-the-storyful-archive/">Storyful-verified</a> videos documenting people from Syria and Turkey and the civil war near the border of those countries.',
        img: 'joe.jpg'
      },
      {
        title: 'America Shops: U.S. Retail Sales',
        link: 'http://online.wsj.com/news/articles/SB10001424127887323977304579002761262522856',
        description: 'I collaborated with the Journal’s economic design experts to develop an auto-updating visualization of the <a href="http://www.census.gov/retail/">monthly retail sales report</a>. It was featured on Wonkblog as a "<a href="http://www.washingtonpost.com/blogs/wonkblog/wp/2013/08/14/wonkbook-why-hasnt-this-been-immigration-august/">Graph of the Day</a>"!',
        img: 'shops.jpg'
      }
    ]
  },
  {
    title: 'The Sacramento Bee <a id="bee"></a>',
    description: 'I wrote daily metro stories and made some interactives at my hometown paper for the Northwestern "journalism residency" program. I practiced computer science skills on deadline in a medium-sized newsroom and learned from my data journalism hero, Pulitzer finalist <a href="https://twitter.com/philliphreese">Phillip Reese</a>.',
    date: 'Spring 2013',
    projects: [
      {
        title: 'Bay Bridge corrosion',
        link: 'http://www.sacbee.com/2013/05/18/5431401/corrosion-plagues-new-bay-bridge.html',
        description: 'I hunted for evidence of Bay Bridge construction flaws in 100,000 documents Charlie Piller requested from the state transportation agency. Politicians called hearings after this story ran.',
        img: 'corrosion.png'
      },
      {
        title: 'Causes of child deaths',
        link: 'http://www.sacbee.com/2013/03/17/5270948/interactive-explore-leading-causes.html',
        description: 'I often used Google charts and Fusion Tables to quickly publish visualizations at the Bee. This treemap is one of the view interactives that still works after my Bee Google account was deactivated.',
        img: 'child.png'
      }
    ]
  },
  {
    title: 'Knight Lab at Northwestern University <a id="nu"></a>',
    description: 'In addition to studying journalism and computer science at Northwestern, I researched technology tools for journalists and hacked on prototypes at the <a href="http://knightlab.northwestern.edu/author/dan-hill/">Knight Lab</a>. You can see some of my NU classwork on my other <a href="http://danhillreports.com/?cat=3">personal website</a>.',
    date: '2011 &mdash; 2013',
    projects: [
      {
        title: 'Blog: Web scrapers for journalists',
        link: 'http://knightlab.northwestern.edu/2013/06/14/web-scrapers-for-journalists-haystax-and-other-graphical-interface-systems/',
        description: 'I wrote about testing different web scrapers and hacked on a javascript-based web scraper with a graphical interface called <a href="https://github.com/danhillreports/haystax">Haystax</a>. This research prepared me lead a <a href="http://frankbi.github.io/AAJA-Scraper/tutorial.html">web scraping workshop</a> at the Asian American Journalists conference.'
      },
      {
        title: 'NATO in Chicago',
        link: 'http://projects.knightlab.com/projects/nato-in-chicago',
        description: 'When the NATO conference came to Chicago in 2012, the lab tracked international coverage with a database of major English news outlets from around the world that identified relevant articles. I built a map that visualized international coverage of the conference based on keywords. We built the site in a matter of days, and the project was my first exposure to agile software development.',
        img: 'nato.png'
      },
      {
        title: 'MetroVote',
        link: 'http://projects.knightlab.com/projects/metrovote',
        description: 'A Ruby on Rails project built for a Northwestern class that puts journalism and computer science students in teams to create news apps, MetroVote compares the social media profiles of two political candidates in a race and searches for endorsements. MetroVote was a prototype for the Knight News Innovation Lab project <a href="http://congressionalprimaries.org/">CongressionalPrimaries.org</a>, which won an <a href="http://journalists.org/awards/2012-awards/">Online Journalism Award</a> at the 2012 Online News Association conference.'
      }
    ]
  },
  {
    title: 'The Washington Post <a id="wapo"></a>',
    description: 'As an "embedded IT" intern, I worked on a redesign of blog architecture and wrangled data for a yearlong homicide investigation.',
    date: 'Summer 2012',
    projects: [
      {
        title: 'Homicides in the District',
        link: 'http://apps.washingtonpost.com/investigative/homicides/',
        description: 'I worked with a decade of homicide data in all its stages, from pulling case files at the courthouse to building a SQL database and creating spatial queries. The Post published a <a href="http://www.washingtonpost.com/investigations/as-dc-homicides-decline-murder-still-a-stubborn-crime-to-solve-and-prosecute/2012/10/13/e19132a2-fc23-11e1-a31e-804fccb658f9_story.html" >two</a>-<a href="http://www.washingtonpost.com/investigations/dc-homicides-in-15-percent-of-closed-cases-no-arrests-and-no-trial/2012/10/13/2fb8e5d6-fb8b-11e1-b2af-1f7d12fe907a_story.html">part</a> series based on this data in addition to this interactive map. Kat Downs and Serdar Tumgoren wrote about this project in a <a href="http://source.mozillaopennews.org/en-US/articles/homicides-district/">Source article</a>.',
        img: 'homicides.jpg'
      },
      {
        title: 'Keystone: Down the Line',
        link: 'http://www.washingtonpost.com/blogs/keystone-down-the-line/',
        description: "The Post sent photographers to travel along the controversial Keystone XL pipeline and used their field reports to test using Wordpress in place of its legacy content management system. I worked on the Wordpress site and implemented designs. After this project, the Post transitioned other blogs, including Ezra Klein's Wonkblog, to Wordpress.",
        img: 'keys.png'
      }
    ]
  },
  {
    title: 'WGN-TV <a id="wgn"></a>',
    description: 'I was a web production intern and came into the newsroom before dawn on weekends to clip videos and update the home page with the P2P CMS.',
    date: 'Spring 2012',
  },
  {
    title: 'Narrative Science <a id="ns"></a>',
    description: 'The Northwestern startup had me test automated Spanish translations and generate articles from earnings reports.',
    date: 'Fall 2011'
  },
  {
    title: 'KGO-AM 810 <a id="kgo"></a>',
    description: "I was a web production intern and shadowed reporters, created videos and published radio clips with text summaries on the website.",
    date: 'Summer 2011'
  },
  {
    title: 'KCRA-TV <a id="kcra"></a>',
    description: 'As a digital media intern, I built slideshows, administered a breaking news stream tool and played with Flash.',
    date: 'Summer 2011'
  }
];
