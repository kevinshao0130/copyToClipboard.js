const copyToClipboard = text => {
  const userAgent = window.navigator?.userAgent
  if (/iPad|iPhone|iPod/.test(userAgent)) { // for iOS devices
    navigator.clipboard.writeText(text)
  } else {
    const inputElement = document.createElement('input')
    document.body.appendChild(inputElement)
    inputElement.value = text
    inputElement.setSelectionRange(0, 99999) // for mobile devices
    inputElement.select()
    document.execCommand('copy') // deprecated but still working
    document.body.removeChild(inputElement)
  }
}

module.exports = copyToClipboard
