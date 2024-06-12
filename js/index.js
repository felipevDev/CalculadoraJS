import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleClearButton, handleTyping, handlesButtonPress } from "./keyHandles.js"
import themeSwitch from "./themeSwitch.js"

document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    charKeyBtn.addEventListener('click', handlesButtonPress)
})

document.getElementById('clear').addEventListener('click', handleClearButton)
document.getElementById('input').addEventListener('keydown', handleTyping)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitch)


