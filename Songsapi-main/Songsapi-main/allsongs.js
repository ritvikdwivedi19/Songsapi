const songList=document.getElementById('song-card');
// var form=document.getElementById('form')

// form.addEventListener('submit',function(e){
//   e.preventDefault()
//   var song_name=document.getElementById('song_name').value
//   var genre_song=document.getElementById('genre_song').value
//   var author=document.getElementById('author').value
//   var youtube=document.getElementById('youtube').value
//   song.addSong();
  
  
//  });

const api_url= 'https://sheltered-meadow-41183.herokuapp.com/https://mfc-song-api.herokuapp.com/api/songs/';
async function getapi(url) {
    
  // Storing response
  const response = await fetch(url);
  
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
      // hideloader();
  }
  show(data);
}
// Calling that async function
getapi(api_url);
// function hideloader() {
//   document.getElementById('song_details').style.display = 'block';
//   document.getElementById('genre_song').style.display = 'block';
//   document.getElementById('author').style.display = 'block';
//   document.getElementById('youtube').style.display = 'block';
  
  
// }
function show(data) {
  
  
  // Loop to access all rows 
  let tab="";
  // Setting innerHTML as tab variable
  data.forEach(music => {
    tab+=`
    <div class="song-item">
         <h2 class="city">Song Details</h2>
          
         <div class="name">Name: ${music.name} </div>
         
         <div class="genre">Genre:${music.genre} </div>
         <div class="author">Author: ${music.singer_name}</div>
         <div class="link">Youtube link:<a>${music.youtube_link}</a> </div>

        

     </div> `;
   });
  document.getElementById("song-card").innerHTML = tab;
  
}
