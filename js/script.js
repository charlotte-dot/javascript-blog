{
  const titleClickHandler = function (event) {
    event.preventDefault();

    const clickedElement = this;
    console.log('Link was clicked!');

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active')
    console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    console.log('Link was clicked!');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    targetArticle = document.querySelector(articleSelector);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active')
    console.log('targetArticle:', targetArticle);
  }

  const links = document.querySelectorAll('.titles a');
  for (const link of links) {
    link.addEventListener('click', titleClickHandler)
  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optTagsListSelector = '.tags.list',
    optCloudClassCount = '5',
    optCloudClassPrefix = 'tag-size-';

  function generateTitleLinks(customSelector = '') {

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';


    /* for each article */
    let html = '';
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    for (let article of articles) {
      const articleId = article.getAttribute('id');
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      html = html + linkHTML;
    }
    /* [DONE]get the article id */

    /* [DONE]find the title element */

    /* [DONE]get the title from the title element */

    /* [DONE]create HTML of the link */

    /* [DONE]insert link into titleList */

    titleList.innerHTML = html

  }

  generateTitleLinks();

  function calculateTagsParams(tags) {
    const params = {
      min: '999',
      max: '0'
    };

    for (let tag in tags) {
      console.log(tag + ' is used ' + tags[tag] + ' times');
      if (tags[tag] > params.max) {
        params.max = tags[tag];
      }
      if (tags[tag] < params.min) {
        params.min = tags[tag];
      }
    }

    return params
  }

  function calculateTagClass(count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );

    return optCloudClassPrefix + classNumber;
  }

  function generateTags() {

    let html = '';

    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};

    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* START LOOP: for every article: */
    for (let article of articles) {

      const articleTagstList = article.querySelector(optArticleTagsSelector);
      const articleTags = article.getAttribute('data-tags');
      const articleTagsArray = articleTags.split(' ');

      for (let tag of articleTagsArray) {
        console.log(tag);

        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        html = html + linkHTML;
      
        /* [NEW] check if this link is NOT already in allTags */
        if (!allTags[tag]) {
          /* [NEW] add tag to allTags object */
          allTags[tag] = 1;
        } else {
          allTags[tag]++;
        }

      }
      articleTagstList.innerHTML = html;
    }

      /* [NEW] find list of tags in right column */
      const tagList = document.querySelector(optTagsListSelector);
      const tagsParams = calculateTagsParams(allTags); //{ min: 1, max: 100 }

      /* [NEW] create variable for all links HTML code */
      let allTagsHTML = '';

      /* [NEW] START LOOP: for each tag in allTags: */
      for (let tag in allTags) {
        /* [NEW] generate code of a link and add it to allTagsHTML */
        const tagLinkHTML = '<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '">' + tag + '</a></li>';
        allTagsHTML += tagLinkHTML;
      }
      /* [NEW] END LOOP: for each tag in allTags: */

      /*[NEW] add HTML from allTagsHTML to tagList */
      tagList.innerHTML = allTagsHTML;
  }


    generateTags();
    /* [DONE]find tags wrapper */

    /* [DONE]make html variable with empty string */

    /* [DONE]get tags from data-tags attribute */

    /* [DONE]split tags into array */

    /* [DONE]START LOOP: for each tag */

    /* [DONE]generate HTML of the link */

    /* [DONE]add generated code to html variable */

    /* [DONE]END LOOP: for each tag */

    /* [DONE?]insert HTML of all the links into the tags wrapper */

    /* [DONE]END LOOP: for every article: */

    // eslint-disable-next-line no-inner-declarations

    function tagClickHandler(event) {

      /* prevent default action for this event */
      event.preventDefault();

      /* make new constant named "clickedElement" and give it the value of "this" */
      const clickedElement = this;

      /* make a new constant "href" and read the attribute "href" of the clicked element */
      const href = clickedElement.getAttribute('href'); //#tag-cat

      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', ''); //#tag-cat -> cat

      /* find all tag links with class active */
      const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

      /* START LOOP: for each active tag link *//* remove class active */
      for (let tag of tagLinks) {
        tag.classList.remove('active');
      }


      /*find all tag links with "href" attribute equal to the "href" constant */
      const tagRelatedLinks = document.querySelectorAll('a[href="#tag-' + tag + '"]');
      for (let tag of tagRelatedLinks) {
        tag.classList.add('active')
      }
      
      generateTitleLinks('[data-tags~="' + tag + '"]');

      }

      function addClickListenersToTags() {

        /* find all links to tags */
        const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

        /* START LOOP: for each link */  /* add tagClickHandler as event listener for that link */
        for (let tagLink of tagLinks) {
          tagLink.addEventListener('click', tagClickHandler);
        }
        /* END LOOP: for each link */
      }

      addClickListenersToTags();

      const optArticleAuthorSelector = '.list .authors'; 

      function generateAuthors() {

        let html = '';
        let allAuthors = {};
    
        const authors = document.querySelectorAll(optArticleAuthorSelector);
    
        for (let author of authors) {
  
            const authorName = authors.getAttribute('author-name');
            const linkHTML = '<li><a href="#">' + authorName + '</a></li>';
            html = html + linkHTML;
          

            if (!allAuthors[author]) {
              allAuthors[author] = 1;
            } else {
              allAuthors[author]++;
            }
          }
        }
          authorName.innerHTML = html;
      }
    
        generateAuthors();

        function authorClickHandler(event) {
          event.preventDefault();
    
          const clickedElement = this;
    
          const href = clickedElement.getAttribute('href'); 
    
          const author = href.replace('#', ''); 
    
          const authorLinks = document.querySelectorAll('a.active[href^="#"]');
    
          for (let author of authorLinks) {
            author.classList.remove('active');
          }

        }

        function addClickListenersToAuthors() {

          const authorLinks = document.querySelectorAll('a[href^="#"]');
  
          for (let authorLink of authorLinks) {
            authorLink.addEventListener('click', authorClickHandler);
          }

        }
  
        addClickListenersToAuthors();

}