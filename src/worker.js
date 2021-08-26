// jsQR is concatenated by gulp

self.addEventListener('message', function(e) {
  var decoded = jsQR(
    e.data.data,
    e.data.width,
    e.data.height,
    {
  inversionAttempts: "attemptBoth",
}
  )
  if (decoded) {
    postMessage(decoded.data)
  } else {
    postMessage(null)
  }
})
