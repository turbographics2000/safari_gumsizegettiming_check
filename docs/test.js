vid.onloadstart = evt => console.log('onloadstart');
vid.ondurationchange = evt => console.log('ondurationchange');
vid.onloadedmetadata = evt => console.log('onloadedmetadata');
vid.onloadeddata = evt => console.log('onloadeddata');
vid.onprogress = evt => console.log('onprogress');
vid.oncanplay = evt => console.log('oncanplay');
vid.oncanplaythrough = evt => console.log('oncanplaythrough');

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    vid.oncanplaythrow
    vid.srcObject = stream;
});

var rafId = null;
function sizeCheck() {
    rafId = requestAnimationFrame(sizeCheck);
    if (vid.videoWidth) {
        console.log(vid.videoWidth + ' x ' + vid.videoHeight);
        cancelAnimationFrame(rafId);
    }
}
sizeCheck();