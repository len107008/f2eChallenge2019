$(document).ready(function () {
  var noteBook = {
    init: function() {
      let me = this;
      console.log(me);
      me.notesList = JSON.parse(localStorage.getItem('localNoteBook')) || [];
      console.log('notesList', me.notesList);
      let $addNoteBtn = $('#add-note');
      let $hambergurBtn = $('#hambergur-btn');
      let $closeSidenavBtn = $('#close-sidenav-btn');
      let $previewPageBtn = $('#preview-btn');
      let $submitNewnoteBtn = $('#submit-newnote');

      $hambergurBtn.on('click', function () {
        $('#wrap').toggleClass('menu-opend');
      });
      $closeSidenavBtn.on('click', function () {
        $('#wrap').toggleClass('menu-opend');
      });

      $addNoteBtn.on('click', function() {
        $('#wrap').toggleClass('add-note-mode');
      })
      $previewPageBtn.on('click', function(){
        $('#wrap').toggleClass('add-note-mode');
      })

      console.log(me.notesList);


      me._updateData(me.notesList);
      $submitNewnoteBtn.on('click', me._addNote);

    },
    _updateData: function(item) {
      let noteArray = item;
      console.log(noteArray);
      localStorage.setItem('localNoteBook', JSON.stringify(item));
      for (let i=0; i<noteArray.length; i++) {
        let mark = (noteArray[i].marked == 'true') ? true : false;
        let template = `<li class="note-block" data-index="${i}">
                          <h4 class="note-title">${ item[i].title }</h4>
                          <span class="material-icons star" data-marked="${ mark }"></span>
                          <p class="note-context">${ item[i].content }</p>
                        </li>`;
        $('#notes-wall').append(template);
        console.log(noteArray[i]);
      }

    },
    _addNote: function() {
      let getForm = $('#main-content .container.mode-add form');
      let form = {
        title: getForm.find('label[for=title] input').val(),
        marked: false,
        context: getForm.find('textarea').val()
      }
      
      let testData = { 
        title: '123',
        marked: true,
        content: '靈感總是說來就來，所以就隨手記一下~草當主題 花當主題 天空主題'
      }

      form = testData;
      (noteBook.notesList).push(form);
      noteBook._updateData(noteBook.notesList);
    },
    _addsidenavBtnListener: function(item){
      item.on('click', function() {
        $('#wrap').toggleClass('menu-opened');
      })
    }
  }
  noteBook.init();

  // define how marked icons works on click
  
  // $('.material-icons.star').on('click', function(){
  //   let marked = ($(this).attr('data-marked') == 'true') ? true : false;
  //   let index = $(this).parent().attr('data-index');
  //   marked = !marked;
  //   $(this).attr('data-marked', marked);
  //   notesList[index].marked = marked;
  //   console.log('現在的狀態', notesList[index]);  
  // });

  // $('.note-block').on('click', function(){
  //   $('#wrap').addClass('show-note');
  // })



});