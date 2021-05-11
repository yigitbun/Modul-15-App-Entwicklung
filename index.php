<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="style.css" />
    <link rel="manifest" href="manifest.json" />
  </head>
  <body>
    <div id="myDIV" class="header">
      <h2 style="margin: 5px">My To Do List</h2>
      <input type="text" id="myInput" placeholder="Title..." />
      <span onclick="newElement()" class="addBtn">Add</span>
    </div>

    <ul id="myUL">
      <!-- <li>Hit the gym</li>
  <li class="checked">Pay bills</li>
  <li>Meet George</li>
  <li>Buy eggs</li>
  <li>Read a book</li>
  <li>Organize office</li> -->
    </ul>

    <script src="script.js"></script>
    <script type="text/javascript">
      if (navigator.serviceWorker != null) {
        navigator.serviceWorker.register("sw.js").then(function (registration) {
          console.log("Registered events at scope: ", registration.scope);
        });
      }

      fetch("./data.json");

      var statusEl = document.querySelector("#network-status");
      if (!navigator.onLine) {
        statusEl.classList = ["is-offline"];
        statusEl.innerText = "Offline";
      }
    </script>
  </body>
</html>
