/* eslint-disable no-buffer-constructor */

module.exports = {
    pauseForCssAnimations() {
		browser.pause(300)
	},

	clickElement(element) {
		expect(element).toExist()
		expect(element).toBeClickable()
		element.click()
		this.pauseForCssAnimations()
	},

	clickSetValue(element, elementValue) {
		this.clickElement(element)
		element.setValue(elementValue)
	},

	setValueToElement(element, value) {
		expect(element).toExist()
		element.setValue(value)
	},

	selectDropdown(sddElement, ddElement) {
		this.clickElement(sddElement)
		expect(ddElement).toBeDisplayed()
		ddElement.click()
	},

	getTextFromElement(element) {
		expect(element).toExist()
		return element.getText()
	}
}