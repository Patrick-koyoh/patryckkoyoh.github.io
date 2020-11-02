var image_tracker ='foto/Profile Photo.jpg'
function change() {
    var image = document.getElementById('profile_pic')
    if(image_tracker==='foto/Profile Photo.jpg') {
        image.src = 'foto/Facebook.jpg'
        image_tracker = 'foto/Profile Photo.jpg'
    }
    else{
        image.src = 'foto/Facebook.jpg'
        image_tracker = 'foto/Profile Photo.jpg'
    }
    image.src = 'foto/Facebook.jpg'
}

function changecolor(id) {
    document.body.style.background = document.getElementById(id).innerHTML
}