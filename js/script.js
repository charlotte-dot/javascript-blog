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
    optArticleTagsSelector = '.post-tags .list';

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

  // eslint-disable-next-line no-inner-declarations
  function generateTags() {
    let html = '';
    /* find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    /* START LOOP: for every article: */
    for (let article of articles) {
      let wrapperTag = article.querySelector(optArticleTagsSelector);
      const articleTags = article.getAttribute('data-tags');
      console.log();
      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);
      for (let tag of articleTagsArray) {
        console.log(tag);
        const linkHTML2 = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        html = html + linkHTML2;
      }
      wrapperTag.html();
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
      tagLinks = document.querySelector(tag);

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