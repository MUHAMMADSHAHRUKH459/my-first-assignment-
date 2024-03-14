// Question Number 40

function make_album (artist : string, title : string, tracks? : number):
{artist : string, title : string, track? : string} {
   let album : {artist : string, title : string, tracks? : number} = {
      artist : artist,
      title : title
   }

   if (tracks) {
      album.tracks = tracks;
   }
   return album
}

let album1 = make_album('Arijith Singh','Kessariya');
let album2 = make_album('Honey Singh','Kalstar',12);
let album3 = make_album('K.k','Ha tu hai');

console.log(album1);
console.log(album2);
console.log(album3);
