function make_album(artist : string, title:string, tracks?: number) {
    const album: {artist : string, title:string, tracks?: number}= {
        artist : artist,
        title : title
    }
    if (tracks !== undefined){
        album.tracks = tracks
    }

    return album
}

const album1 = make_album( 'album1', 'album title 1')

const album2 = make_album( 'album2', 'album title 2')

const album3 = make_album( 'album3', 'album title 3', 69)

console.log(album1)
console.log(album2)
console.log(album3)