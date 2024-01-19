async function handleNextImg(x,y, imglink){
    const rect = img.getBoundingClientRect();
    const x = parseInt(event.clientX - rect.left);
    const y = parseInt(event.clientY - rect.top);

    alert(`Clicked coordinates - X: ${x}, Y: ${y}`);
    // document.getElementById(coordDisplayId).innerText = `X: ${x}, Y: ${y}`;

    const fileInput = document.getElementById(`uploadInput${containerId === 'Upload' ? '1' : '2'}`);
    const file = fileInput.files[0];

    const formdata = new FormData();
    formdata.append("image", file, "base_image.png");
    formdata.append("point", `${x},${y}`);

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    let response = null;
    try {
        response = await fetch("http://18.189.132.140:4000/process_image", requestOptions);
    } catch (error) {
        console.error(error);
    }

    
        
}