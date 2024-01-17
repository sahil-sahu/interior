async function blobUrlToFile(blobUrl, fileName) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new File([blob], fileName, { type: blob.type });
  }

export function handleImageUpload(event, containerId, imgId, coordDisplayId, maskedImageId) {
    const img = document.getElementById(imgId);
    img.src = URL.createObjectURL(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));

    img.addEventListener('load', function () {
        const container = document.getElementById(containerId);

        container.addEventListener('click', function (event) {
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

            fetch("http://18.189.132.140:4000/process_image", requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }
                    return response.blob();
                })
                .then(result => {
                    
                    console.log("Hi" ,result);
                    const maskedImage = URL.createObjectURL(result);
                    const processedImg = document.getElementById(maskedImageId);
                    processedImg.src = maskedImage;

                    if (containerId === 'Upload2') {
                        const tempImg = new Image();
                        tempImg.src = maskedImage;
                        tempImg.onload = function () {
                            processedImg.style.width = img.width;
                            processedImg.style.height = img.height;
                            synthesizeImages('uploadedImage', 'maskedImage', 'uploadedImage2', 'maskedImage2');
                        };
                    }
                })
                .catch(error => alert('Error:', error));
        });
    });
}

export async function synthesizeImages(uploadedImage, maskedImage, uploadedImage2, maskedImage2) {
    const fileInput1 = document.getElementById('uploadInput1');
    const fileInput2 = document.getElementById('uploadInput2');
    const maskBlob1 = document.getElementById('maskedImage')?.src;
    const maskBlob2 = document.getElementById('maskedImage2')?.src;

    const baseImage = fileInput1.files[0];
    const refImage = fileInput2.files[0];

    const baseMask = await blobUrlToFile(maskBlob1, 'image.jpg');
    const refMask = await blobUrlToFile(maskBlob2, 'ref_mask.jpg');
    const img = document.getElementById("uploadedImageR");;
    img.src = URL.createObjectURL(baseImage);
    URL.createObjectURL(baseImage);
    const formdata = new FormData();
    formdata.append("base_image", baseImage, "base_image.png");
    formdata.append("base_mask", baseMask, "base_mask.png");
    formdata.append("ref_image", refImage, "ref_image.png");
    formdata.append("ref_mask", refMask, "ref_mask.png");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://18.189.132.140:5000/synthesize", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.blob();
        })
        .then(result => {
            const img = document.getElementById("resultImage");;
            img.src = URL.createObjectURL(result);
            // img.height = 60;
            // img.onload = () => {
            //    URL.revokeObjectURL(img.src);
            // };
            // document.getElementById('container').appendChild(img)
            // let mySrc;
            // const reader = new FileReader()
            // reader.readAsDataURL(result)
            // reader.onloadend = createImageFromBase64

            
            // console.log(result)
            
            // const synthesizedImage = URL.createObjectURL(result);
            // console.log("Hello", synthesizedImage);

        //     // Display the synthesized image after maskedImage2 is rendered
        //     //const processedImg2 = document.getElementById(maskedImage2);
        //     // processedImg2.onload = function () {
        //         alert("MaskedImage2 loaded successfully");
                //  const newImg = new Image();
                // document.getElementById("FinalImage").setAttribute("src",synthesizedImage)
                 
                //  newImg.height = "30px";
                //  newImg.width = "40px";
                //  document.body.appendChild(newImg);
                //   newImg.onload = function () {
                //     newImg.style.height = "20px";
                //     newImg.style.width = "30px";
        //             alert("Synthesized image loaded successfully");
        //             // Append the synthesized image to a container (change the containerId accordingly)
                    //  const container = document.getElementById('FinalImage');
                    
                    
                    //  container.appendChild(newImg);
                //    };
        //     };
        })
        .catch(error => alert('Error:', error));
}

export function whenLoaded() {
    


    const createImageFromBase64 = function () {
        const img = document.createElement('img')
        img.src = this.result
        document.getElementById('container').appendChild(img)

    }
    

    document.getElementById('uploadInput1').addEventListener('change', function (event) {
        handleImageUpload(event,'Upload', 'uploadedImage', 'coordDisplay', 'maskedImage');
    });

    document.getElementById('uploadInput2').addEventListener('change', function (event) {
        handleImageUpload(event,'Upload2', 'uploadedImage2', 'coordDisplay2', 'maskedImage2');
    });
}