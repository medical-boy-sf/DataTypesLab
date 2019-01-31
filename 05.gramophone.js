function gramophone(nameBand, nameAlbum, songName) {
    let nameBandLength = nameBand.length;
    let nameAlbumLength = nameAlbum.length;
    let songNameLength = songName.length;
    let songDuration = (nameAlbumLength * nameBandLength) * songNameLength / 2;
    let numberRotates = Math.ceil(songDuration / 2.5);
    console.log(`The plate was rotated ${numberRotates} times.`);
}
