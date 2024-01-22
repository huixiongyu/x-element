<script setup>
import { reactive, ref } from 'vue'
import Form from '@com/Form/Form.vue'
import FormItem from '@com/Form/FormItem.vue'
import Input from '@com/Input/Input.vue'
import Button from '@com/Button/Button.vue'
import Switch from '@com/Switch/Switch.vue'
import Select from '@com/Select/Select.vue'
const model = reactive({
  email: '',
  password: '',
  confirmPwd: '',
  agreement: false,
  zone: ''
})

const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]
const formRef = ref()
const submit = async () => {
  alert('submitted!')
}
const reset = () => {
  formRef.value.resetFields()
}
</script>

<template>
<div>
  <Form :model="model" ref="formRef">
    <FormItem prop="email" label="邮箱">
      <Input v-model="model.email" />
    </FormItem>
    <FormItem prop="password" label="密码">
      <Input v-model="model.password" type="password" />
    </FormItem>
    <FormItem prop="agreement" label="意向">
      <Switch v-model="model.agreement" />
    </FormItem>
    <FormItem prop="zone" label="区域">
      <Select v-model="model.zone" :options="options" />
    </FormItem>
    <FormItem style="margin-top: 16px">
      <Button @click.prevent="submit" type="primary">提交</Button>
      <Button @click.prevent="reset">重置</Button>
    </FormItem>
  </Form>
  <hr />
  <p>
    form value:
    <pre>{{model}}</pre>
  </p>
</div>
</template>