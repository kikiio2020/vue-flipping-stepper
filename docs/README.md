# vue-flipping-stepper
A simple stepper that rotates horizontally between steps. Add any number of components, and specify the number of steps. Pass in a v-model to control the which is the next step. Back step will follow the same path it came from. 

The package works on apps with Bootstrap-Vue.

## Getting Started

#### NPM
``` bash
npm install @kikiio2020/vue-flipping-stepper
```

#### CDN
``` bash
```

## Basic Example

<img src="https://www.dropbox.com/s/gen0byhvkl0dy9f/flipping-stepper-basic-screen1.png?raw=1">

``` js
<flipping-stepper num-steps="2">
	<template v-slot:1>
		<div class="m-5 p-5">Slot ONE</div>
	</template>
	<template v-slot:2>
		<div class="m-5 p-5">Slot TWO</div>
	</template>
</flipping-stepper>
```
**Note:** Named-slot names must be integer indicating its position. 

More [examples](/#more-examples) below.

## Prerequisites

The package depends on Bootstrap-Vue

## More Examples

#### Changing Border Color
``` js{1}
<flipping-stepper num-steps="2" theme-color="red">
	<template v-slot:1>
		<div class="m-5 p-5">Slot ONE</div>
	</template>
	<template v-slot:2>
		<div class="m-5 p-5">Slot TWO</div>
	</template>
</flipping-stepper>
```
Change the border color of the container and the buttons via the `theme-color` prop. 


#### Skipping to Specified Slot
``` js{1}
<flipping-stepper num-steps="3" v-model="step">
	<template v-slot:1>
		<div class="m-5 p-5">
			Slot ONE
			<button @click="step.nextStep=3">Skip to THREE</button>
		</div>
	</template>
	<template v-slot:2>
		<div class="m-5 p-5">Slot TWO</div>
	</template>
	<template v-slot:3>
		<div class="m-5 p-5">Slot THREE</div>
	</template>
</flipping-stepper>
<script>
export default {
	data: function () {
		return {
			step:{
				nextStep: null
			}
		}
	}
}
</script>
```
When the value object is provided you can change which slot to go next by changing its nextStep property. Backward action will follow the path where it came from.   

## Props
|Prop|Type|Default|Required|Description|
|---|---|---|---|---|
|num-steps|Number|-|Yes|Total number of steps|
|value|Object {nextStep: Number}|{nextStep: Null}|No|An object currently with only one property to specify the next step to go to|
|theme-color|String|#73AD21|No|Specifies the border color of container and the buttons|

## Events
|Event|Description|
|---|---|
|flip-forward|Emitted when stepping forward|
|flip-backward|Emitted when stepping backward|


## Built With

* [Bootstrap-Vue](https://bootstrap-vue.org/)
* [Bootstrap](https://getbootstrap.com/)

## Authors

* [**Daniel 'Kikiio' Leung**](https://kikiio.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

