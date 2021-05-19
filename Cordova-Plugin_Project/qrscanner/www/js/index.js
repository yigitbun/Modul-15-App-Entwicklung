/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    function onDone(err, status){
        if (err) {
            console.error(err);
            // here we can handle errors and clean up any loose ends.
        }
        if (status.authorized) {
            console.log('authorized');
            QRScanner.show();
            QRScanner.scan(displayContents);
            // W00t, you have camera access and the scanner is initialized.
            // QRscanner.show() should feel very fast.

        } else if (status.denied) {
            console.log('denied');
            // The video preview will remain black, and scanning is disabled. We can
            // try to ask the user to change their mind, but we'll have to send them
            // to their device settings with `QRScanner.openSettings()`.
        } else {
            console.log('error');
            // we didn't get permission, but we didn't get permanently denied. (On
            // Android, a denial isn't permanent unless the user checks the "Don't
            // ask again" box.) We can ask again at the next relevant opportunity.
        }
    }

    let scanBtn = document.getElementById('scan');

    scanBtn.addEventListener('click', function() {
        QRScanner.prepare(onDone); // show the prompt
    });

    function displayContents(err, text){
        if(err){
            // an error occurred, or the scan was canceled (error code `6`)
            console.log('error', err);
        } else {
            // The scan completed, display the contents of the QR code:
            console.log(text);
            document.getElementById('output').textContent = text;
            document.getElementById('text').value = text;
            makeCode();
        }
    }
}



document.addEventListener('DOMContentLoaded', init);
var qrcode = undefined;

function init() {
    qrcode = new QRCode("qrcode");
    
    makeCode();

    let input = document.getElementById('text');
    input.addEventListener('input', function(event) {
        makeCode();
    });
}

function makeCode () {    
    var elText = document.getElementById("text");
    
    if (!elText.value) {
        qrcode.makeCode('');
        return;
    }
    qrcode.makeCode(elText.value);
}
