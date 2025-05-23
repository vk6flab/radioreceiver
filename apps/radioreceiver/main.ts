import "../../src/apps/radioreceiver/main";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("offline.js");
}
