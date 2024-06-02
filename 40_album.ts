
function make_album(artist :string , title: string, tracks?:number){
    let album = {
        artist,
        title,
        tracks
    }
    return album
}

let music = make_album('Talha Anjum','Downers at Dusk')
let music2 = make_album('Travis scott','FEINN',2)
let music3 = make_album('Chahat Fateh Ali Khan','ABCDEHIJKL',69)



console.log(music);
console.log(music2);
console.log(music3);
