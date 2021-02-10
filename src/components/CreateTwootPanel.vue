<template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{'exceeded': newTwootCharacterCount > 180}">
        <label for="newTwoot"><strong>New Twoots</strong>({{ newTwootCharacterCount }} / 180)</label>
        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"></textarea>
        <div class="create-twoot-panel_submit">
            <div class="create-twoot-type">
                <label for="newTwootType"><strong>Type: </strong></label>
                <select id="newTwootType" v-model="state.selectedTwootType">
                    <option :value="option.value" v-for="(option, index) in state.twootType" :key="index">
                        {{ option.name }}  
                    </option> 
                </select>
            </div>
            <button>
               Twoot!
            </button>
        </div>          
    </form>
</template>

<script>
import { reactive, computed } from "vue";
export default {
    name: "CreateTwootPanel",
    setup(props, ctx) {
        const state = reactive({
            newTwootContent: "",
            selectedTwootType: "instant",
            twootType: [
                {value: "draft", name: "Draft"},
                {value: "instant", name: "Instant Twoot"}
            ]
        })

        const newTwootCharacterCount = computed(() => state.newTwootContent.length)
        
        function createNewTwoot() {
            if(state.newTwootContent && state.selectedTwootType != "draft"){
                ctx.emit('add-twoot', state.newTwootContent)
                state.newTwootContent = "";
            }
        }

        return{
            state,
            newTwootCharacterCount,
            createNewTwoot
        }
    }
};
</script>

<style lang="scss" scoped>
.create-twoot-panel {
    margin-top: 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: column;

    textarea {
        border: 1px solid #DFE3E8;
        border-radius: 5px;
    }

    .create-twoot-panel_submit {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;

        .create-twoot-tyoe {
            padding: 10px 0;
        }

        button {
            padding: 5px 20px;
            margin: auto 0;
            border-radius: 5px;
            border: none;
            background-color: #40a7c7;
            color: white;
            font-weight: bold;
        }
    }

    &.exceeded {
        color: red;
        border-color: red;

        .create-twoot-panel_submit {
            button {
                background-color: red;
                color: white;
            }
        }
    }
}
</style>