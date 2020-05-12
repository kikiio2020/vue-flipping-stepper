<template>
    <div class="booking-stepper container p-3 text-center">
        <transition name="flipper" mode="out-in">
            <div v-for="idx in numberOfSlots" v-if="step==idx" :key="idx">
                <slot :name="idx"></slot>
            </div>
        </transition>        
            
        <span id="backBtnWrapper">
            <b-button 
                id="backBtn"
                v-on:click="flipBackward"
                class="booking-stepper-btn rounded-circle m-3"
                title="Previous"
                :disabled="!okPrev || noMorePrev"
            >
                <b-icon-skip-end-fill></b-icon-skip-end-fill>
            </b-button>
        </span>
        <b-tooltip target="backBtnWrapper" title="Previous"></b-tooltip>

        <span id="nextBtnWrapper">
            <b-button 
                v-on:click="flipForward"
                class="booking-stepper-btn rounded-circle m-3"
                title="Next"
                :disabled="!okNext || noMoreNext"
            >
                <b-icon-play-fill></b-icon-play-fill>
            </b-button>
        </span>
        <b-tooltip target="nextBtnWrapper" title="Next"></b-tooltip>
                            
        <div class="text-sm-right text-black-50">Powered by Kikiio</div>
    </div>
</template>

<script>
    import { BIconPlayFill, BIconSkipEndFill } from 'bootstrap-vue';

    export default {
        components: {
            BIconPlayFill, BIconSkipEndFill
        },
        model: {
            prop: 'checked',
            event: 'change'
        },
        props: {
            numSteps: {
                default: 1
            }
        },
        data: function () {
            return {
                step: 1,
                numberOfSlots: Number(this.numSteps),
                okNext: true,
                okPrev: true,
                noMoreNext: false,
                noMorePrev: true
            }
        },
        methods: {
            flipForward() {
                this.$emit('flip-forward');
                if (this.step >= this.getNumSlots()) {
                    console.log('no more forward');
                    return;
                }
                this.resetNavControls();
                this.step ++;
                if (this.step >= this.getNumSlots()) {
                    this.noMoreNext = true;
                }
            },
            flipBackward() {    
                if (this.step <= 1) {
                    console.log('no more backward');
                    return;
                }
                //setInterval(() => { this.okNext = true; }, 500);
                this.resetNavControls();
                this.step --; 
                if (this.step <= 1) {
                    this.noMorePrev = true;
                }
            },
            getNumSlots: function() {
                return Object.keys(this.$slots).length;
            },
            resetNavControls: function() {
                this.noMoreNext = false;
                this.noMorePrev = false;
                this.okNext = true;
                this.okPrev = true;
            }
        },
        beforeCreate() {
            console.log('before create');
        },
        created() {
            console.log('BookingStepper created.'); 
        },
        mounted() {
            console.log('BookingStepper mounted.');            
        }
    }
</script>

<style>

.flipper-enter-active, .flipper-leave-active {
    transition: transform 0.5s ease-in-out;
}
.flipper-enter, .flipper-leave-to {
    transform: rotateY(90deg);
    z-index: 0;
}

.booking-stepper {
    border-radius: 25px;
    border: 2px solid #73AD21;
    padding: 20px;
    min-width: 320px;
    min-height: 150px;
}
.booking-stepper-btn {
    border-color: #73AD21;
    border-width: medium;
    color: #73AD21;
    background-color: #ffffff;
}
.booking-stepper-btn:hover {
    color: #ffffff;
    border-color: #73AD21;
    background-color: #73AD21;
}
.booking-stepper-btn:disabled {
    border-color: #acbc95;
    color: #707a63;
    background-color: #e5e5e5;
    cursor: no-drop;
}
</style>