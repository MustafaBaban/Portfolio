<template>
    <div>
        <transition name="modal">
            <div v-if="showModal" class="modal-overlay" @click.self="closeModal()">
                <div class="modal-container">
                    <div class="modal-header">
                        <!-- <h3>Project Details</h3> -->
                        <h1 class="DetailsMainTitle">{{ title }}</h1>
                
                        <button @click="closeModal()" class="close-button">&times;</button>
                    </div>
                    <div class="modal-body">
                        <!-- Add a slot for content from the parent component -->
                        <div v-html="htmlContent"></div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script>
export default {
    props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Project Details",
    },
    htmlContent: {
      type: String,
      default: "",
    },
  },
    data() {
        return {
            // showModal: false,
        };
    },
    methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
  
<style scoped>


img{
    border: solid 1px #818181;
}
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-container {
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    width: 80%;
    max-width: 800px;
    position: relative;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.modal-body {
    margin-top: 1rem;
    overflow: hidden;
    overflow-y: auto;
    max-height: 80vh;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s;
}

.modal-enter,
.modal-leave-to {
    opacity: 0;
}
</style>