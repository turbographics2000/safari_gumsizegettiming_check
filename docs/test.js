navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    vid.srcObject = stream;
});

function sizeCheck() {
    requestAnimationFrame(sizeCheck);
    if (vid.videoWidth) {
        console.log(vid.videoWidth + ' x ' + vid.videoHeight);
    }
}
sizeCheck();