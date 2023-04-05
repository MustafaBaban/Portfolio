<template>
    <div name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

               
                    <div class="close-button" @click="close()">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                        </div>

                    <div class="modal-body">
                        <!-- use a default slot for the body -->
                        <slot></slot>

                    </div>

                    <div class="modal-footer">
                        <!-- use a named slot for the footer -->
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    // use props to pass data from parent component
    props: {
        title: String,
        message: String
    },
    // use options API to define methods and data
    methods: {
        // emit a close event when user clicks on modal mask or close button
        close() {
            this.$emit("close");
        }
    },
};
</script>
  
<style scoped>
.close-button {
    position: absolute;
    top: 20px;
    right: 10px;
    /* margin-left: auto; */
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.bar1,
.bar2 {
    position: absolute;
    width: 15px;
    height: 2px;
    background-color: black;
}

.bar1 {
    transform: rotate(45deg);
}

.bar2 {
    transform: rotate(-45deg);
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
}

.modal-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    border: black solid 1px;
}

.modal-container {
    position: relative;
    width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
}

.modal-header h3 {
    display: flex;
    margin-top: 0;
    font-size: 3em;
}

.modal-body {
    font-size: 2em;
    margin-top: -10px;
}

.modal-footer button {
    float: right;
}
</style>