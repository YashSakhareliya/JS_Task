const URL = "https://teachablemachine.withgoogle.com/models/81xeogBkj/";

let model, webcam, labelContainer, maxPredictions;
let isProcessing = false; // Prevents multiple detections at the same time

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load the model and metadata
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Setup webcam
    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    // Append webcam to DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);

    // Create label container
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    if (!isProcessing) {
        webcam.update();
        await predict();
    }
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    let resultContainer = document.getElementById("result-container");
    let foundMatch = false;

    for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const probability = prediction[i].probability.toFixed(2);

        // Display predictions
        labelContainer.childNodes[i].innerHTML = `${className}: ${(probability * 100).toFixed(2)}%`;

        // Match with probability > 0.8
        if (probability > 0.9 && !isProcessing) {
            foundMatch = true;
            isProcessing = true;

            resultContainer.innerHTML = `
                <div style="color: #2ecc71; background-color: #dff0d8; padding: 20px; border-radius: 10px;">
                    Welcome <b>${className}</b>!
                </div>
            `;

            // Reset after 10 seconds
            setTimeout(() => {
                resultContainer.innerHTML = "";
                isProcessing = false;
            }, 5000);
            break;
        }
    }

    if (!foundMatch && !isProcessing) {
        resultContainer.innerHTML = `
            <div style="color: #e74c3c; background-color: #f2dede; padding: 20px; border-radius: 10px;">
                Person Not Found!
            </div>
        `;

        // Reset after 10 seconds
        setTimeout(() => {
            resultContainer.innerHTML = "";
            isProcessing = false;
        }, 10000);
    }
}
