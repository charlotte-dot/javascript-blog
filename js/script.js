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
    console.log(generateTitleLinks);
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

  }

  generateTitleLinks();

  function calculateTagsParams(tags) {}
  function calculateTagClass(count, params) {}

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
        articleTagstList.innerHTML = html;
      }

      /* [NEW] find list of tags in right column */
      const tagList = document.querySelector(optTagsListSelector);

      const params = {
        min: '0',
        max: '999'
      };
      const tagsParams = calculateTagsParams(allTags);
      console.log('tagsParams:', tagsParams)

      for (let tag in tags) {
        console.log(tag + ' is used ' + tags[tag] + ' times');
        if (tags[tag] > params.max) {
          params.max = tags[tag];
        }
        if (tags[tag] < params.min) {
          params.min = tags[tag];
        }
      }
      const normalizedCount = count - params.min;
      const normalizedMax = params.max - params.min;
      const percentage = normalizedCount / normalizedMax;
      const classNumber = Math.floor( percentage * (optCloudClassCount - 1) + 1 );
      calculateTagClass (optCloudClassPrefix, classNumber)

      /* [NEW] create variable for all links HTML code */
      let allTagsHTML = '';

      /* [NEW] START LOOP: for each tag in allTags: */
      for (let tag in allTags) {
        /* [NEW] generate code of a link and add it to allTagsHTML */
        const tagLinkHTML = '<li><a href="#' + tag + calculateTagClass(allTags[tag], tagsParam) + '</a></li>';
        console.log('tagLinkHTML:', tagLinkHTML);
        allTagsHTML += tagLinkHTML;
      }
      /* [NEW] END LOOP: for each tag in allTags: */

      /*[NEW] add HTML from allTagsHTML to tagList */
      tagList.innerHTML = allTagsHTML;
      return params;
    }
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
      const href = clickedElement.getAttribute('href');

      /* make a new constant "tag" and extract tag from the "href" constant */
      const tag = href.replace('#tag-', '');

      /* find all tag links with class active */
      const tagLinks = document.querySelectorAll('.active');

      /* START LOOP: for each active tag link *//* remove class active */
      for (let tag of tagLinks) {
        tag.classList.remove('active');

        /* END LOOP: for each active tag link *//* find all tag links with "href" attribute equal to the "href" constant */
        for (let tag of tagLinks) {
          tag = document.querySelector(href);
        }
      }
      /* START LOOP: for each found tag link */    /* add class active */
      for (let tag of tagLinks) {
        tag.classList.add('active');

        /* END LOOP: for each found tag link *//* execute function "generateTitleLinks" with article selector as argument */
        for (let tag of tagLinks) {
          generateTitleLinks('[data-tags~="' + tag + '"]');
        }
      }

      function addClickListenersToTags() {

        /* find all links to tags */
        tagLinks = document.querySelector(tag) 

        /* START LOOP: for each link */  /* add tagClickHandler as event listener for that link */
        for (let tagLink of tagLinks) {
          tagLink.addEventListener('click', addClickListenersToTags);
        }
        /* END LOOP: for each link */
      }

      addClickListenersToTags();

      const optArticleAuthorSelector = '.list .authors';

      function generateAuthors() {
        let html = '';
        const authors = document.querySelectorAll(optArticleAuthorSelector)

        for (let author of authors) {
          const authorName = article.getAttribute('author-name');
          const linkHTML3 = '<li><a href="#">' + authorName + '</a></li>';
          html = html + linkHTML3;
        }
      }
      optArticleAuthorSelector();

      function addClickListenersToAuthors() {

        authors = document.querySelector(author);

        for (let author of authors) {
          author.addEventListener('click', addClickListenersToAuthors);
        }
      }
      addClickListenersToAuthors();

      function authorClickHandler(event) {

        event.preventDefault();

        const clickedElement = this;

        const href = clickedElement.getAttribute('href');

        const author = href.replace('#', '');

        const authors = document.querySelectorAll('active');

        for (let author of authors) {
          author.classList.remove('active');

          for (let author of authors) {
            author = document.querySelector(href);
          }
        }
        for (let author of authors) {
          author.classList.add('active');

          for (let author of authors) {
            generateAuthorLinks('[author-name="' + author + '"]');
          }
        }
        authorClickHandler();
      }
    }