export default function (): Element {
  var container = this.target.appendChild(document.createElement("div"))
  container.classList.add("speckle-landing")

  var img = document.createElement("div")
  img.classList.add("speckle-logo")
  container.appendChild(img)

  var subtext = document.createElement("p")
  subtext.classList.add("heading")
  subtext.textContent = "PowerBI 3D Viewer"
  container.appendChild(subtext)

  var tipContainer = document.createElement("div")
  tipContainer.classList.add("tip-container")

  var tip = document.createElement("p")
  tip.textContent = "Getting started 💡"
  tip.classList.add("tip")
  tipContainer.appendChild(tip)

  var instructions = document.createElement("p")
  instructions.classList.add("instructions")
  instructions.textContent =
    "Please connect the Stream ID and Object ID fields."
  tipContainer.appendChild(instructions)

  var instructions2 = document.createElement("p")
  instructions2.classList.add("instructions")
  instructions2.textContent =
    "Optionally, connect the 'Object Data' field to color the objects by a value"
  tipContainer.appendChild(instructions2)

  var instructions2 = document.createElement("p")
  instructions2.classList.add("instructions")
  instructions2.classList.add("docs")
  instructions2.innerHTML =
    "For more info, check our docs page <b>https://speckle.guide</b>"
  tipContainer.appendChild(instructions2)

  container.appendChild(tipContainer)
  return container
}
