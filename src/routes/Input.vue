<template>
  <Paper>
    <label for="size">input size</label>
    <Select 
      v-model="selectedOption" 
      :options="selectOptions" 
      size="md"
    />
  </Paper>

  <Paper>
    <Input 
      v-model="nameValue" 
      placeholder="이름을 입력해주세요." 
      message="이름을 다시한번 확인해주세요."
      :size="selectedOption"
    />
    <Input 
      v-model="errorValue" 
      placeholder="error input" 
      required
      message="필수항목입니다."
      :size="selectedOption"
    />

    <Input 
      v-model="readOnlyValue" 
      placeholder="이름을 입력해주세요." 
      readonly
      message="필수항목입니다."
      :size="selectedOption"
    />

    <Input 
      v-model="disabledValue" 
      placeholder="이름을 입력해주세요." 
      disabled
      message="필수항목입니다."
      :size="selectedOption"
    />
  </Paper>

  <Paper>
    <form>
      <Input 
        v-model="idValue" 
        placeholder="ID를 입력해주세요." 
        message="필수항목입니다."
        size="md"
      />
      <Input 
        v-model="pwValue" 
        placeholder="PW를 입력해주세요." 
        message="필수항목입니다."
        size="md"
      />
      <Button 
        variant="bk"
        size="md"
      >
      check 
    </Button>
    </form>
  </Paper>
</template>

<script>
import Input from "~/components/BaseInput.vue";
import Select from "~/components/BaseSelectbox.vue";
import Paper from "~/components/BasePaper.vue";
import Button from "~/components/BaseButton.vue"

export default {
  components: {
    Input,
    Select,
    Button,
    Paper
  },
  data() {
    return {
      selectedOption: "sm",
      selectOptions: [
        { label: "Small", value: "sm" },
        { label: "Medium", value: "md" },
      ],

      nameValue: "text input",
      errorValue: "",
      readOnlyValue: "readOnly input",
      disabledValue: "disabled input",

      
    };
  },
  computed: {

  }
};
</script>