import { powerOnModalClosing } from "./close.js"
import { powerOnModalInputs } from "./changeScore.js"

export function modalPowerOn() {
	powerOnModalClosing()
	powerOnModalInputs()
}