// Like, Dislike, Nothing come from Preloaded
function likeOrDislike(buttons) {
    let res = 'Nothing';
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i] === res) {
            res = 'Nothing'
        } else {
            res = buttons[i]
        }
    }
    return res;
}
console.log(likeOrDislike(["Dislike"]));
console.log(likeOrDislike(["Like"]));
console.log(likeOrDislike(["Like","Like"]));
console.log(likeOrDislike(["Like","Like", "Like"]));
console.log(likeOrDislike(["Dislike","Like"]));
console.log(likeOrDislike(["Like","Like","Dislike","Like","Like","Like","Like","Dislike"]));
console.log(likeOrDislike(["Like","Dislike","Dislike"]));
