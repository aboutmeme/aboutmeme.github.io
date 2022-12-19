let CommentForm = document.querySelector('.comment-form');
let CommentList = document.querySelector('.comment-list');
let CommentField = document.querySelector('.comment-field');



CommentForm.onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('li');
newComment.textContent = CommentField.value;
CommentList.append(newComment);
  
  };
  