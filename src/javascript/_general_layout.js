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
    content: '靈感總是說來就來，所以就隨手記一下~草當主題 花當主題 天空主題'
  }
  var notesList = [];
  var note = {
    title: '',
    marked: false,
    content: ''
  }
 

  notesList.push(testData);
  notesList.push(testData);

  var noteBlock = '';

  function makeArticles(item) {
    for(let i=0; i<item.length; i++){
      console.log(item[i].title);
      noteBlock = `
      <li class="note-block" data-index="${i}">
        <h4 class="note-title">${item[i].title}</h4>
        <span class="material-icons star" data-marked="${item[i].marked}"></span>
        <p class="note-context">${item[i].content}</p>
      </li>`;
      $('#notes-wall').append(noteBlock);
    }
  }

  makeArticles(notesList);
  console.log(noteBlock);

  // define how marked icons works on click
  
  $('.material-icons.star').on('click', function(){
    let marked = ($(this).attr('data-marked') == 'true') ? true: false;
    let index = $(this).parent().attr('data-index');
    marked = !marked;
    $(this).attr('data-marked', marked);
    notesList[index].marked = marked;
    console.log('現在的狀態', notesList[index]);  
  });

  $('.note-block').on('click', function(){
    $('#wrap').addClass('show-note');
  })



});