$(document).ready(function () {

  $('#hambergur-btn').on('click', function () {
    $('#wrap').toggleClass('menu-opend');
  })
  $('#close-sidenav-btn').on('click', function () {
    $('#wrap').toggleClass('menu-opend');
  })
  var testData = {
    title: '靈感隨手記',
    marked: true,
    content: '靈感總是說來就來，所以就隨手記一下'
  }
  var articleArray = [];
  var article = {
    title: '',
    marked: false,
    content: ''
  }
 

  articleArray.push(testData);
  console.log(articleArray);
  console.log(articleArray.length);
  function makeArticleList () {
    for(let i=0; i<articleArray.length; i++) {
      var articleTemplate =+ `<li>
        <h4>${articleArray[i].title}</h4>
        <p>${articleArray[i].content}</p>
      </li>`
    }
    return articleTemplate;
  }
  var template = makeArticleList();
  $('#main-content').append(template);  








});