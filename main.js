status = "";

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(380, 380);
    video.hide
}

function start() {
    o_d = ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML = "Status : object detected";
}

function modelLoaded() {
    console.log("model loaded")
}

function draw() {
    image(video, 0, 0, 380, 380)
    if (status != "") {
        o_d.detect(video, getResults)
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : objects detected";
            document.getElementById("n_o_ob").innerHTML = "number of objects : " + objects.length;
            obj_name = objects[i].label;
            obj_con = floor(objects[i].confidence * 100);
            obj_x = objects[i].x;
            obj_y = objects[i].y;
            obj_height = objects[i].height;
            obj_width = objects[i].width;
            fill("#FF0000");
            text(obj_name + "  " + obj_con + "%", obj_x + 10, obj_y + 10);
            noFill();
            stroke("#FF0000");
            rect(obj_x, obj_y, obj_width, obj_height);
        }
    }
}

function getResults(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        objects = r;
    }
}