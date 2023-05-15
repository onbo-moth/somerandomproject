/**
 * Creates a new element for a console.
 */
class ConsoleHTMLElement {
  /**
   * Creates a new element for a console.
   * 
   * @param {HTMLElement} parent
   * 
   * @returns {HTMLDivElement} Console HTML Element to work on.
   */
  constructor(parent){
    this.streams = new ConsoleStreams()

    this.element = document.createElement("div")
    this.element.classList.add("StandardConsoleDiv")

    this.text = document.createElement("pre")
    this.text.classList.add("StandardConsoleText")

    this.input = document.createElement("textarea")
    this.input.classList.add("StandardConsoleInput")


    this.text.innerText = "Hello World!"

    this.element.appendChild(this.text)
    this.element.appendChild(this.input)

    this.element.tabIndex = 0

    this.streams.in.out(function(key){
      console.log(key)
    })

    this.element.addEventListener("focus", this.focusToInput.bind(this))
    this.input.addEventListener("keydown", this.processKeyDown.bind(this))

    parent.appendChild(this.element)
  }

  /**
   * Sends the key pressed to other functions.
   * @param {KeyboardEvent} event 
   */
  processKeyDown(event) {
    this.streams.in.in(event.key)
    this.input.value = ""
  }

  /**
   * Focus to the input. Used to redirect focus from div.
   */
  focusToInput(){
    this.input.focus()
  }
}